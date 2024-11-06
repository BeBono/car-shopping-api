const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Ventas = sequelize.define('Ventas', {
    id_venta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    id_users: {
        type: DataTypes.INTEGER
    },

    fecha_venta: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
    },

    total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },

    estado: {
        type: DataTypes.ENUM('Pendiente','Pagado','Enviado','Entregado')
    },
   
},

{

    timestamps:false

})

module.exports = Ventas;