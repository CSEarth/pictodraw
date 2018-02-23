import * as types from './actionTypes'

const setDrawer = () => {
	return {
		type: types.SET_DRAWER
	}
};

const addMessage = (message) => {
	return {
		type: types.ADD_MESSAGE,
		message
	}
};


const addUser = () => {
	return {
		type: types.ADD_USER
	}
};


const setGuessInput = () => {
	const guess = document.getElementsByTagName('input').input.value;
	return {
	  type: types.SET_GUESS_INPUT,
	  guess: guess,
	}
};

const sendGuess = () => {
	return {
	  type: types.SEND_GUESS,
	}
};




export {
	setDrawer,
	addUser,
	setGuessInput,
	sendGuess,
	addMessage,
}
