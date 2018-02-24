import React, { Component } from 'react';
import { connect } from 'react-redux';



const mapStateToProps = store => ({
  correctWord: store.correctWord,
});

const mapDispatchToProps = dispatch => {
  return {
  }
};

class GuessWord extends Component {
 constructor(props) {
   super(props);
 }

 render() {
   return(
     <div className='wordBox'>
         <p><strong>{this.props.correctWord}</strong></p>
     </div>
   );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessWord);
