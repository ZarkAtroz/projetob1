// models/user.js
const Sequelize = require('sequelize');
const { SequelizeMethod } = require('sequelize/lib/utils');
module.exports = (sequelize) =>{
    const User = sequelize.define('User',{
        id:{
            type: Sequelize.INTEGER,
            autoicrement: true,
            primaryKey:true,
            allowNull:false
        },
        email:{
            type: Sequelize.STRING,
            unique: true,
            allowNull:false
        },
        data_nasc:{
            type: Sequelize.DATE,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        }
    });
    return User;
};