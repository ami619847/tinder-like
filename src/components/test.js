import * as React from 'react'
import { connect } from 'react-redux'
import { newUser, newHobby, changeUser } from '../actions/users'

class Test extends React.PureComponent {

  componentDidMount() {
    this.props.newUser('alex', 'female', 28, 'amsterdam', 'sexy girl')
    this.props.newUser('jelle', 'male', 32, 'haarlem', 'batman fanboy')
    this.props.changeUser('Arjen')
  }


  render() {
    return (
      <div>
        <p>hello world</p>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  //console.log(state.Users.filter(user => user.userId===2))
  return {
    users: state.user,
  }
}

export default connect(mapStateToProps, { newUser, newHobby, changeUser })(Test)
