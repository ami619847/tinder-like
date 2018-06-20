import * as React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux'


class ChatScreen extends React.PureComponent {
  render() {
    return(<div>
      <Menu />
      <div className= 'chatroom'>
        <div id="container">
          <aside id="sidebar">Users</aside>
          <section id="main">
            <section id="messages-list">Messages list</section>
            <section id="new-message">New message</section>
          </section>
        </div>
      </div>
    <p> {console.log(this.props.talker)}
    {console.log(this.props.me)}</p>
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
