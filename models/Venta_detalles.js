const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Venta_detalles = sequelize.define('Venta_detalles', {
    id_detalle: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    id_venta: {
        type: DataTypes.INTEGER
    },

    id_producto: {
        type: DataTypes.INTEGER
    },

    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    precio: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false  
    },
   
},

{

    timestamps:false

})

module.exports = Venta_detalles;