import * as React from 'react'
import { connect } from 'react-redux'
import { newUser, newHobby } from '../actions/Users'

class Test extends React.PureComponent {

  render() {
    return (
      <div>
        <p>hello world</p>
        <p>{this.props.users}</p>
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

export default connect(mapStateToProps, { newUser, newHobby })(Test)
