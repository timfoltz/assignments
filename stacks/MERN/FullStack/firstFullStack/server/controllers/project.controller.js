const { response } = require("express");

const Projects = require('../models/project.model')





module.exports.index = (request, response) =>{
    response.json({
        message:"Hello World"
    })
}



module.exports.createProject= (request, response) =>{
    const {title, price, description} = request.body;
    Projects.create({
        title,
        price,
        description
    })
        .then(project=>response.json(project))
        .catch(err=>response.json(err))
}


module.exports.findAllProjects = (req, res) => {
    Projects.find()
        .then(allDaProjects => res.json({ projects: allDaProjects }),
        console.log(res))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.findOneProject = (req, res) => {
    Projects.findOne({_id:req.params.id})
        .then(project => res.json(project))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.updateProject = (req, res) => {
    Projects.findOneAndUpdate({_id:req.params.id}, req.body)
        .then(updatedProject => res.json(updatedProject))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.deleteProject = (req, res) => {
    Projects.deleteOne({_id:req.params.id}, req.body)
        .then(deleteConf => res.json(deleteConf))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};