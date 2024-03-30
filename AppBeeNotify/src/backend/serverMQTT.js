import mqtt from 'precompiled-mqtt';
import { USER_NAME, PASSWORD, CONNECT_MQTT } from './constants';

let messageCallback = null;

const options = {
    username: USER_NAME,
    password: PASSWORD,
    clientId: `mqttjs_${Math.random().toString(16).substring(2, 8)}`,
};

const client = mqtt.connect(CONNECT_MQTT, options);

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('my/test/Hardware');
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