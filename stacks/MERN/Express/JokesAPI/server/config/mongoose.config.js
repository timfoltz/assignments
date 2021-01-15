const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jokesAPI',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("established a connection to the DB"))
    .catch(err => console.log("Something went wrong when connecting to the DB", err));
