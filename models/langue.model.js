// const {Sequelize, DataTypes,Model} = require('sequelize');
// const sequilize = require('../Config/database');


module.exports = (sequelize, DataTypes)=>{
    let Langue = sequelize.define('Langue',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        designation: {
            type: DataTypes.STRING
        },
        niveau_p: {
            type: DataTypes.STRING
        },
        niveau_e: {
            type: DataTypes.STRING
        },
        niveau_c: {
            type: DataTypes.STRING
        }
    },{
        timestamps:false
    });

    return Langue;
}

