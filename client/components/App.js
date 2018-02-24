import React, { Component } from 'react'; 
import Canvas from './CanvasBoard';
import MessageBox from './MessageBox';
import Users from './Users'
// import GuessWord from './'

class App extends Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div>
			 	<Canvas /> 
				<GuessWord />
			 	<Users /> 
				<MessageBox />  
			</div> 
		);
	}
}


export default App;
