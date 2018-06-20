import * as React from 'react'
import { connect } from 'react-redux'
import { newUser, newHobby, changeUser } from '../actions/users'
import { Link } from 'react-router-dom'
import './DiscoverDumbComponent.css'

//import SwipeImage from './SwipeImage';

class DiscoverDumbComponent extends React.PureComponent {
  render() {
    console.log(this.props.currentUser)
    
    return(
      <div>
        { this.props.users.map(user =>
          <div key={user.userId} className="container">
            <div className="pic">
              <img className="image" src={user.userPhoto}/>
            </div>
            <div className="name-box">
              <h2>{user.userName}, <span className="age"> {user.userAge}</span></h2>
              <p>{user.userLocation}</p>
            </div>
            <div className="info">
              <p></p>
              <div><b>Short Info: </b>{user.userShortDescription}</div>
              <p></p>
              <div><b>Hobbies: </b><p>{user.userHobby.typeHobby} , {user.userHobby.experienceHobby} , {user.userHobby.userType}</p></div>
              </div>
            </div>
        )}

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.userData,
  }
}

export default connect(mapStateToProps, { newUser, newHobby, changeUser })(DiscoverDumbComponent)
