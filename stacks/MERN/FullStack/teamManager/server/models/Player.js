const mongoose = require('mongoose');



const PlayerSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[ true, "You need a Name!"],
        minlength: [ 2, "Player names must be 2 or more characters!"]
    },
    position: {
        type:String,
        default:"WILL PLAY ANYWHERE",
        // required: [true, "You need a position!"],
        // minlength: [ 5, "Position must be 5 or more characters!"]
    },
    gameOne: {
        type:String,
        // required:[ true],
    },
    
    gameTwo: {
        type:String,
        // required:[ true],
    },
    gameThree: {
        type:String,
        // required:[ true],
    },
}, {timestamps: true})


mongoose.model("Player", PlayerSchema);