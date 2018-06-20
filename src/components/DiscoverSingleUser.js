import * as React from 'react'
import { connect } from 'react-redux'
import { newUser, newHobby, changeUser } from '../actions/users'
import './DiscoverDumbComponent.css'

//import SwipeImage from './SwipeImage';

class DiscoverSingleUser extends React.PureComponent {
  render() {
    return(

          <div key={this.props.userId} className="container">
            <div className="pic">
              <img className="image" src={this.props.userPhoto}/>
            </div>
            <div className="name-box">
              <h2>{this.props.userName}
                <span className="age"> {this.props.userAge}</span>
              </h2>
              <p>{this.props.userLocation}</p>
            </div>
            <div className="info">
              <p></p>
              <div><b>Short Info: </b>{this.props.userShortDescription}</div>
              <p></p>
              {/* <div><b>Hobbies: </b><p>{this.props.userHobby.typeHobby} , {this.props.userHobby.experienceHobby} , {this.props.userHobby.userType}</p></div> */}
              </div>
            </div>

    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.userData,
  }
}

export default connect(mapStateToProps, { newUser, newHobby, changeUser })(DiscoverSingleUser)
