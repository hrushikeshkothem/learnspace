const client = require('./client');
const group = process.argv[2];

async function consumeMessage({ topic, partition, message }) {
    console.log({
        topic,
        partition,
        key: message.key.toString(),
        value: message.value.toString(),
    });
}

async function init(){
    const consumer = client.consumer({
        groupId: group,
        allowAutoTopicCreation: false,
    })
    console.log('Connecting to Kafka as consumer...');
    await consumer.connect();
    console.log('Connected to Kafka as consumer');
    console.log('Subscribing to topics...');
    await consumer.subscribe({
        topic: 'drivers',
        fromBeginning: true,
    });
    console.log('Subscribed to topics');
    console.log('Consuming messages...');
    await consumer.run({
        eachMessage: consumeMessage,
    });
}

init();