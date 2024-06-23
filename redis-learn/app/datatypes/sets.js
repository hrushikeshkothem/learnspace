const client = require('../client')

async function init(){

    await client.sadd('racing', 'F1')
    await client.sadd('racing', 'MotoGP')
    await client.sadd('racing', 'Nascar')
    await client.sadd('racing', 'F2')
    await client.sadd('racing', 'F3')
    await client.sadd('racing', 'drag')
    await client.sadd('racing', 'rally')
    await client.sadd('racing', 'karting')
    await client.sadd('racing', 'touring')
    await client.sadd('racing', 'hill climb')
    await client.sadd('racing', 'rallycross')
    await client.sadd('racing', 'drift')
    await client.sadd('racing', 'autocross')

    const smembers = await client.smembers('racing')
    console.log('smembers all the members of the set =>', smembers)

    const scard = await client.scard('racing')
    console.log('scard the number of members in the set =>', scard)

    const sismember = await client.sismember('racing', 'F1')
    console.log('sismember check if the member exists in the set =>', sismember)

    const srem = await client.srem('racing', 'F1')
    console.log('srem remove the member from the set =>', srem)

    const newscard = await client.scard('racing')
    console.log('scard the number of members in the set =>', newscard)

    await client.sadd('movies', 'fast and furious')
    await client.sadd('movies', 'rush')
    await client.sadd('movies', 'senna')
    await client.sadd('movies', 'grand prix')
    await client.sadd('movies', 'le mans')
    await client.sadd('movies', 'days of thunder')
    await client.sadd('movies', 'talladega nights')
    await client.sadd('movies', 'f1')
    await client.sadd('movies', 'karting')

    const smembersMovies = await client.smembers('movies')
    console.log('smembers all the members of the set =>', smembersMovies)

    const sinter = await client.sinter('racing', 'movies')
    console.log('sinter the common members between the sets =>', sinter)

    const sunion = await client.sunion('racing', 'movies')
    console.log('sunion all the members between the sets =>', sunion)

}

module.exports = init