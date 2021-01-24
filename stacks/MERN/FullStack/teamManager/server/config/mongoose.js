const mongoose = require('mongoose');
const db = "team-manager"



mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true   
})
.then(()=> console.log(`you have connected to the ${db}`))
.catch((err) => console.log(err))



require("../models/Player")