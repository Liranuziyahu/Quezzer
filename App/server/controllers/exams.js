const db = require('./../models')
const Exam = db.exams
const Op = db.Sequelize.Op;

//Create Exam object    
    exports.create = (req , res) =>{
        if(!req.body.userID){
            res.status(404).send({message:'userID cannot be emepty'})
            return;
        }
            const exam = {
                categoryExamsID: req.body.categoryExamsID ,
                userID:req.body.userID,
                score:req.body.score
            }
            console.log(exam)
            Exam.create(exam)
            .then(data => res.send(data))
            .catch(err => res.status(500).send({message:err.message || "Some error occurred while creating the Exam."}))
    }

//Retarive All Exams FROM DB
    exports.findAll = (req , res) =>{
        db.sequelize.query('SELECT examsID , users.userID , users.userName , users.userEmail ,score ,categoryexams.categoryExamsID, categoryexams.categoryExamsName  FROM exams INNER JOIN categoryexams ON exams.categoryExamsID = categoryexams.categoryExamsID INNER JOIN users ON exams.userID = users.userID')
        .then( data => res.send(data[0]))
        .catch(err => res.status(500).send({massage: err.message || "Some error occurred while retrieving the Exams."}))
    } 
    
//Retrive Exam by ID
    exports.findOne =  (req, res) => {
        const id = req.params.id;
        console.log(id)
        Exam.findOne({where: {examsID:id}})
        .then( data => {
            if(data)
                res.send(data)
            else
                res.status(404).send({message:`Can not find Exam where id = ${id}`})
        })
        .catch(err => res.status(500).send({message:`Error retrieving Exams with id = ${id}`}))
    }

//Retrive Exam by userID and CategoryID
    exports.findExam = (req ,res) =>{
        console.log(req.body)
        db.sequelize.query(`SELECT * FROM exams WHERE userID = ${req.body.userID} and categoryExamsID = ${req.body.categoryExamsID}`)
        .then( data => res.send(data))
        .catch(err => res.status(500).send({massage: err.message || "Some error occurred while retrieving the Exams."}))
    }
//Update Exam by ID
exports.update = (req,res) => {
    const id = req.params.id
    Exam.update(req.body , {where: {examsID:id}})
    .then( num => {
        if(num == 1)
            res.send({message:`Exam with id ${id} UPDATE`})
        else
            res.send({message:`Cannot update Exam with id ${id} , maybe it not found`})
    })
    .catch(err => res.status(500).send({message:err.message}))
}

//Delete a Exam aspecified by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Exam.destroy({where: {examsID:id}})
    .then(num => {
        if(num == 1)
            res.send({message:`Exam ${id} DELETED`})
        else
        res.status(404).send({message:`Cannot Delete Exam with ${id}. Maybe Exam cannot found.`})
    })
    .catch(err => {
        res.status(500).send({message:err.message})
    })
}

//Delete all Exam aspecified by UserID
exports.deleteAll = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Exam.destroy({where: {userID:id}})
    .then(num => {
        if(num > 0)
            res.send({message:`Exams of ${id} DELETED`})
        else
        res.status(404).send({message:`Cannot Delete Exam with ${id}. Maybe user cannot found.`})
    })
    .catch(err => {
        res.status(500).send({message:err.message})
    })
}