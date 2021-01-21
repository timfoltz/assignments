const mongoose = require('mongoose');



const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[ true, "You need a Name!"],
        minlength: [ 3, "Author Name must be 3 or more characters!"]
    },
    // lastName: {
    //     type:String,
    //     required: [true, "You need a Last Name!"],
    //     minlength: [ 3, "Author Last Name must be 3 or more characters!"]
    // },
    // completed: {
    //     type: Boolean,
    //     default: false
    // },
}, {timestamps: true})


mongoose.model("Author", AuthorSchema);