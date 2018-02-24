import io from 'socket.io-client';
import * as types from './redux/actions/actionTypes';
import * as actions from './redux/actions/actions';

// const socket = io.connect('http://12.9.9.21:3000');

// let socket = null;
const socket = io.connect('http://localhost:3000');

let numOfPixels = 0;
let canvasPixs = {};
let timer = Date.now();
function initCanvasPixs() {
  canvasPixs = {
       clickX: [],
       clickY: [],
    clickDrag: []
  }
}
initCanvasPixs();

function sendPixsAnyway() {
  socket.emit('canvas', canvasPixs);
  initCanvasPixs();
  numOfPixels = 0;;
}

export function socketMiddleware(store) {
  return next => action => {
    const result = next(action);
    // console.log('from socketMiddleware', action.type);
    if (action.type === types.SEND_GUESS) {
      socket.emit('guess', action.guess);
    }
    if (action.type === types.ADD_CLICK) {
      numOfPixels++;
      canvasPixs.clickX.push(action.x);
      canvasPixs.clickY.push(action.y);
      canvasPixs.clickDrag.push(action.dragging);
      if (numOfPixels > 20) {
        socket.emit('canvas', canvasPixs);
        initCanvasPixs();
        numOfPixels = 0;
        clearTimeout(sendPixs);
      }
      const sendPixs = setTimeout(sendPixsAnyway,2000);
    }
    return result;
  };
}

export function onEventSocket(store) {
  socket.on('message', message => {
    store.dispatch(actions.addMessage(message));
  });

  socket.on('allUsers', users => {
    store.dispatch(actions.getUsers(users));
  });

  socket.on('canvasUpdate', canvasPixs => {
    store.dispatch(actions.addPixs(canvasPixs.clickX, canvasPixs.clickY, canvasPixs.clickDrag));
  });

}
