import React, { Component } from 'react'; 
import Canvas from './CanvasBoard';
import MessageBox from './MessageBox';
import Users from './Users';
import CorrectWord from './CorrectWord';
import Palette from './Palette';

class App extends Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div className="gameContainer">
				{/* <Palette /> */}
			 	<Canvas /> 
			 	<section className="messageContainer">
					<CorrectWord /> 
			 		<h2>Players</h2>
				 	<Users /> 
					<MessageBox />  
				</section>
			</div> 
		);
	}
}


export default App;
