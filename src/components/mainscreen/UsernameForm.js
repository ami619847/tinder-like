import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { changeUser } from '../../actions/users'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class UsernameForm extends PureComponent {
  state = {username:''}

  handleSubmit = (event) => {
    event.preventDefault()
    const inputName = this.state.username
    this.props.changeUser(inputName)
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
            <label>
              <input
                type="text"
                className="username"
                onChange={this.handleChange}
                placeholder="Username"
              />
            </label>
              <button className="login-button" onClick = {this.props.onClick }>
                LOGIN
              </button>
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
const mapDispatchToProps = { changeUser }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsernameForm))
