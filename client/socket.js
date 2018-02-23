import io from 'socket.io-client';
import * as types from './redux/actions/actionTypes';
import * as actions from './redux/actions/actions';

// const socket = io.connect('http://12.9.9.21:3000');

// let socket = null;
const socket = io.connect('http://localhost:3000');

export function socketMiddleware(store) {
  return next => action => {
    const result = next(action);
    console.log('sending-socket',types.SEND_GUESS);
    if (action.type === types.SEND_GUESS) {
      socket.emit('guess', action.guess);
    }
    return result;
  };
}

export function startSocket(store) {
  socket.on('message', message => {
    store.dispatch(actions.addMessage(message));
  });
}
