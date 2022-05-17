const db = require('./../models')
const User = db.users
const bcrypt = require('bcrypt');

//Create USER
    exports.create = async (req ,res) => {
        if(!req.body.userName)
        {
            res.status(400).send({message:"userName Cannot Be Empty"})
            return;
        }
        const hashedPassword = await bcrypt.hash(req.body.userPassword, 2)
        try{
            const user = {
                userName:req.body.userName,
                userEmail:req.body.userEmail,
                userPassword: hashedPassword,
                roleID:req.body.roleID
            }
            User.create(user)
            .then(data => res.send(data))
            .catch(err => res.status(500).send({message:err.message || "Some error occurred while creating the User."}))
        }
        catch(err){
            console.error(error);
            res.status(500).send();
        }
           
    }

//Retarive All USERS FROM DB
    exports.findAll = (req,res) => {
         db.sequelize.query('SELECT userID , userName , userEmail , userPassword , role.roleName FROM users INNER JOIN role ON users.roleID = role.roleID')
        .then( data => res.send(data[0]))
        .catch(err => res.status(500).send({massage: err.message || "Some error occurred while retrieving the User."}))
    }

//Retrive USER by ID
    exports.findOne =  (req, res) => {
        const id = req.params.id;
         User.findOne({where: {userID:id}})
        .then( data => {
            if(data)
                res.send(data)
            else
                res.status(404).send({message:`Can not find Tutorial where id = ${id}`})
        })
        .catch(err => res.status(500).send({message:`Error retrieving Tutorial with id = ${id}`}))
    }

//Update USER by ID
    exports.update = (req,res) => {
        const id = req.params.id
        User.update(req.body , {where: {userID:id}})
        .then( num => {
            if(num == 1)
                res.send({message:`User with id ${id} UPDATE`})
            else
                res.send({message:`Cannot update User with id ${id} , maybe it not found`})
        })
        .catch(err => res.status(500).send({message:err.message}))
    }

//Delete a USER aspecified by ID
    exports.delete = (req, res) => {
        const id = req.params.id;
        User.destroy({where: {userID:id}})
        .then(num => {
            if(num == 1)
                res.send({message:`User ${id} DELETED`})
            else
            res.status(404).send({message:`Cannot Delete User with ${id}. Maybe user cannot found.`})
        })
        .catch(err => {
            res.status(500).send({message:err.message})
        })
    }
//Login
    exports.login = async (req , res) =>{
        console.log('Start HERE' , req.body.email)
        const user = await User.findOne({where: {userEmail:req.body.email}})
        try{
            let match = await bcrypt.compare(req.body.password, user.userPassword)
            if(match) res.status(200).send(user)
            else res.status(200).send(false)
        }
        catch{err => console.log(err)}
     }