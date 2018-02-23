import React, { Component } from 'react'; 
import Canvas from './CanvasBoard';
// import MessageBox from './MessageBox';
// import Users from './Users'

class App extends Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div> 
				<Canvas /> 
				// <Users /> 
				// <MessageBox />  
			</div> 
		);
	}
}

export default App;