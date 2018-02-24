import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';


const mapStateToProps = store => {
  return {
    users: store.users,
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};



class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allusers = [];
    for (let i=0; i<this.props.users.length; i++) {
      const info = `${this.props.users[i].name}`
      const userclass = (this.props.users[i].drawer) ? 'drawerBox' : 'guesserBox'
      const user = (
          <div className={userclass} key={`user${i}`}>
            {info}
          </div>
        )
      allusers.push(user);
    }

    return(
      <div className='userPanel'>
        {allusers}
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
