/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */
var {Map, List} = require('immutable');
import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [], //List([]),
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state=initialState, action) => {
  const marketList = state.marketList.slice();
  // const marketList = JSON.parse(JSON.stringify(state.marketList));
  // let marketList = List(state.marketList);
  // console.log(marketList.get(2));
  let totalCards = state.totalCards;
  //console.log("stateReducer:",state);
  switch(action.type) {
    case types.ADD_MARKET:
      // increment lastMarketId and totalMarkets counters
      const lastMarketId = state.lastMarketId + 1;
      const totalMarkets = state.totalMarkets + 1;

      // create the new market object from provided data
      const newMarket = {
          // what goes in here?
          marketID: lastMarketId,
          location: state.newLocation,
          cards: 0,
          percent: 0,
      };
      // push the new market onto a copy of the market list
      marketList.push(newMarket);

      const input = document.getElementsByTagName('input').input;
      input.value = '';
      // return updated state
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

    case types.ADD_CARD:
      totalCards = totalCards + 1;
      // console.log('actionId',action.marketID);
      for(let i=0; i<marketList.length; i++) {
        if (marketList[i].marketID === action.marketId) {
          marketList[i].cards += 1;
        }
        marketList[i].percent = (100*marketList[i].cards/totalCards).toFixed(2);
      }

      return {
        ...state,
        marketList,
        totalCards,
      };

    case types.DELETE_CARD:
      for(let i=0; i<marketList.length; i++) {
        if (marketList[i].marketID === action.marketId) {
          if (marketList[i].cards > 0) {
            totalCards = totalCards - 1;
            marketList[i].cards -= 1;
          }
        }
      }

      for(let i=0; i<marketList.length; i++) {
        marketList[i].percent = (totalCards===0) ? 0 :(100*marketList[i].cards/totalCards).toFixed(2);
      }

      return {
        ...state,
        marketList,
        totalCards,
      };

    default:
      return state;
  }
};

export default marketsReducer;
