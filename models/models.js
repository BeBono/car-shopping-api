const { Sequelize } = require('sequelize');
const User = require('./User');
const Carrito = require('./Carrito');
const Productos = require('./productos');
const Carrito_detalles = require('./Carrito_detalles');
const Ventas = require('./Ventas');
const Venta_detalles = require('./Venta_detalles');
const Pagos = require('./Pagos');

// Relaciones entre las tablas
User.hasMany(Carrito, { foreignKey: 'id_users' });
Carrito.belongsTo(User, { foreignKey: 'id_users' });

Carrito.hasMany(Carrito_detalles, { foreignKey: 'id_carrito' });
Carrito_detalles.belongsTo(Carrito, { foreignKey: 'id_carrito' });

Productos.hasMany(Carrito_detalles, { foreignKey: 'id_producto' });
Carrito_detalles.belongsTo(Productos, { foreignKey: 'id_producto' });

User.hasMany(Ventas, { foreignKey: 'id_users' });
Ventas.belongsTo(User, { foreignKey: 'id_users' });

Ventas.hasMany(Venta_detalles, { foreignKey: 'id_venta' });
Venta_detalles.belongsTo(Ventas, { foreignKey: 'id_venta' });

Venta_detalles.hasMany(Productos, { foreignKey: 'id_producto' });
Productos.belongsTo(Venta_detalles, { foreignKey: 'id_producto' });

Ventas.hasOne(Pagos, { foreignKey: 'id_venta' });
Pagos.belongsTo(Ventas, { foreignKey: 'id_venta' });

module.exports = {
  User,
  Carrito,
  Productos,
  Carrito_detalles,
  Ventas,
  Venta_detalles,
  Pagos,
};


// const { sequelize } = require('./config/db');

// sequelize.sync({ force: true }) // Esto eliminará y recreará las tablas, úsalo solo si es necesario
//   .then(() => {
//     console.log('Tablas sincronizadas correctamente');
//   })
//   .catch((error) => {
//     console.error('Error al sincronizar las tablas:', error);
//   });


//************************************primary version:

// const { FOREIGNKEYS } = require("sequelize/lib/query-types");
// const Ventas = require("./Ventas");
// const User = require("./User");
// const Carrito = require("./Carrito");
// const Productos = require("./productos");
// const Carrito_detalles = require("./Carrito_detalles");
// const Venta_detalles = require("./Venta_detalles");
// const {Sequelize} = require('sequelize');

// User.hasMany(Carrito, {FOREIGNKEYS: 'id_users'})
// Carrito.belongsTo(User, {FOREIGNKEYS: 'id_users'})

// Carrito.hasMany(Carrito_detalles, {FOREIGNKEYS: 'id_carrito'})
// Carrito_detalles.belongsTo(Carrito, {FOREIGNKEYS: 'id_carrito'})

// Productos.hasMany(Carrito_detalles, {FOREIGNKEYS: 'id_productos'})
// Carrito_detalles.belongsTo(Productos, {FOREIGNKEYS: 'id_productos'})

// User.hasMany(Ventas, {FOREIGNKEYS: 'id_users'})
// Ventas.belongsTo(User, {FOREIGNKEYS: 'id_users'})

// Ventas.hasMany(Venta_detalles, {FOREIGNKEYS: 'id_ventas'})
// Venta_detalles.belongsTo(Ventas, {FOREIGNKEYS: 'id_ventas'})

// Venta_detalles.hasMany(Productos, {FOREIGNKEYS: 'id_productos'})
// Productos.belongsTo(Venta_detalles, {FOREIGNKEYS: 'id_productos'})


//Second version******************************************************** */


// const Ventas = require("./Ventas");
// const User = require("./User");
// const Carrito = require("./Carrito");
// const Productos = require("./productos");
// const Carrito_detalles = require("./Carrito_detalles");
// const Venta_detalles = require("./Venta_detalles");

// Define relationships

// User.hasMany(Carrito, { foreignKey: 'id_users' });
// Carrito.belongsTo(User, { foreignKey: 'id_users' });

// Carrito.hasMany(Carrito_detalles, { foreignKey: 'id_carrito' });
// Carrito_detalles.belongsTo(Carrito, { foreignKey: 'id_carrito' });

// Productos.hasMany(Carrito_detalles, { foreignKey: 'id_productos' });
// Carrito_detalles.belongsTo(Productos, { foreignKey: 'id_productos' });

// User.hasMany(Ventas, { foreignKey: 'id_users' });
// Ventas.belongsTo(User, { foreignKey: 'id_users' });

// Ventas.hasMany(Venta_detalles, { foreignKey: 'id_ventas' });
// Venta_detalles.belongsTo(Ventas, { foreignKey: 'id_ventas' });

// // This relationship seems inconsistent; assuming each Venta_detalle refers to one Producto
// Venta_detalles.belongsTo(Productos, { foreignKey: 'id_productos' });
// Productos.hasMany(Venta_detalles, { foreignKey: 'id_productos' });
