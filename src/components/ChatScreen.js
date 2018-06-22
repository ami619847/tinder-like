import * as React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux'
import './ChatScreen.css'
import Chats from './chatcomponents/Chats'

class ChatScreen extends React.PureComponent {

  render() {
    return(<div>
      <Menu />
      <div className= 'chatroom'>
        <div className = 'matches'>

          <div className = 'icimages'> <img className = 'icimages' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg' /> </div>
          <div className = 'icimages'> <img className = 'icimages' src='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-beard-736716.jpg&fm=jpg' /> </div>
          <div className = 'icimages'> <img className = 'icimages' src='https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?cs=srgb&dl=adolescence-attractive-beautiful-573299.jpg&fm=jpg' /> </div>
        </div>
        <div className = 'messages'>
          Messages:
          <Chats />
          <Chats />
          <Chats />
          <Chats />

        </div>
      </div>
    <p> {console.log(this.props.talker)}
    {console.log(this.props.me)}</p>
  </div>
    )
  }
}

const mapStateToProps = function (state) {
  console.log(state.users.currentUser.userMatches)
  return {
    discovered: state.users.userData[1].userName,

  }
}

export default connect(mapStateToProps)(ChatScreen)
