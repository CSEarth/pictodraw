import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';


const mapStateToProps = store => ({
  messages: store.messages,
});

const mapDispatchToProps = dispatch => {
  return {
    setGuessInput: () => dispatch(actions.setGuessInput()),
    sendGuess: () => dispatch(actions.sendGuess()),
  }
};



class MessageBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const allmessages = [];
    for (let i=0; i<this.props.messages.length; i++) {
      const user = this.props.messages[i].user;
      const word = this.props.messages[i].message;
      const message = (
          <li key={`message${i}`}>
            {user} : <span>{word}</span>
          </li>
        )
      allmessages.push(message);
    }

    return(
      <div className='chatBox'>
        <div id='inputGuess'>
          <input id="input" type="text" onChange={this.props.setGuessInput}></input>
          <button onClick={this.props.sendGuess}>Send</button>
        </div>
        <div id='displayChat'>
          <ul>{allmessages}</ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
