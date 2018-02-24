import * as types from './../actions/actionTypes';
// import socketController from './../socket';



const initialState = {
  drawer: false,
  id: '',
  name: '',
  users: [],
  correctWord: '',
  messages: [],
  guessInput: '',
  canvas: {
    clickX: [],
    clickY: [],
    clickDrag: [],
  }
};

const mainReducer = (state=initialState, action) => {
  // console.log('From-reducer', action.type);
  switch(action.type) {
    case types.SET_ID:
      // const newState = Object.assign({}, state);
      // newState.id =
      return Object.assign({},
        state,
        {id: action.id}
      );

    case types.GET_USERS:
      const users = action.users;
      let drawer = false;
      let name = '';
      let correctWord = '';
      for (let user of users) {
        // console.log(user);
        if (user.id === state.id)  {
          drawer = user.drawer;
          name = user.name;
          correctWord = user.correctWord;
        }
      }
      // console.log('username', users);
      return Object.assign({},
        state,
        {users: users},
        {correctWord: correctWord},
        {drawer:drawer},
        {name: name}
      );

    case types.SET_GUESS_INPUT:
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
        {messages: messages}
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
        {canvas: canvas}
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
