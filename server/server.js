const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const bcrypt = require('bcrypt');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Your MongoDB connection string
const url = process.env.DB_URI;

const ImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Image = mongoose.model('Image', ImageSchema);

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Storage
const Storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single('image'); // Use 'image' instead of 'testImage'

// Handle GET request
app.get('/users', (req, res) => {
  Image.find()
    .then((images) => res.json(images))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Upload failed' });
    }

    const newImage = new Image({
      name: req.body.name,
      image: {
        data: req.file.buffer,
        contentType: 'img/png',
      },
    });

    newImage
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'Save to database failed' });
      });
  });
});  
 
// // Define User Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   about: String
// });

// // Create User Model
// const User = mongoose.model('User', userSchema);

// // Handle GET request
// app.get('/users', (req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// // Handle POST request
// app.post('/users', (req, res) => {
//   const newUser = new User({
//     name: req.body.name,
//     about: req.body.about
//   });

//   newUser.save()
//     .then((user) => res.json(user))
//     .catch((err) => res.status(400).json('Error: ' + err));
// }); 

// Define Log in Schema 
const logInSchema = new mongoose.Schema({ 
  username: String,
  password: String
  })

const Login = mongoose.model("Login", logInSchema);  

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Check if the username already exists
    const existingUser = await Login.findOne({ username });

    if (existingUser) {
      return res.json({ success: false, message: 'Username already exists' });
    }

    // Create a new user
    const newUser = new Login({ username, password: hashedPassword });

    await newUser.save();
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    res.json({ success: false, message: 'Registration failed' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await Login.findOne({ username });

  if (user) {
    // Compare the entered password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

