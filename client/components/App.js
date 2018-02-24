import React, { Component } from 'react'; 
import Canvas from './CanvasBoard';
import MessageBox from './MessageBox';
import Users from './Users';
import InputBox from './InputBox';

class App extends Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div>
			 	<Canvas /> 
			 	<Users /> 
				<MessageBox />  
				<InputBox /> 
			</div> 
		);
	}
}


export default App;
