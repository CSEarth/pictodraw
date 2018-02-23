import * as types from './../actions/actionTypes';
// import socketController from './../socket';




const initialState = {
  drawer: false,
  users: [],
  correctWord: '',
  messages: [],
  guessInput: ''
};

const mainReducer = (state=initialState, action) => {
  // const marketList = JSON.parse(JSON.stringify(state.marketList));
  switch(action.type) {
    case types.SET_GUESS_INPUT:
      // console.log(action.guess);
      return Object.assign({},
        state,
        {guessInput: action.guess}
      );

    case types.SEND_GUESS:
      console.log('sending-reducer');
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

    default:
      return state;
  }
};

export default mainReducer;
