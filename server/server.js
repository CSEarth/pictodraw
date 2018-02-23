const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const socketio = require('socket.io');
const http = require('http');
const userController = require('./userController');

const app = express();
const server = http.Server(app);
const socket = socketio(server);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req,res,next)=>{
  console.log(req.method, req.url);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname , './../client/index.html'));
});

app.get('/build/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname , './../build/bundle.js'));
});


socket.on('connection', function (client) {
  console.log(client.id);
  client.emit('newswwww', { hello: 'world' });
  client.on('test', function (data) {
    console.log('test',data);
  });
  client.on('canvas', (data) => {
    userController.updataCanvas(data, client);
  });   //
  client.on('message', (data) => {
    userController.chatBox(data, client);
  });
});







server.listen(3000);
