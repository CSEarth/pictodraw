const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const socketio = require('socket.io');
const http = require('http');
const userController = require('./userController');

const app = express();
const server = http.Server(app);
const io = socketio(server);

//
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


io.on('connection', function (socket) {
  console.log(socket.id,'  joined in');
  // io.emit('welcome', { hello: 'world' });// send  to all sockets that connect to '/'
  socket.emit('welcome', { hello: 'world' });
  socket.on('test', function (data) {
    console.log('test',data);
    socket.emit('welcome2','hello again');
  });
  socket.on('canvas', (data) => {
    userController.updataCanvas(data, client);
  });   //
  socket.on('message', (data) => {
    userController.chatBox(data, client);
  });
  socket.on('disconnect', function (reason) {
    console.log('disconneted  id=',socket.id, reason);
  });
});







server.listen(3000);
