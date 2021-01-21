const authors = require("../controllers/authors");

module.exports = (app) => {

    app.get("/authors",authors.findAll)
    app.post("/authors",authors.create)
    app.put("/authors/:id",authors.update)
    app.get("/authors/:id",authors.findOne)
    app.delete("/authors/:id",authors.delete)

}