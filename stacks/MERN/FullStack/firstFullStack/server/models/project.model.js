const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:[3, "Min length is 3 characters"]
    },
    price:{type:Number},
    description:{type:String}
}, {timestamps:true});

const Projects = mongoose.model("Projects", ProjectSchema);

module.exports = Projects;