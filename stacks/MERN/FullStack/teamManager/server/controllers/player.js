const mongoose = require('mongoose');
const Player = mongoose.model('Player');



module.exports = {
    create: (req, res) =>{
        Player.create(req.body)   // trip to DB
            .then(item => {    // <======= on success
                    console.log(item);
                    res.json(item);
            })
            .catch(err => {    //<========== on failure
                console.log(err);
                res.status(400).json(err)
            })
    },
    findAll: (req, res) => {
        Player.find()
            .then(players => res.json(players))
            .catch(err => res.status(400).json(err))
    },
    findOne: (req, res) => {
        Player.findOne({_id: req.params.id})
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Player.findOneAndUpdate({_id: req.params.id}, req.body,{new:true, runValidators:true})
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Player.deleteOne({_id: req.params.id})
            .then(success => res.json(success))
            .catch(err => res.status(400).json(err))
    },


}