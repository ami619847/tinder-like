import * as React from 'react'
import './Menu.css'
import { connect } from 'react-redux'
import { newUser, newHobby, changeUser } from '../actions/users'
import { Link } from 'react-router-dom'
import { findMatches } from '../actions/matches'

class Menu extends React.PureComponent {

  render() {
    return(
      <div>
      <ul className= 'menu'>
        <li>
          <Link to="/Discover">Discover</Link>
        </li>
        <li>
          <Link to="/Chat">Message</Link>
        </li>
        <li>
          <Link to="/cProfile">Profile</Link>
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
