const string = require('./datatypes/strings')
const list = require('./datatypes/list')
const set = require('./datatypes/sets')
const express = require('express');
const fetchJoke = require('./joke');
const app = express();

function datatypesLearn(){
    string()
    list()
    set()
}

const args = process.argv.slice(2)
if(args[0] === 'datatypes'){
    datatypesLearn()
}
else if(args[0] === 'app'){
    app.get('/', async(req, res) => {
        const joke = await fetchJoke();
        console.log(joke);
        res.send(joke);
    })

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    })
}
else{
    console.log('Invalid argument')
}

