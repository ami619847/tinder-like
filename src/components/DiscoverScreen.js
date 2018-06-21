import * as React from 'react'
import Menu from './Menu'
import SwipeImage from './SwipeImage';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { likeIt, dislikeIt } from '../actions/matches'
import './DiscoverScreen.css'

class DiscoverScreen extends React.PureComponent {

  render() {
    return(
      <div>
        <Menu />
        <h3>Discover</h3>

          <SwipeImage className="swiping" swipeOptions={{continuous: false}}>
            { this.props.otherusers.map(user =>
            <div>
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
                    <button onClick={() => this.props.likeIt(user.userId)}>LIKE</button>
                    <button onClick={() => this.props.dislikeIt(user.userId)}>DISLIKE</button>
                  </div>
            </div>
            )}
          </SwipeImage>

        </div>

    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.userData,
    otherusers: state.users.userData.filter(user=>user.userId!==state.users.currentUserId && user.userHobby.typeHobby===state.users.currentUser.userHobby.typeHobby)
  }
}

export default connect(mapStateToProps, {likeIt, dislikeIt})(DiscoverScreen)
