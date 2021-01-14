const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

class User {
  constructor() {
    this.id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
console.log(new User());

class Company {
  constructor() {
    this.id = faker.random.number();
    this.name = faker.company.companyName();
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.country = faker.address.country();
  }
}
console.log(new Company());

const users = new User();
const companies = new Company();
const company = [
                  new User(),
                  new Company()
]
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("These are not the droids you are looking for!");
});

app.get("/api/users/new", (req,res) => {
  res.json(users);
})
app.get("/api/companies/new", (req,res) => {
  res.json(companies);
})
app.get("/api/company", (req,res) => {
  // res.json(company);
  res.json({new: new User(),company: new Company()});
})




const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
