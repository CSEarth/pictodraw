import React, { Component } from 'react'; 
// import Canvas from './CanvasBoard';
import MessageBox from './MessageBox';
// import Users from './Users'

class App extends Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div> 
				<MessageBox />  
			</div> 
		);
	}
}

// <Canvas /> 
// <Users /> 
export default App;