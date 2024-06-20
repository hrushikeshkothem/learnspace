const { exit } = require('process');
const client = require('./client');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('> ');
rl.prompt();
rl.on('line', (line) => {
    if (line === 'exit') {
        rl.close();
        exit(0);
    }
   const [driverId, partition] = line.split(' ');
   init(driverId, parseInt(partition));
})

function generateRandomDriverLocation(){
    const randomUserId = Math.floor(Math.random() * 3);
    const randomLatitude = Math.random() * 180 - 90;
    const randomLongitude = Math.random() * 360 - 180;
    return {
        driverId: `driver-${randomUserId}`,
        timestamp: Date.now(),
        location: {
            latitude: randomLatitude,
            longitude: randomLongitude
        }
    }
}

async function init(driverId, partition){
    const producer = client.producer({
        allowAutoTopicCreation: false,
        transactionTimeout: 30000,
    });
    console.log('Connecting to Kafka as producer...');
    await producer.connect();
    console.log('Connected to Kafka as producer');
    console.log('Sending messages...');
    await producer.send({
        topic: 'drivers',
        messages: [
            { 
                key: driverId,
                value: JSON.stringify(generateRandomDriverLocation()),
                partition: partition,
            }
        ]
    })
    console.log('Messages sent');
    console.log('Disconnecting from Kafka...');
    producer.disconnect();
    console.log('Disconnected from Kafka');
    rl.prompt('> ');
}
