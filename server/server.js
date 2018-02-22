const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const kimiRouter = require('./kimiRouter');
// const kimiModel = require('./../penguin/kimiModel');
const cookieController = require('./cookie/cookieController');
const userController = require('./user/userController');


const app = express();

const mongoURI =  'mongodb://localhost/cloudPenguin';
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req,res,next)=>{
  console.log(req.method, req.url);
  next();
});

app.use('/kimi', kimiRouter);


app.get('/', (req, res) => {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.sendFile(path.join(__dirname , './../client/login.html'));
});
app.get(/.css$/, (req, res) => {
  res.set("Content-Type", "text/css; charset=utf-8");
  res.sendFile(path.join(__dirname , `./../client${req.url}`));
});
app.get('/build/bundle.js', (req, res) => {
  res.set("Content-Type", "text/css; charset=utf-8");
  res.sendFile(path.join(__dirname , `./../build/bundle.js`));
});


// app.get('/style.css', (req, res) => {
//   res.set("Content-Type", "text/css; charset=utf-8");
//   res.sendFile(path.join(__dirname , './../client/style.css'));
// });
app.get('/signup', (req, res) => {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.sendFile(path.join(__dirname , './../client/signup.html'));
});

app.post('/signup', userController.createUser,
                    cookieController.setSSIDCookie);
app.post('/login', userController.verifyUser,
                   cookieController.setSSIDCookie);




app.listen(3000);
