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
     			<h4 className="selectedWord">Draw: <strong>{this.props.correctWord}</strong></h4>
     </div>
   );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessWord);
