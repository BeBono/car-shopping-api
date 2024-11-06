const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Carrito = sequelize.define('Carrito', {
    id_carrito: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    id_users: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
},

{

    timestamps:false

})

module.exports = Carrito;