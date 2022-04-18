module.exports = (sequelize , Sequelize) =>{
    const Question = sequelize.define('questions',{
        questionID:{
            type: Sequelize.UUID,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        categoryExamsID:{
            type: Sequelize.INTEGER
        },
        questionTheQuestion:{
            type: Sequelize.STRING
        },
        questionTrueAnswer:{
            type: Sequelize.STRING
        },
        answer1:{
            type: Sequelize.STRING
        },
        answer2:{
            type: Sequelize.STRING
        },
        answer3:{
            type: Sequelize.STRING
        },
        answer4:{
            type: Sequelize.STRING
        }},
        {
                timestamps: false
        });
    return Question
}