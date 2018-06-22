import * as React from 'react';
import Menu from './Menu';
import SwipeImage from './SwipeImage';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { likeIt, dislikeIt, findMatches } from '../actions/matches';
import './DiscoverScreen.css';
import like from '../images/Like-button.png';
import dislike from '../images/Dislike-button.png';

class DiscoverScreen extends React.PureComponent {

  componentDidMount() {
    this.props.findMatches()
  }

  render() {
    console.log(this.props.currentUser)
    return(
      <div>
        <Menu />
        <h3>Welcome {this.props.currentUser.userName}!</h3>
        <SwipeImage className="swiping" swipeOptions={{continuous: false}}>
          { this.props.currentUser.userMatches.allMatches.map(id=> this.props.users.userData[id]).map(user =>
          {return <div>
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
                <img className="dislike-button" src={dislike} onClick={() => {this.props.dislikeIt(user.userId)}}/>
                <img className="like-button" src={like} onClick={() => {this.props.likeIt(user.userId)}}/>

            </div>
          </div>}
          )}
        </SwipeImage>
        </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users,
    currentUser: state.users.userData.find(user=>user.userId === state.users.currentUserId)
  }
}

export default connect(mapStateToProps, {likeIt, dislikeIt, findMatches})(DiscoverScreen)
