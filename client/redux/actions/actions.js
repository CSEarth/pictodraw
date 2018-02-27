import * as types from './actionTypes'

const setDrawer = (name) => {
	return {
		type: types.SET_DRAWER
	}
};

const setID = (id) => {
	return {
		type: types.SET_ID,
		id
	}
};

const getUsers = (users) => {
	return {
		type: types.GET_USERS,
		users
	}
};

const addMessage = (message_log) => {
	return {
		type: types.ADD_MESSAGE,
		// The message log contains both the message and the user name
		message_log
	}
};

// const setGuessInput = () => {
// 	const guess = document.getElementsByTagName('input').input.value;
// 	return {
// 	  type: types.SET_GUESS_INPUT,
// 	  guess: guess,
// 	}
// };

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

const clearCanvas = () => {
	return {
		type: types.CLEAR_CANVAS,
	}
} 

module.exports = {
	setDrawer,
	setID,
	getUsers,
	// setGuessInput,
	sendGuess,
	addMessage,
	addClick,
	addPixs,
	clearCanvas,
}
