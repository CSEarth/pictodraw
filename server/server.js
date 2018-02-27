const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
const wordController = require('./wordController');

const app = express();
const server = http.Server(app);
const io = socketio(server);

let currentDrawing = {};
let currentWord = wordController.getANewWord();
let users = [];
let drawerIdx = 0;
clearCanvas();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname , './../index.html'));
});

app.get('/client/styles/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname , './../client/styles/styles.css'));
});

app.get('/build/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname , './../build/bundle.js'));
});

io.on('connection', function (socket) {

  addUsers(socket.id);
  socket.emit('setID', socket.id);
  socket.emit('canvasUpdate', currentDrawing);
  io.emit('allUsers', users);

  socket.on('canvas', (canvasPixs) => {
    updataDrawing(canvasPixs);
    socket.broadcast.emit('canvasUpdate', canvasPixs);
  });

  socket.on('guess', (guess) => {
    const str = `${guess.name}: ${guess.guess}`;
    console.log(str);
    const newMessage = {
      user: guess.name,
      message: guess.guess
    };
    if (isGuessCorrect(guess.guess)) {
      newMessage.message += '        CORRECT ANSWER! Cong!';
      startNewGame();
    }
    io.emit('message', newMessage);
  });

  socket.on('disconnect', function (reason) {
    deleteUser(reason, socket.id);
    io.emit('allUsers', users);
  });
});

function startNewGame() {

  clearCanvas();
  pickNewDrawer();

  //io.emit('clearCanvas');
  io.emit('allUsers', users);
}

function pickNewDrawer() {
  users[drawerIdx].drawer = false;
  users[drawerIdx].correctWord = '';
  drawerIdx++;
  if (drawerIdx >= users.length) drawerIdx = 0;
  currentWord = wordController.getANewWord();
  users[drawerIdx].drawer = true;
  users[drawerIdx].correctWord = currentWord;
}

function isGuessCorrect(guess) {
  return guess.toLowerCase() === currentWord.toLowerCase();
}


function addUsers(id) {
  console.log(id,'  joined in');
  
  let drawer = false;
  let correctWord = '';
  if (users.length === 0) {
    drawer = true;
    correctWord = currentWord;
  }
  const newUser = {
    id: id,
    name: `User ${users.length+1}`,
    correctWord: correctWord,
    drawer
  }
  users.push(newUser);
}

function deleteUser(reason, id) {
  console.log('disconneted', id, reason);

  const index = users.indexOf(users.find((user)=> user.id === id));
  users.splice(index, 1);
 
  if (drawerIdx === index && users.length !== 0) {
    clearCanvas();
    if (drawerIdx >= users.length) drawerIdx = 0;

    currentWord = wordController.getANewWord();
    users[drawerIdx].drawer = true;
    users[drawerIdx].correctWord = currentWord;
  }

  if (drawerIdx > index) drawerIdx--;

  if (users.length === 0) {
    users = []; // maybe not necessary
    drawerIdx = 0;
  }
}

function clearCanvas() {
  setTimeout(function(){ 
    io.emit('clearCanvas');
    currentDrawing = {
      clickX: [],
      clickY: [],
      clickDrag: []
    }
   }, 2400);
}

function updataDrawing(canvasPixs) {
  currentDrawing.clickX = currentDrawing.clickX.concat(canvasPixs.clickX);
  currentDrawing.clickY = currentDrawing.clickY.concat(canvasPixs.clickY);
  currentDrawing.clickDrag = currentDrawing.clickDrag.concat(canvasPixs.clickDrag);
}

server.listen(8000);
