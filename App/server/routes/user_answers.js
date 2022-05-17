module.exports = app => {
    const user_answers = require('./../controllers/user_answers')
    const router = require('express').Router();

    //Create a new User Answers
        router.post('/' ,user_answers.create)
    //Get All User Answers
        router.get('/',user_answers.findAll)
    //Get all answers by Exam
        router.get('/:id',user_answers.answersExam)
    //Delete All answers by examID
        router.delete('/:id',user_answers.DeleteByID)

    app.use('/answer',router)
}