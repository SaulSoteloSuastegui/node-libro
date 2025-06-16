const express = require('express');
const app = express();

// Ruta básica que devuelve JSON
app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola Mundo', version: '1.0' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});