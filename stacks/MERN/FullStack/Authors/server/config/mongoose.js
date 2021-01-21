const mongoose = require('mongoose');
const db = "authors"



mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true   
})
.then(()=> console.log(`you have connected to the ${db} DB`))
.catch((err) => console.log(err))



require("../models/Author")