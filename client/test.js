
const canvas = require('./canvas')

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');
// const socket = io.connect('http://12.9.9.21:3000');
socket.on('welcome', function (data) {
  console.log(data);
  socket.emit('test', { message: 'from client' });
});

socket.on('welcome2', function (data) {
  console.log(data);
});
