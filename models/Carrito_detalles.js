const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Carrito_detalles = sequelize.define('Carrito_detalles', {
    id_detalle: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    id_carrito: {
        type: DataTypes.INTEGER
    },

    id_producto: {
        type: DataTypes.INTEGER
    },

    cantidad: {
        type: DataTypes.INTEGER
    },

    carrito: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

   
},

{

    timestamps:false

})

module.exports = Carrito_detalles;