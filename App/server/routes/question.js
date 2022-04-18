module.exports = app => { 
    const exams = require('./../controllers/questions')
    let router = require("express").Router();

//create a new User
    router.post("/",exams.create)
//Retrieve all User
    router.get("/",exams.findAll)
//Retrieve a single User with id
    router.get("/:id",exams.findOne)
// //update a User with id
    router.put("/:id",exams.update)
// //Delete a User with id
    router.delete("/:id",exams.delete)

    app.use('/questions',router)
}