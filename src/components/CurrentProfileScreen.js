import * as React from 'react'
import { connect } from 'react-redux'
import { newUser, newHobby, changeUser } from '../actions/users'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import './DiscoverScreen.css'

//import SwipeImage from './SwipeImage';

class CurrentProfileScreen extends React.PureComponent {
  render() {
    return(
      <div>
        <Menu />
          <div key={this.props.user.userId} className="container">
            <div className="pic">
              <img className="image" src={this.props.user.userPhoto}/>
            </div>
            <div className="name-box">
              <h2>{this.props.user.userName}, <span className="age"> {this.props.user.userAge}</span></h2>
              <p>{this.props.user.userLocation}</p>
            </div>
            <div className="info">
              <p></p>
              <div><b>Short Info: </b>{this.props.user.userShortDescription}</div>
              <p></p>
              <div><b>Hobbies: </b><p>{this.props.user.userHobby.typeHobby} , {this.props.user.userHobby.experienceHobby} , {this.props.user.userHobby.userType}</p></div>
              </div>
            </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.users.currentUser,

  }
}

export default connect(mapStateToProps, { newUser, newHobby, changeUser })(CurrentProfileScreen)
