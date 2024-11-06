const express = require('express');
const path = require('path');
const { connectDB } = require('./config/db');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta registro
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'crear_cuenta.html'));
});

// Ruta registro
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'productos.html'));
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'carrito.html'));
});

// Importar y usar las rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/Carrito', require('./routes/Carrito'));
app.use('/api/Ventas', require('./routes/Ventas')); // Nueva ruta para ventas

// Ruta para manejar errores 404
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
const PORT = process.env.PORT || 6000;
app.listen(PORT, async () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
    const { sequelize } = require('./config/db');
    try {
        await sequelize.sync();
        console.log('Base de datos sincronizada');
    } catch (error) {
        console.error('Error conectando a la base de datos', error);
    }
});


//*************************************************************1st version

// const express = require('express');
// const path = require('path');
// const {connectDB} = require('./config/db');
// const bodyParser = require('body-parser');
// require('dotenv').config()
// const cors = require('cors')

// const app = express();
// connectDB()
// app.use(cors())
// app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'crear_cuenta.html'));
// })

// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/Carrito', require('./routes/Carrito'));

// const PORT = process.env.PORT || 5000;

// app.use((req, res)=>{
//     res.status(404).send('pagina no encontrada')
// })

// app.listen(PORT, async()=>{
//     console.log(`servidor escuchando en el puerto http://localhost:${PORT}`)
//     const {sequelize} = require('./config/db')
//     try{
//         await sequelize.sync();
//         console.log('Base de datos sincronizada')
//     }catch(error){
//         console.error('Error connecting to database', error)
//     }
// })

