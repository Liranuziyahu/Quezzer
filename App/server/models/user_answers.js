module.exports = (sequelize , Sequelize) =>{
    const user_answers = sequelize.define('user_answers',{
        user_answersID:{
            type: Sequelize.UUID,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true 
        },
        examsID:{
            type: Sequelize.INTEGER
        },
        questionID:{
            type: Sequelize.INTEGER
        },
        userAnswer:{
            type: Sequelize.STRING
        },
    }
    ,{timestamps: false});
    return user_answers
}