module.exports = app => { 
    const users = require('./../controllers/user')
    let router = require("express").Router();

//create a new User
    router.post("/",users.create)
//Retrieve all User
    router.get("/",users.findAll)
//Retrieve a single User with id
    router.get("/:id",users.findOne)
// //update a User with id
    router.put("/:id",users.update)
// //Delete a User with id
    router.delete("/:id",users.delete)

    app.use('/user',router)
}