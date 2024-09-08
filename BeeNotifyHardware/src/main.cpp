#define TINY_GSM_MODEM_A7672X
#define TINY_GSM_RX_BUFFER 1024 // Set RX buffer to 1Kb

#define SerialAT Serial1
#define SerialMon Serial

#include <Arduino.h>
#include <TinyGsmClient.h>

//Definição dos pinos para o sensor maginético e o sensor de luminosidade
#define SENSOR_PIN 32
#define LED_PIN 33
#define LUZ_PIN 36

int sensor;
int luminosidade = 0;

//Variáveis de gerenciamento do módulo GSM SimA7670G
#define UART_BAUD 115200
#define PIN_DTR 25
#define PIN_TX 26
#define PIN_RX 27
#define PWR_PIN 4

//Variáveis de configuração da rede móvel (nesse caso o chip é da operadora vivo)
const char* apn = "zap.vivo.com.br";
const char* gprsUser = "vivo";
const char* gprsPass = "vivo";

TinyGsm modem(SerialAT);
TinyGsmClient client(modem);

//Função para ligar o modem SimA7670G
void modemPowerOn() {
  pinMode(PWR_PIN, OUTPUT);
  digitalWrite(PWR_PIN, LOW);
  delay(1000);
  digitalWrite(PWR_PIN, HIGH);
}

//Função para resetar o modem SimA7670G
void modemPowerOff() {
  pinMode(PWR_PIN, OUTPUT);
  digitalWrite(PWR_PIN, LOW);
  delay(1500);
  digitalWrite(PWR_PIN, HIGH);
}

void modemRestart() {
  modemPowerOff();
  delay(1000);
  modemPowerOn();
}

//Verifica coinexão com o servidor MQTT
bool checkMQTTConnection();

//Função para envio de comandos AT para o SimA7670G
bool sendATCommand(const char* command, const char* expectedResponse = "OK", unsigned long timeout = 10000);

// Função para publicar mensagem
void publishMessage(const char* message, const char* topic);

void processResponse();

unsigned long previousMillis = 0;  // Variável para armazenar o último tempo em que verificamos a conexão
const long interval = 20000;

void setup() {
  SerialMon.begin(115200);
  delay(10);

  pinMode(SENSOR_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);

  analogReadResolution(12); // Set ADC resolution to 12 bits (0-4095)
  analogSetAttenuation(ADC_11db);

  modemPowerOn();
  SerialAT.begin(UART_BAUD, SERIAL_8N1, PIN_RX, PIN_TX);//Inicializa SimA7670G

  SerialMon.println("Initializing modem...");
  modem.restart();

  //Verifica conexão com a rede móvel
  SerialMon.print("Waiting for network...");
  if (!modem.waitForNetwork()) {
    SerialMon.println(" fail");
    while (true);
  }
  SerialMon.println(" success");

  //Configura APN da operadora
  SerialMon.print("Connecting to GPRS...");
  if (!modem.gprsConnect(apn, gprsUser, gprsPass)) {
    SerialMon.println(" fail");
    while (true);
  }
  SerialMon.println(" success");

  delay(2000);

  //Comandos iniciais enviado para o modem 
  SerialAT.println("AT"); //verifica se o modem está respondendo
  delay(1000);
  SerialAT.println("AT+CSQ"); // Verifica sinal rede móvel
  delay(1000);
  SerialAT.println("AT+NETOPEN"); // conecta com a internet
  delay(1000);

  //Inicia configuração para trocas de mensagens via protocolo MQTT
  delay(5000); 

  //Inicia serviço MQTT
  if (!sendATCommand("AT+CMQTTSTART", "+CMQTTSTART: 0")) {
    Serial.println("Failed to start MQTT service");
    return;
  }
  delay(3000); 

  //Configura Cliente MQT
  if (!sendATCommand("AT+CMQTTACCQ=0,\"client_Val1\"")) {
    Serial.println("Failed to acquire MQTT client");
    return;
  }
  delay(3000);

  // Se conecta ao servidor broker
  if (!sendATCommand("AT+CMQTTCONNECT=0,\"tcp://broker.hivemq.com:1883\",60,1", "+CMQTTCONNECT: 0,0", 20000)) {
    Serial.println("Failed to connect to MQTT broker");
    return;
  }
  delay(3000);

  //Se inscreve em um tópico
  sendATCommand("AT+CMQTTSUB=0,9,1", "+CMQTTSUB: 0,0", 5000);
  delay(2000);
  sendATCommand("alarm/app", "+CMQTTSUB: 0,0", 10000);
  delay(5000);
  
}

