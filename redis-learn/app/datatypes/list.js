const client = require('../client')

async function init(){
    const lpush = await client.lpush('online_users', 'John Doe')
    console.log('lpush a new key and string value result =>', lpush)

    const rpush = await client.rpush('online_users', 'Hrushikesh')
    console.log('rpush a new key and string value result =>', rpush)

    const llen = await client.llen('online_users')
    console.log('get the length of the list =>', llen)

    const lpop = await client.lpop('online_users')
    console.log('lpop the left most element =>', lpop)

    const rpop = await client.rpop('online_users')
    console.log('rpop the right most element =>', rpop)

    const newllen = await client.llen('online_users')
    console.log('get the new length of the list =>', newllen)

    const newlpush = await client.lpush('online_users', 'John Doe')
    console.log('lpush a new key and string value result =>', newlpush)

    const ltrim = await client.ltrim('online_users', 0, 0)
    console.log('ltrim the list =>', ltrim)

    const blpop = await client.blpop('online_users', 10)
    console.log('blpop the left most element from the list =>', blpop)

    const lrange = await client.lrange('online_users', 0, -1)
    console.log('lrange the list =>', lrange)

    const offline_lrange = await client.lrange('offline_users', 0, -1)
    console.log('lrange the list =>', offline_lrange)
}

module.exports = init