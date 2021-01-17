const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title:{type:String},
    price:{type:String},
    description:{type:String}
}, {timestamps:true});

const Projects = mongoose.model("Projects", ProjectSchema);

module.exports = Projects;