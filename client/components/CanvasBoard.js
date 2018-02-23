import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';


const mapStateToProps = store => ({

  // marketList: store.markets.marketList,
});

const mapDispatchToProps = dispatch => {
  return {
  // addMarket: () => dispatch(actions.addMarket()),
  // setNewLocation: () => dispatch(actions.setNewLocation()),
  // addCard: (e) => dispatch(actions.addCard(e)),
  // deleteCard: (e) => dispatch(actions.deleteCard(e)),
  }
};




class CanvasBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='canvasDiv'>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasBoard);
