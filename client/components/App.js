import React, { Component } from 'react'; 
import Canvas from './CanvasBoard';
import MessageBox from './MessageBox';
import Users from './Users'

class App extends Component {
	constructor(){
		super();
	}

	// <Users /> 
	// <MessageBox />
	render() {
		return(
			<div>
			 	<Users /> 
				<MessageBox />  
			</div> 
		);
	}
}

// <Canvas /> 
// 
export default App;
