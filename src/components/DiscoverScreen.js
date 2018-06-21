import * as React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { likeIt, dislikeIt, findMatches } from '../actions/matches'
import './DiscoverScreen.css'

class DiscoverScreen extends React.PureComponent {

  componentDidMount() {
    this.props.findMatches()
  }

  render() {
    return(
      <div>
        <Menu />
        <h3>Welcome {this.props.users.currentUser.userName}!</h3>
        <div class="main-carousel">
            {this.props.users.currentUser.userMatches.allMatches.map(id=> this.props.users.userData[id]).map(user => {
              if (!this.props.users.currentUser.userMatches.dislikedMatches.includes(user.userId)
               && !this.props.users.currentUser.userMatches.likedMatches.includes(user.userId))
                {return <div>
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
                </div>}
            })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  // console.log(state.users.currentUser.userMatches.allMatches.map(id=> state.users.userData[id]))
  return {
    users: state.users,

    // otherusers: state.users.currentUser.userMatches.allMatches.map(id=> state.users.userData[id])
    }
  }

export default connect(mapStateToProps, {likeIt, dislikeIt, findMatches})(DiscoverScreen)
