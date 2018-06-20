import * as React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux'
import Message from './Message'
import ReactDOM from 'react-dom';


class ChatScreen extends React.PureComponent {
  constructor(props) {
          super(props);

          this.state = {
              chats: [{
                  username: "system",
                  content: <p>Hello World!</p>,

              }]
          };

          this.submitMessage = this.submitMessage.bind(this);
      }

      componentDidMount() {
          this.scrollToBot();
      }

      componentDidUpdate() {
          this.scrollToBot();
      }

      scrollToBot() {
          ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
      }

      submitMessage(e) {
          e.preventDefault();

          this.setState({
              chats: this.state.chats.concat([{
                  username: this.props.talker,
                  content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>

              }])
          }, () => {
              ReactDOM.findDOMNode(this.refs.msg).value = "";
          });
      }

      render() {
          const username = this.props.me;
          const { chats } = this.state;

          return (
              <div className="chatroom">
                <Menu />
                  <h3>Let's talk about {this.props.hobby}</h3>
                  <ul className="chats" ref="chats">
                      {
                          chats.map((chat) =>
                              <Message chat={chat} user={username} />
                          )
                      }
                  </ul>
                  <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                      <input type="text" ref="msg" />
                      <input type="submit" value="Submit" />
                  </form>
              </div>
          );
      }
}
const mapStateToProps = function (state) {
  return {
    talker: state.users.userData[1].userName,
    me: state.users.userData[2].userName,
    hobby: state.users.userData[2].userHobby.typeHobby
  }
}


export default connect(mapStateToProps)(ChatScreen)
