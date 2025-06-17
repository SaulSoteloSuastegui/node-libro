const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.render('index', { titulo: 'Mi App Web con routes' });
});

// Ruta principal
router.get('/nosotros', (req, res) => {
    res.render('nosotros', { titulo: 'Mi App Web con routes' });
});

// Ruta principal
router.get('/productos', (req, res) => {
    res.render('productos', { titulo: 'Mi App Web con routes' });
});


module.exports = router;