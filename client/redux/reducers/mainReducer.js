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
      return {
        ...state,
        guessInput: action.guess,
      };

    case types.SEND_GUESS:
      const input = document.getElementsByTagName('input').input;
      input.value = '';
      return {
        ...state,
        guessInput: '',
      };

    case types.ADD_MESSAGE:
      const messages = JSON.parse(JSON.stringify(state.messages));
      messages.push('');
      return {
        ...state,
        messages,
      };



    default:
      return state;
  }
};

export default mainReducer;
