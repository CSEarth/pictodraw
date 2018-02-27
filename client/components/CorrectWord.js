import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  correctWord: store.correctWord,
  drawer: store.drawer
});

const mapDispatchToProps = dispatch => {
  return {
  }
};

class CorrectWord extends Component {
 constructor(props) {
   super(props);
 }

 render() {
   let wordBox = (
    <div className='wordBox'>
       <h4 className="selectedWord">It's your turn to Guess!</h4>
    </div>
   );

   // Only the drawer can see the correct word
   if(this.props.drawer) {
     wordBox = ( 
      <div className='wordBox'>
        <h4 className="selectedWord">It's your turn to Draw! <strong>{this.props.correctWord}</strong></h4>
      </div> 
      );
   }

   return (
     <div>
      {wordBox}
    </ div>
   );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrectWord);
