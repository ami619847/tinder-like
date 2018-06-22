import * as React from 'react'
import './Menu.css'
import { connect } from 'react-redux'
import { newUser, newHobby, changeUser } from '../actions/users'
import { Link } from 'react-router-dom'
import { findMatches } from '../actions/matches';
import discover from '../images/Discover-button.png';
import profile from '../images/Profile-button.png';
import chat from '../images/Messaging-button.png';

class Menu extends React.PureComponent {

  componentDidMount() {
    //this.props.newUser('alex', 'female', 28, 'amsterdam', 'sexy girl') //adding new user
    //this.props.newUser('jelle', 'male', 32, 'haarlem', 'batman fanboy') //adding new user
     //changing the active user. should be linked to login page-logic

    // this.props.changeUser('rick')
    // this.props.findMatches()

    // this.props.changeUser('rick')

  //  this.props.changeUser('rick')

    this.props.findMatches()

    // this.props.findMatches()


  }

  render() {
    return(
      <div>
      <ul className= 'menu'>
        <li>
          <Link to="/Discover">
            <img src={discover} alt="discover-icon"/>
          </Link>
        </li>
        <li>
          <Link to="/Chat">
            <img src={chat} alt="chat-icon"/>
          </Link>
        </li>
        <li>
          <Link to="/cProfile">
            <img src={profile} alt="profile-icon" className="profile-icon"/>
          </Link>
         </li>
      </ul>
      {/* { this.props.users.map(user => <p>{user.userName}</p>)} */}
    </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.userData,
    currentUserId: state.users.currentUserId
  }
}

export default connect(mapStateToProps, { newUser, newHobby, changeUser, findMatches })(Menu)
