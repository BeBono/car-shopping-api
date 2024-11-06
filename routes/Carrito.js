// En el archivo Carrito.js
const express = require('express');
const router = express.Router(); // Aquí definimos el enrutador
const { Carrito_detalles } = require('../models/Carrito_detalles'); // Asegúrate de tener los modelos correctamente importados
const Carrito = require('../models/Carrito'); // Asegúrate de que esta ruta sea correcta
const Productos = require('../models/productos'); // Asegúrate de que esta ruta sea correcta


router.post('/:id_carrito/productos', async (req, res) => {
    const { id_carrito } = req.params;
    const { id_productos, cantidad } = req.body;
    console.log("Datos recibidos:", req.body);

    try {
        // Verifica si el producto ya está en el carrito
        let productoExistente = await Carrito_detalles.findOne({
            where: { id_carrito, id_producto: id_productos }
        });

        if (productoExistente) {
            // Si el producto ya existe, actualiza la cantidad
            productoExistente.cantidad += cantidad;
            await productoExistente.save();
            return res.json({ message: 'Producto actualizado en el carrito' });
        }

        // Si el producto no está en el carrito, lo agrega
        await Carrito_detalles.create({
            id_carrito,
            id_producto: id_productos,
            cantidad
        });

        res.json({ message: 'Producto agregado al carrito' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error al agregar producto al carrito');
    }
});


// Ruta para obtener productos
router.get('/productos', async (req, res) => {
    try {
        const productos = await Productos.findAll();
        res.json(productos);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error al obtener productos');
    }
});

module.exports = router; // Exporta el enrutador correctamente
