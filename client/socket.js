import io from 'socket.io-client';
import * as types from './redux/actions/actionTypes';
import * as actions from './redux/actions/actions';

const socket = io.connect('http://10.9.9.21:3000');

// let socket = null;
// const socket = io.connect('http://localhost:3000');

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

// https://redux.js.org/advanced/middleware
export function socketMiddleware(store) {
  return next => action => {
    const result = next(action);
    // console.log('from socketMiddleware', action.type);
    if (action.type === types.SEND_GUESS) {
      const name = store.getState().name;
      const guess = {
        guess: action.guess,
        name: name
      }
      socket.emit('guess', guess);
    }

    if (action.type === types.ADD_CLICK) {
      numOfPixels++;
      canvasPixs.clickX.push(action.x);
      canvasPixs.clickY.push(action.y);
      canvasPixs.clickDrag.push(action.dragging);
      let sendPixs;
      if (numOfPixels > 19) {
        socket.emit('canvas', canvasPixs);
        initCanvasPixs();
        numOfPixels = 0;
        clearTimeout(sendPixs);
      } else {
        sendPixs = setTimeout(sendPixsAnyway,500);
      }
    }
    return result;
  };
}

export function onEventSocket(store) {
  socket.on('setID', id => {
    store.dispatch(actions.setID(id));
  });

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
