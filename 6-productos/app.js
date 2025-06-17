const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

// Configuración básica
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Importar y usar rutas
app.use('/', indexRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});