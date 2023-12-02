const express = require("express"); //ES5
const{faker} = require("@faker-js/faker"); //ES5

// invoke express
const app = express();
// console.log(app)
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const generateUserObj = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    passsword: faker.internet.password(),
  });
  
  const generateCompanyObject = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipcode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  });

//api route "/api/users/new" that returns a new user
  app.get("/api/users/new", (req, res) => {
    const newUser = generateUserObj();
    res.json(newUser);
  });
//api route "/api/companies/new" that returns a new company
  app.get("/api/companies/new", (req, res) => {
    const newCompany = generateCompanyObject();
    res.json(newCompany);
  });


  app.get("/api/user/company", (req, res) => {
    const newUser = generateUserObj();
    const newCompany = generateCompanyObject();
    const responseObject = {
      user: newUser,
      company: newCompany,
    };
    res.json(responseObject);
  });


const server = app.listen(PORT, () => {
    console.log(`Server is locked and loaded on port ${PORT}`)
    console.log(`Server is locked and loaded on port ${server.address().port}`)
})