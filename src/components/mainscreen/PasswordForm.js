import React, { PureComponent } from 'react';

export default class PasswordForm extends PureComponent {
  state = {password:""}

  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(`Submitting form with username ${this.state.name}`)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.password]: event.target.value
    })
  }

  render() {
    return (

      <div className="input-password">
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              className="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="Password"
            />
          </label>
        </form>
      </div>
    )
  }
}
