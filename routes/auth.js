const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Ventas = require("../models/Ventas");
const Carrito = require("../models/Carrito");
const Productos = require("../models/productos");
const Carrito_detalles = require("../models/Carrito_detalles");
const Venta_detalles = require("../models/Venta_detalles");
const Producto = require('../models/productos');



router.post('/register', async (req, res) => {
    const { nombres, apellidos, correo_electronico, ciudad, nombre_usuario, contrasena } = req.body;

    try {
        let user = await User.findOne({ where: { nombre_usuario } });
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(contrasena, salt);

        user = await User.create({
        
            nombres, 
            apellidos, 
            correo_electronico, 
            ciudad, 
            nombre_usuario, 
            contrasena: hashedPassword
        })

        const payload = {
            user: {
                id_usuario: user.id_usuario
            }
        }

        jwt.sign(payload, 'secret', { expiresIn: 300 }, (error, token) => {
            if (error) return res.status(400).json({ message: error });
            return res.json({ token })
        })

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Error al registrar')
    }

    
    });

    router.post('/login', async (req, res) => {
        const { nombre_usuario, contrasena } = req.body;

    try {

        let user = await User.findOne({ where: { nombre_usuario } });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare( contrasena, user.contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contrasena incorrecta' });
        }

        const payload = {
            user: {
                id_usuario: user.id_usuario
            }
        }


        jwt.sign(payload, 'secret', { expiresIn: 300 }, (error, token) => {
            if (error) res.status(400).json({ message: error });
            return res.json({ token })
        })

    } catch (error) {
        console.error(error.message)
        res.status(500).send('error en el servidor')
    }
                   
})

module.exports = router