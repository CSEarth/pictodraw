import * as types from './actionTypes'

const setDrawer = () => {
	return {
		type: types.SET_DRAWER
	}
}

const addMessage = () => {
	return {
	type: types.ADD_MESSAGE
}


const addUser = () => {
	return {
		type: types.ADD_USER
	}
}


const guessInput = () => {
	return {
		type: types.GUESS_INPUT
	}
}

export {
	setDrawer,
	addMessage,
	addUser,
	guessInput
}
