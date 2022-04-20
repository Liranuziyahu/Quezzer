module.exports = app => { 
    const exams = require('./../controllers/exams')
    let router = require("express").Router();

//create a new Exam
    router.post("/",exams.create)
//Retrieve all Exams
    router.get("/",exams.findAll)
//Retrieve a single Exam with id
    router.get("/:id",exams.findOne)
//update a Exam with id
    router.put("/:id",exams.update)
//Delete a Exam with id
    router.delete("/:id",exams.delete)

app.use('/exams',router)
}