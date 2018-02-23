import * as types from './../actions/actionTypes';


const initialState = {

};

const mainReducer = (state=initialState, action) => {
  // const marketList = JSON.parse(JSON.stringify(state.marketList));
  switch(action.type) {
    case types.SET_DRAWER:


      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };

    case types.SET_NEW_LOCATION:
      return {
        ...state,
        newLocation: action.location,
      };



    default:
      return state;
  }
};

export default mainReducer;
