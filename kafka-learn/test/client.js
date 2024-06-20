const { Kafka } = require('kafkajs');

const client = new Kafka({
    clientId: 'test-app',
    brokers: [
        '192.168.4.150:9092',
    ]
})

module.exports = client;