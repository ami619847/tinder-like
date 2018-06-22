import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changeUser } from '../../actions/users';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { findMatches } from '../../actions/matches';
import PasswordForm from './PasswordForm';
import RegisterButton from './RegisterButton';

class UsernameForm extends PureComponent {
  state = {username:''}

  handleSubmit = (event) => {
    event.preventDefault()
    const inputName = this.state.username
    this.props.changeUser(inputName)
    this.props.findMatches()
    this.props.history.push('./discover')
  }

  handleChange = (event) => {
    this.setState({
       username: event.target.value
    })
  }

  render() {
    return (
      <div className="input-username">
        <br/>

          <form onSubmit={this.handleSubmit.bind(this)}>

            <div className="username-password">
              <label>
                <input
                  type="text"
                  className="username"
                  onChange={this.handleChange}
                  placeholder="Username"
                />
              </label>
              <PasswordForm />
            </div>

            <div display="block" >
              <RegisterButton />
              <button className="login-button" onClick = {this.props.onClick }>
                LOGIN
              </button>
            </div>

          </form>
      </div>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    users: state.users.userData
  }
}
const mapDispatchToProps = { changeUser, findMatches }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsernameForm))
