const mongoose = require('mongoose');
const Author = mongoose.model('Author');



module.exports = {
    create: (req, res) =>{
        Author.create(req.body)   // trip to DB
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
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.status(400).json(err))
    },
    findOne: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body,{new:true,runValidators:true})
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(success => res.json(success))
            .catch(err => res.status(400).json(err))
    },


}