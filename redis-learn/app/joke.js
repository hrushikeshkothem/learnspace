const redisClient = require('./client');

const fetchJoke = async () => {
    const response = await redisClient.get('joke');
    if(response !== null){
        return response;
    }
    else{
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming',
        {
            headers: {
                'Accept': 'application/json',
                'method': 'GET'
            }
        }
        )
        const joke = await response.json();
        console.log(joke);
        redisClient.set('joke', joke.joke);
        redisClient.expire('joke', 30);
        return joke.joke;
    }
}

module.exports = fetchJoke;