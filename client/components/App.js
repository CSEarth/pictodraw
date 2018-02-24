import React, { Component } from 'react'; 
import Canvas from './CanvasBoard';
import MessageBox from './MessageBox';
import Users from './Users'

class App extends Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div className="gameContainer">
			 	<Canvas /> 
			 	<section className="messageContainer">
			 		<h2>Players</h2>
				 	<Users /> 
					<MessageBox />  
				</section>
			</div> 
		);
	}
}


export default App;
