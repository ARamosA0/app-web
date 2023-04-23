const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/login.html');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});


// const express = require('express');
// const router = express.Router()

// router.get('/', function(req, res, next){
//     res.render('login')
// })

// module.exports = router