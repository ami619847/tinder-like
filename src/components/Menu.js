import * as React from 'react'
import './Menu.css'
import { connect } from 'react-redux'
import { newUser, newHobby, changeUser } from '../actions/users'
import { Link } from 'react-router-dom'


class Menu extends React.PureComponent {

//  componentDidMount() {
//    this.props.newUser('alex', 'female', 28, 'amsterdam', 'sexy girl') //adding new user
//    this.props.newUser('jelle', 'male', 32, 'haarlem', 'batman fanboy') //adding new user
//    this.props.changeUser('aLpEr') //changing the active user. should be linked to login page-logic
//  }

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
          <Link to="/Profile">Profile</Link>
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
  }
}

export default connect(mapStateToProps, { newUser, newHobby, changeUser })(Menu)
