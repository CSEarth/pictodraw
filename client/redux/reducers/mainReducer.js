import * as types from './../actions/actionTypes';
// import socketController from './../socket';



const initialState = {
  drawer: false,
  users: [],
  correctWord: '',
  messages: [],
  guessInput: '',
  canvas: {
    drawer: true,
    clickX: [],
    clickY: [],
    clickDrag: [],
  }
};

const mainReducer = (state=initialState, action) => {
  console.log('From-reducer', action.type);
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
      // const users = JSON.parse(JSON.stringify(state.users));
      const users = action.users;
      return Object.assign({},
        state,
        {users: users}
      );

    case types.ADD_CLICK:
      const canvas = JSON.parse(JSON.stringify(state.canvas));
      canvas.clickX.push(action.x);
      canvas.clickY.push(action.y);
      canvas.clickDrag.push(action.dragging);
      //console.log('add click in reducer', stateCopy)
      return Object.assign({},
        state,
        {canvas}
      );
    default:
      return state;
  }
};




export default mainReducer;
