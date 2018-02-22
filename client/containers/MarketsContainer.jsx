/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components...
import MarketsDisplay from '../components/MarketsDisplay.jsx';
import MarketCreator from '../components/MarketCreator.jsx';


const mapStateToProps = store => ({
  // provide pertinent state here
  marketList: store.markets.marketList,
});

const mapDispatchToProps = dispatch => {
  return {
  // create functions that will dispatch action creators
  addMarket: () => dispatch(actions.addMarket()),
  setNewLocation: () => dispatch(actions.setNewLocation()),
  addCard: (e) => dispatch(actions.addCard(e)),
  deleteCard: (e) => dispatch(actions.deleteCard(e)),
  }
};




class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        <MarketCreator addMarket={this.props.addMarket} setNewLocation={this.props.setNewLocation}/>
        <MarketsDisplay marketList={this.props.marketList} addCard={this.props.addCard} deleteCard={this.props.deleteCard}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
