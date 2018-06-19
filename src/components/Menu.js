import * as React from 'react'
import './Menu.css'
import { connect } from 'react-redux'
import { newUser } from '../actions/users'

class Menu extends React.PureComponent {
  render() {
    return(
      <div>
      <ul className= 'menu'>
        <li> Discover</li>
        <li>Message</li>
        <li> Profile </li>
      </ul>
      {/* { this.props.users.map(user => <p>{user.userName}</p>)} */}
    </div>
    )
  }
}

const mapStateToProps = function (state) {
  //console.log(state.Users.filter(user => user.userId===2))
  console.log(state)
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, { newUser })(Menu)
