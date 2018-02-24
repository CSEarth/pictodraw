import * as types from './../actions/actionTypes';
// import socketController from './../socket';



const initialState = {
  drawer: false,
  users: [],
  correctWord: '',
  messages: [],
  guessInput: '',
  canvas: {
    // drawer: true,
    clickX: [],
    clickY: [],
    clickDrag: [],
  }
};

const mainReducer = (state=initialState, action) => {
  // console.log('From-reducer', action.type);
  switch(action.type) {
    case types.SET_GUESS_INPUT:
      // console.log(action.guess);
      return Object.assign({},
        state,
        {guessInput: action.guess}
      );

    case types.SEND_GUESS:
      const input = document.getElementsByTagName('input').input;
      input.value = '';
      return Object.assign({},
        state,
        {guessInput: ''}
      );

    case types.ADD_MESSAGE:
      const messages = JSON.parse(JSON.stringify(state.messages));
      messages.push(action.message);
      return Object.assign({},
        state,
        {messages}
      );

    case types.GET_USERS:
      const users = action.users;
      return Object.assign({},
        state,
        {users: users}
      );

    case types.ADD_CLICK:
      const canvas_click = JSON.parse(JSON.stringify(state.canvas));
      // console.log(action);
      canvas_click.clickX.push(action.x);
      canvas_click.clickY.push(action.y);
      canvas_click.clickDrag.push(action.dragging);
      return Object.assign({},
        state,
        {canvas: canvas_click}
      );

    case types.ADD_PIXS:
      const canvas = JSON.parse(JSON.stringify(state.canvas));
      // console.log(action);
      canvas.clickX = canvas.clickX.concat(action.clickX);
      canvas.clickY = canvas.clickY.concat(action.clickY);
      canvas.clickDrag = canvas.clickDrag.concat(action.clickDrag);
      return Object.assign({},
        state,
        {canvas}
      );

    case types.CLEAR_CANVAS:
      const newCanvas = {
        clickX: [],
        clickY: [],
        clickDrag: [],
      }
      return Object.assign({},
        state,
        {canvas: newCanvas}
      );


    default:
      return state;
  }
};




export default mainReducer;
