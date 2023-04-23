const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de la carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de las vistas
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');


// Configuración de las rutas
app.get('/', (req, res) => {
  res.render('index')
});


app.post('/resultado', (req, res) => {
  const curso = req.body.curso;
  const modulos = req.body.modulos;
  const pago = req.body.pago;
  let precio = 0;
  switch (curso) {
    case 'java':
      precio = 1200;
      break;
    case 'php':
      precio = 800;
      break;
    case 'net':
      precio = 1500;
      break;
  }
  console.log(precio)
  const total =  precio;
  const descuento = pago === 'efectivo' ? total * 0.1 : 0;
  const totalConDescuento = total - descuento;
  console.log(req.body)
  res.render('resultado', { curso, modulos, pago, total: totalConDescuento });
});


// Inicialización del servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});