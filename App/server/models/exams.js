module.exports = (sequelize , Sequelize ) =>{
    const Exams = sequelize.define('exams',{
        examsID:{
            type: Sequelize.UUID,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        categoryExamsID:{
            type: Sequelize.INTEGER
        },
        userID:{
            type: Sequelize.INTEGER
        },
        score:{
            type: Sequelize.INTEGER
        }
    },{timestamps: false});

    return Exams
}