const Joke = require('../models/jokes.model');
const random = require('mongoose-simple-random')

module.exports.findAllJokes = (req,res) =>{
    Joke.find()
        .then(allDaJokes => res.json({jokes:allDaJokes}))
        .catch(err => res.json({message: "Something went wrong with find all", error:err}));
}

module.exports.findOneJoke = (req,res) =>{
    Joke.find({_id: req.params.id})
        .then(oneJoke => res.json({joke:oneJoke}))
        .catch(err => res.json({message: "Something went wrong with find one", error:err}));
}

module.exports.findRandomJoke = (req,res) =>{
    Joke.aggregate([{$sample: {size: 1}}])
        .then(randomJoke => res.json({joke:randomJoke}))
        .catch(err => res.json({message: "Something went wrong with random", error:err}));
}

module.exports.updateJoke = (req,res) =>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(updatedJoke => res.json({joke:updatedJoke}))
        .catch(err => res.json({message: "Something went wrong with update", error:err}));
}

module.exports.createNewJoke = (req,res) =>{
    Joke.create(req.body)
        .then(newJoke => res.json({joke:newJoke}))
        .catch(err => res.json({message: "Something went wrong with create new", error:err}));
}

module.exports.deleteOneJoke = (req,res) =>{
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result:result}))
        .catch(err => res.json({message: "Something went wrong delete", error:err}));
}
