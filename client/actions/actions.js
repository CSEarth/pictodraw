/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'

export const addCard = (e) => {
  const marketId = Number(e.target.id);
  return {
    type: types.ADD_CARD,
    marketId: marketId,
  }
};

export const deleteCard = (e) => {
  const marketId = Number(e.target.id);
  return {
    type: types.DELETE_CARD,
    marketId: marketId,
  }
};

export const addMarket = () => ({
  type: types.ADD_MARKET,
  // location: location,
});

export const setNewLocation = () => {
  const location = document.getElementsByTagName('input').input.value;
  // console.log("location",location);
  return {
    type: types.SET_NEW_LOCATION,
    location: location,
  }
};

// add more action creators
