import * as types from './actionTypes'

const setDrawer = (name) => {
	return {
		type: types.SET_DRAWER
	}
}

const addMessage = (newMessage) => {
	return {
		type: types.ADD_MESSAGE
	}
}


const addUser = (oldName,newName) => {
	return {
		type: types.ADD_USER
	}
}


const guessInput = (input) => {
	return {
		type: types.GUESS_INPUT
	}
}

const addClick = (x, y, dragging) => {
	return {
		type: types.ADD_CLICK,
		x,
		y,
		dragging,
	}
}


module.exports = {
	setDrawer,
	addMessage,
	addUser,
	guessInput,
	addClick,
}
