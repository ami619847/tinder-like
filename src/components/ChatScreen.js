import * as React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux'


class ChatScreen extends React.PureComponent {
  render() {
    return(<div>
      <Menu />
    <p> chatscreen </p>
  </div>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    talker: state.users.userData[1].userName,
    me: state.users.userData[2].userName,
  }
}

export default connect(mapStateToProps)(ChatScreen)
