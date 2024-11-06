const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Producto = sequelize.define('Producto', {
    id_producto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descripcion: {
        type: DataTypes.TEXT
    },

    precio: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false  
    },

    imagen_url: {
        type: DataTypes.STRING
    },
   
},

{

    timestamps:false

})

module.exports = Producto;