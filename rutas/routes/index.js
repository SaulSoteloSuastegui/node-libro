const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.render('index', { titulo: 'Mi App Web con routes' });
});

// Ruta "Acerca de"
router.get('/about', (req, res) => {
    res.render('about', { titulo: 'Acerca de' });
});

module.exports = router;