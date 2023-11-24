const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Your MongoDB connection string
const dbURI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  about: String
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Handle GET request
app.get('/users', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Handle POST request
app.post('/users', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    about: req.body.about
  });

  newUser.save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
