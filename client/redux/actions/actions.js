import * as types from './actionTypes'

const setDrawer = () => {
	type: types.SET_DRAWER 
}

const addMessage = () => {
	type: types.ADD_MESSAGE, 
}

const deleteMessage = () => {
	type: types.DELETE_MESSAGE,
}

const addUser = () => {
	type: types.ADD_USER, 
}

const deleteCard = () => {
	type: types.DELETE_CARD,
}

const guessInput = () => {
	type: types.GUESS_INPUT 
}

export {
	setDrawer,
	addMessage,
	deleteMessage,
	addUser,
	deleteCard,
	guessInput
}




	
	
	
	
	
	