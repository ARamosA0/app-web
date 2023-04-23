const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ejs = require('ejs')
const session = require('express-session')

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true
}))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/usuario', (req, res)=>{
//     res.render('usuario');
// })

// app.post('/usuario', (req, res)=>{
//     const user = req.body.nomUsuario 
//     console.log(user)
//     req.session.username = user
//     res.redirect('/')
// })

app.get('/', function (req, res) {
    // const {username} = req.session
    res.sendFile(__dirname + '/index.html')
});
// Escuchar la conexión de Socket.IO
// io.on('connection', function (socket) {
//     console.log('Usuario conectado');
//     socket.on('chat message', (msg) => {
//         io.emit('chat message',(msg))
//     });
//     socket.on('disconnect', function () {
//         console.log('Usuario desconectado');
//     });
// });
const users = {};

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('new-user', (username) => {
    users[socket.id] = username;
  });

  socket.on('send-message', (message) => {
    io.emit('chat-message', { message, username: users[socket.id] });
  });

  socket.on('disconnect', () => {
    delete users[socket.id];
    console.log('User disconnected');
  });
});
http.listen(3001, function () {
    console.log('Servidor escuchando en http://localhost:3001/usuario');
});

