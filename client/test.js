
const canvas = require('./canvas')

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');
socket.on('newswwww', function (data) {
  console.log(data);
  socket.emit('test', { my: 'data' });
});
