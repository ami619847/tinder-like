import * as React from 'react';
import Menu from './Menu';
import SwipeImage from './SwipeImage';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { likeIt, dislikeIt } from '../actions/matches';
import './DiscoverScreen.css';
import like from '../images/Like-button.png';
import dislike from '../images/Dislike-button.png';

class DiscoverScreen extends React.PureComponent {

  render() {
    console.log(this.props.currentUser)
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
                    <h2>
                      {user.userName},
                      <span className="age">{user.userAge}</span>
                    </h2>
                    <p>{user.userLocation}</p>
                  </div>

                  <div className="info-hobby">
                    {user.userHobby.typeHobby}: {user.userHobby.experienceHobby}, {user.userHobby.userType}
                  </div>
                  <br/>

                  <div className="info">
                    <b>Short Description: </b>
                      {user.userShortDescription}
                  </div>
                  <br/><br/><br/>


                  <img src={like} alt="like-button" onClick={() => this.props.likeIt(user.userId)}/>

                  <img src={dislike} alt="dislike-button" onClick={() => this.props.dislikeIt(user.userId)}/>

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
    otherusers: state.users.userData.filter(user=>user.userId!==state.users.currentUserId && user.userHobby.typeHobby===state.users.currentUser.userHobby.typeHobby),
    currentUser: state.users.userData.find(user => user.userId === state.users.currentUserId)
  }
}

export default connect(mapStateToProps, {likeIt, dislikeIt})(DiscoverScreen)
