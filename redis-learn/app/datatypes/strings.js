const client = require('../client')

async function init(){
    const set = await client.set('user:3', 'John Doe')
    console.log('set a new key and string value result =>', set)

    const get = await client.get('user:3')
    console.log('get the value of the key =>', get)

    console.log('setnx for new key will return 1 and for existing key will return 0')
    
    const setnxFalse = await client.setnx('user:3', 'Hrushikesh')
    console.log('setnx for existing key =>', setnxFalse)

    const setnxTrue = await client.setnx('user:4', 'Hrushikesh')
    console.log('setnx for new key =>', setnxTrue)

    const mset = await client.mset('user:4', 'John Doe', 'user:5','ajay')
    console.log('mset multiple keys and values =>', mset)

    const mget = await client.mget('user:3', 'user:4', 'user:5')
    console.log('mget multiple keys values =>', mget)

    const users = await client.set('user:len', 3)
    console.log('set a new key and integer value =>', users)

    const incr = await client.incr('user:len')
    console.log('increment the integer value =>', incr)

    const incrby = await client.incrby('user:len', 5)
    console.log('increment the integer value by 5 =>', incrby)

    const decr = await client.decr('user:len')  
    console.log('decrement the integer value =>', decr)

    const decrby = await client.decrby('user:len', 2)
    console.log('decrement the integer value by 2 =>', decrby)
}

module.exports = init