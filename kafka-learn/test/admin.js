const client  = require('./client');

// Create an admin client
async function init(){
    const admin = client.admin();
    console.log('Connecting to Kafka as admin...');
    await admin.connect();
    console.log('Connected to Kafka as admin');
    console.log('Creating topics...');
    await admin.createTopics({
        topics: [
            {
                topic: 'drivers',
                numPartitions: 4,
            }
        ]
    })
    console.log('Topics created');
    console.log('Disconnecting from Kafka...');
    admin.disconnect();
    console.log('Disconnected from Kafka');
}

init();