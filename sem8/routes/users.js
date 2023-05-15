const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const bcrypt = require('bcrypt')
const saltRounds = 10
const { body, validationResult } = require('express-validator');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

router.get('/',
          body('email').isEmail().normalizeEmail,
          body('password').isLength({
            min:6
          }),
          async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
});

router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.redirect('/users');
});

router.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('partials/edit', { user });
});

router.post('/update/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/users');
});

router.get('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/users');
});

module.exports = router;

