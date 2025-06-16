const express = require('express');
const path = require('path');
const app = express();

// Configuración básica
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Importar y usar rutas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});