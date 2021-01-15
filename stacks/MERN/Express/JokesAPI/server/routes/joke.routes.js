const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/jokes/',JokeController.findAllJokes)
    app.get('/jokes/random/',JokeController.findRandomJoke)
    app.post('/jokes/new',JokeController.createNewJoke)
    app.put('/jokes/update/:id',JokeController.updateJoke)
    app.delete('/jokes/delete/:id',JokeController.deleteOneJoke)
    app.get('/jokes/:id',JokeController.findOneJoke)
}