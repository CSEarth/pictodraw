/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from './MarketsContainer.jsx';


const mapStateToProps = (store) => {
  // console.log(store);
  // add pertinent state here
  // console.log(store);
  return {
    totalCards:store.markets.totalCards,
    totalMarkets:store.markets.totalMarkets,
  };
}

const mapDispatchToProps = dispatch => {
  // console.log(dispatch);
  return {

  };

};

class MainContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          { /* Start adding components here... */ }
          <TotalsDisplay totalCards={this.props.totalCards} totalMarkets={this.props.totalMarkets}/>
          <MarketsContainer />
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
