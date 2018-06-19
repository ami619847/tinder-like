import * as React from 'react'
import { connect } from 'react-redux'
import { newUser } from '../actions/Users'

class Test extends React.PureComponent {

  componentDidMount() {
    return newUser("dada", "amsterdam", "sexy boy", "music", "experienced", "teacher")
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
  console.log(state)
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { newUser })(Test)
