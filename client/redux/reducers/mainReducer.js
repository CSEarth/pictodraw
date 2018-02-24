import * as types from './../actions/actionTypes';


const initialState = {
  messages: [],
  boardState: '',
  inputWord: '',
  list: [{
    user: 'Team Earth',
    drawer: false
  }],
  canvas: {
    drawer: true,
    clickX: [],
    clickY: [],
    clickDrag: [],
  }
}

const users = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_USER:
    // penghe
  }
}

const mainReducer = (state = initialState, action) => {
  var stateCopy = Object.assign({}, state);

  switch(action.type) {
    // case types.SET_DRAWER:
    //
    // let newList = state.list;
    //   for(let i = 0; i < newList.list.length; i++){
    //     if(newList.list[i].user === action.newName)
    //       newList.list[i].drawer === true;
    //     if(newList.list[i].user === action.oldName)
    //       newList.list[i].drawer === false;
    //   }
    //
    //   return{
    //     ...state,
    //     list
    //   }
    //
    // case types.ADD_MESSAGE:
    //   // penghe
    //
    // case types.GUESS_INPUT:
    //   let newWord = state.input;
    //
    //   return{
    //     ...state,
    //     boardState,
    //     inputWord: newWord,
    //     list
    //   }
    //
    // case types.BoardState;
    //   let newState = action.newBoard;
    //
    //   return {
    //     ...state,
    //     boardState: newState,
    //     inputWord,
    //     list
    //   };
    case types.ADD_CLICK:
      stateCopy.canvas.clickX.push(action.x);
      stateCopy.canvas.clickY.push(action.y);
      stateCopy.canvas.clickDrag.push(action.dragging);
      //console.log('add click in reducer', stateCopy)
      return stateCopy;

    default:
      return state;
  }
};

export default mainReducer;
