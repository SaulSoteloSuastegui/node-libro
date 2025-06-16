const express = require('express');
const path = require('path'); // Para manejar rutas de archivos
const app = express();

// Configuración de EJS
app.set('views', path.join(__dirname, 'views')); // Define la carpeta de vistas
app.set('view engine', 'ejs'); // Establece EJS como motor de plantillas

// Ruta principal que renderiza index.ejs
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Mi App Web' }); // Pasa datos a la vista
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});