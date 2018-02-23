import io from 'socket.io-client';
import * as actions from 'actions/actions'

// const socket = io.connect('http://localhost:3000');
// const socket = io.connect('http://12.9.9.21:3000');


export default function (store) {
  const socket = io.connect('http://localhost:3000');
  socket.on('message', message => {
    store.dispatch(actions.addMessage(message));
  });
}

// socket.on('welcome', function (data) {
//   console.log(data);
//   socket.emit('test', { message: 'from client' });
// });
//
// const sendGuess = function(message) {
//   socket.emit('guess', message);
// }
//
// const getMessages = function() {
//   socket.on('guess', message);
// }
//
//
// socket.emit('guess', state.guessInput);
