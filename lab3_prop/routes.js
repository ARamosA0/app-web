const express = require('express');
const router = express.Router();



router.get('/cursos', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/index.html');
  // const curso = req.query.selectCursos
});

router.post('/nivel', (req, res, next) => {
  // res.sendFile(__dirname + '/public/views/nivel.html');
  const curso = req.query.curso
  const nivel = req.query.nivel
  res.render()
  // res.redirect(`/pago?curso=${curso}&nivel=${nivel}`);
});

router.post('/pago', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/pago.html');
  const pago = req.query.pago
  res.redirect(`/resultados?curso=${curso}&nivel=${nivel}&pago=${pago}`);
});

router.get('/resultados', (req, res, next) => {
  res.sendFile(__dirname + '/public/views/resultado.html');
  const datos = req.body
  res.sendFile('resultado.html', {root:'./public/views'})
});

module.exports = router;