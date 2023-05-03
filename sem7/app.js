const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected')
}).catch((error) => {
    console.error(error)
})


const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB error conection'))
db.once('open', function () {
    console.log('Mongo DB Connected')
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const movieSchema = new mongoose.Schema({
    name: String,
    year: String,
    director: String,
    description: String
})

// const User = mongoose.model('User', userSchema)
const Movie = mongoose.model('Movie', movieSchema)

const movieList = [{
    name: 'pellicual1',
    year: '1998',
    director: 'director1',
    description: 'descripcion1'
}, {
    name: 'pellicua2',
    year: '1998',
    director: 'direct2',
    description: 'descripcion2'
}]



// const newUser = new User({
//     name: 'John Doe',
//     email: 'john@example.com',
//     password: '123456'
// })

// newUser.save().then(()=> {
//     console.log('New user created')
// }).catch((error)=> {
//     console.error('Error creating user: ', error)
// })

// User.find().then((users)=>{
//     console.log('All users: ', users)
// }).catch((error)=>{
//     console.error('Error retriving users',error)
// })

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const newMovie = new Movie({
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        description: req.body.description,
    })
    newMovie.save().then(()=>{
        console.log('REGSTRADO')
    }).catch((error)=>{
        console.error('Error al recibir datos', error)
    })
    res.redirect('/ver')
})

app.get('/ver', (req, res) => {
    Movie.find().then((movie)=> {
        console.log(movie)
        res.render('ver', {movies: movie})
    })
})

app.listen(3000, () => console.log("Server runing in http://localhost:3000"))