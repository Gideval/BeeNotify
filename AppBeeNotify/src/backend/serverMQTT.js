import mqtt from 'precompiled-mqtt';

let messageCallback = null;

console.log("Entro no servidor mqtt");

const client = mqtt.connect('ws://test.mosquitto.org:8080/mqtt');

client.on('connect', () => {
    console.log("Entrou na conexão mqtt")
    console.log("CONNECTED to broker");
    client.subscribe('my/test/Hardware');
    client.subscribe('my/test/Alert');
});

client.on('message', (topic, message) => {
    console.log(`Received message on topic ${topic}: ${message}`);
    if(messageCallback) {
        messageCallback(message.toString());
    }
});

client.on('error', (error) => {
    console.error('MQTT Error: ', error);
});

const disconnectMQTTBroker = () => {
    client.end();
};

const publishMessage = (message) => {
    client.publish('my/test/App', message);
};

const setMessageCallBack = callBack => {
    messageCallback = callBack;
}

export { disconnectMQTTBroker, publishMessage, setMessageCallBack, client };