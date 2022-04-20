module.exports = app => { 
    const exams = require('./../controllers/exams')
    let router = require("express").Router();

    //Retrieve a single Exam with id
    router.post("/",exams.findExam)

    app.use('/custom',router)
}