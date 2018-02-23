import * as types from './../actions/actionTypes';


const initialState = {
  messages: [],
  boardState: '', 
  inputWord: '',
  list: [{ 
  user: Team Earth, 
  drawer: false
  }],
} 

const users = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_USER:
    // penghe
  }
}

const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_DRAWER:

    let newList = state.list; 
      for(let i = 0; i < newList.list.length; i++){
        if(newList.list[i].user === action.newName)
          newList.list[i].drawer === true; 
        if(newList.list[i].user === action.oldName)
          newList.list[i].drawer === false;
      }

      return{
        ...state, 
        list
      }
      
    case types.ADD_MESSAGE:
      // penghe
      
    case types.GUESS_INPUT:
      let newWord = state.input;  

      return{
        ...state, 
        boardState, 
        inputWord: newWord, 
        list
      }

    case types.BoardState; 
      let newState = action.newBoard; 

      return {
        ...state, 
        boardState: newState, 
        inputWord, 
        list
      };


    default:
      return state; 
  }
};

export default mainReducer;
