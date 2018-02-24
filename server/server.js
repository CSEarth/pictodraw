const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
// const userController = require('./userController');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connections = [];
const users = [];
let idxUser = 1;
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use((req,res,next)=>{
  console.log(req.method, req.url);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname , './../client/test.html'));
});

app.get('/build/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname , './../build/bundle.js'));
});

  // io.emit('welcome', { hello: 'world' });// send  to all sockets that connect to '/'

io.on('connection', function (socket) {

  addUsers(socket.id);
  io.emit('allUsers', users);


  // socket.on('canvas', (data) => {
  //   userController.updataCanvas(data, socket);
  // });
  socket.on('guess', (guess) => {
    const str = `user-${socket.id}: ${guess}`;
    console.log(guess);
    const message = {
      user: socket.id,
      message: guess
    };
    io.emit('message', message);
  });
  socket.on('disconnect', function (reason) {
    deleteUser(reason, socket.id);
  });
});



function addUsers(id) {
  console.log(id,'  joined in');
  connections.push(id);
  let drawer = false;
  if (idxUser === 1) drawer = true;
  const newUser = {
    id: id,
    name: `User ${idxUser}`,
    drawer
  }
  users.push(newUser);
  idxUser++;
}

function deleteUser(reason, id) {
  console.log('disconneted id', reason);
  const index = connections.indexOf(id);
  connections.splice(index, 1);
  users.splice(index, 1);
}





server.listen(3000);
