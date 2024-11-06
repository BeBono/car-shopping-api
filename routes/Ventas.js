// /routes/Ventas.js
const express = require('express');
const router = express.Router();
const Ventas = require("../models/Ventas");
const Carrito = require("../models/Carrito");
const Carrito_detalles = require("../models/Carrito_detalles");
const Venta_detalles = require("../models/Venta_detalles");

// Ruta para finalizar la compra
router.post('/finalizar', async (req, res) => {
    const { id_carrito } = req.body;

    try {
        // Crear un registro de venta
        const nuevaVenta = await Ventas.create({
            id_carrito,
            fecha_venta: new Date() // Ejemplo de campo adicional
        });

        // Obtener detalles del carrito
        const detalles = await Carrito_detalles.findAll({ where: { id_carrito } });

        // Agregar detalles de la venta
        const detallesVenta = detalles.map(detalle => ({
            id_venta: nuevaVenta.id_venta,
            id_producto: detalle.id_producto,
            cantidad: detalle.cantidad,
            precio_unitario: detalle.precio_unitario
        }));
        await Venta_detalles.bulkCreate(detallesVenta);

        // Vaciar el carrito después de la compra (opcional)
        await Carrito_detalles.destroy({ where: { id_carrito } });

        res.json({ message: 'Compra finalizada con éxito' });
    } catch (error) {
        console.error("Error al finalizar la compra:", error);
        res.status(500).send('Error al procesar la compra');
    }
});

module.exports = router;
