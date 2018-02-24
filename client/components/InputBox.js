import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drawStart } from '../socket'
import * as actions from '../redux/actions/actions';


const mapStateToProps = store => ({
  inputWord: store.correctWord,
  drawer: store.drawer
});

const mapDispatchToProps = dispatch => {
  return {
    wordToDraw: () => dispatch(actions.wordToDraw()),
  };
};

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.servedWord = this.servedWord.bind(this);
  }


  servedWord() {
    let newWord; 
    drawStart()
    console.log(2);
      if(this.props.drawer){
        if(this.props.inputWord){
          newWord = this.props.inputWord
          return 'You have been chosen as the drawer. Do your best to draw: ' + newWord; 
        }
      }
  }

  render() {

    

    // let mergeFunction = function(){
    //   this.props.wordToDraw,
    //   drawStart
    // };

    // if(this.props.drawer){
    //   if(this.props.inputWord){
    //     newWord = this.props.inputWord
    //   }
    // }
    // <div> {newWord} </div>
    // <button onClick={drawStart}>Get Word</button>
    // <button onClick={this.props.wordToDraw}>Ready to Draw</button>

    return(
      <div className='InputBox'>
          <p> {this.servedWord()} </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);