const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('../config/db');

const Pagos = sequelize.define('Pagos', {
    id_pago: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    id_venta: {
        type: DataTypes.INTEGER
    },

    metodo_pago: {
        type: DataTypes.ENUM('QR','Tarjeta','Efectivo'),
        allowNull: false
    },

    estado: {
        type: DataTypes.ENUM('Pendiente','Completado','Fallido')
    },

    fecha_pago: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOWf
    }

},

{

    timestamps:false

})

module.exports = Pagos;