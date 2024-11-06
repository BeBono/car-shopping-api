const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const User = sequelize.define('User', {
    id_users: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },

    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },

    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },

    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
   
},

{

    timestamps:false

})

module.exports = User;