const { builtinModules } = require("module");
const player = require("../controllers/player");

module.exports = (app) => {

    app.get("/player",player.findAll)
    app.post("/player",player.create)
    app.get("/player/:id",player.findOne)
    app.delete("/player/:id",player.delete)
    app.put("/player/:id",player.update)

}