void loop() {
  //Ler constantemente os sinais dos sensores magnético e luminosidade
  sensor = digitalRead(SENSOR_PIN);
  luminosidade = analogRead(LUZ_PIN);
  unsigned long currentMillis = millis();

  //Espera se conectar na rede móvel caso a rede tenha caido
  if (!modem.waitForNetwork()) {
    SerialMon.println("Conexão com rede falhou");
    while (true);
  }

  static String response = "";
  while (SerialAT.available()) {
    SerialMon.println("Entrou no serialAT");
    SerialMon.println("Response: " + response);
    char c = SerialAT.read();
    response += c;
    if (response.indexOf("sinal") != -1) {
      processResponse();
      response = "";
    }
  }

   if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    if (!checkMQTTConnection()) {
      Serial.println("Try Reconnected MQTT broker");

      sendATCommand("AT+CMQTTCONNECT=0,\"tcp://broker.hivemq.com:1883\",60,1", "+CMQTTCONNECT: 0,0", 20000);

      delay(3000);
      //Se inscreve em um tópico
      sendATCommand("AT+CMQTTSUB=0,9,1", "+CMQTTSUB: 0,0", 5000);
      //delay(500);
      sendATCommand("alarm/app", "+CMQTTSUB: 0,0", 10000);
      delay(20000);
    }
  
  }

  //Verifica se o sensor magnético está fechado ou aberto e se é dia ou noite
  if(sensor == HIGH && luminosidade < 1000)
  {
    Serial.println("Sensor aberto");
    digitalWrite(LED_PIN, HIGH);

    publishMessage("alerta", "alarm/hardware");
  }
  else{
    //Serial.println("Sensor fechado");
    digitalWrite(LED_PIN, LOW);
  }
  

  
}

bool checkMQTTConnection() {
  return sendATCommand("AT+CMQTTCONNECT?", "+CMQTTCONNECT: 0,\"tcp://broker.hivemq.com:1883\",60,1", 5000);
}

bool sendATCommand(const char* command, const char* expectedResponse, unsigned long timeout) {
  Serial.print("Sending: ");
  Serial.println(command);
  
  SerialAT.write(command, strlen(command));
  SerialAT.write("\r\n");  // Explicitly send carriage return and line feed
  
  unsigned long startTime = millis();
  String response = "";
  bool success = false;

  while (millis() - startTime < timeout) {
    if (SerialAT.available()) {
      char c = SerialAT.read();
      response += c;
      Serial.print(c);
      if (response.endsWith("\r\n")) {
        if (response.indexOf("ERROR") != -1) {
          success = false;
          break;
        }
        if (expectedResponse == NULL || response.indexOf(expectedResponse) != -1) {
          success = true;
          break;
        }
        response = "";
      }
    }
  }

  Serial.println();
  return success;
}

void publishMessage(const char* message, const char* topic)
{
    int topicLength = strlen(topic);
    String commandTopic = "AT+CMQTTTOPIC=0," + String(topicLength);

    int messageLenght = strlen(message);
    String commandMessage = "AT+CMQTTPAYLOAD=0," + String(messageLenght);

    sendATCommand(commandTopic.c_str());
      delay(2000);

      if (!sendATCommand(topic)) {
        Serial.println("Failed to send MQTT topic");
        return;
      }
      delay(3000);

      sendATCommand(commandMessage.c_str());
      delay(2000);

      if (!sendATCommand(message)) {
        Serial.println("Failed to send MQTT payload");
        return;
      }
      delay(2000);

      if (!sendATCommand("AT+CMQTTPUB=0,1,60", "+CMQTTPUB: 0,0")) {
        Serial.println("Failed to publish MQTT message");
        return;
      }
      delay(3000);
}

void processResponse() {
  
  SerialMon.println("Entrou processResponse");
  delay(3000);

  publishMessage("ok", "alarm/hardware");
  delay(2000);
     
}