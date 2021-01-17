const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/peopledb',{
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// })
mongoose.connect('mongodb://localhost/projectdb',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

.then(()=> console.log("Database connection established"))
.catch(err=>console.log("There was an error connecting to the DB",err))