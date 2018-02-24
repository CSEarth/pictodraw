import * as types from './actionTypes'

const setDrawer = (name) => {
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

const getUsers = (users) => {
	return {
		type: types.GET_USERS,
		users
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
	const guess = document.getElementsByTagName('input').input.value;
	return {
	  type: types.SEND_GUESS,
		guess: guess,
	}
};

const addClick = (x, y, dragging) => {
	return {
		type: types.ADD_CLICK,
		x,
		y,
		dragging,
	}
}

const addPixs = (clickX, clickY, clickDrag) => {
	return {
		type: types.ADD_PIXS,
		clickX,
		clickY,
		clickDrag,
	}
}

const wordToDraw = (word) => {
	return {
		type: types.WORD_TO_DRAW,
		word: word
	}
}


module.exports = {
	setDrawer,
	getUsers,
	setGuessInput,
	sendGuess,
	addMessage,
	addClick,
	addPixs,
	wordToDraw
}
