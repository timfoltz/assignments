const mongoose = require('mongoose');
const db = "template-todos"



mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true   
})
.then(()=> console.log(`you have connected to the ${db}`))
.catch((err) => console.log(err))



require("../models/Todo")