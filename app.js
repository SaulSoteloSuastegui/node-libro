const express = require('express');
const path=require('path');
const app = express();



//Define la carpeta de vistas
app.set('views', path.join(__dirname,'views'));
//Establece EJS Como motor de plantillas
app.set('view engine','ejs');


// Ruta principal que renderiza index.ejs
app.get('/', (req,res)=>
{
  res.render('index', { titulo:'Mi app web'});
}
);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});