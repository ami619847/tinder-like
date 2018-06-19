import React, { PureComponent } from 'react';

export default class UsernameForm extends PureComponent {
  state = {username:''}

  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(`Submitting form with username ${this.state.name}`)
  }

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
        [event.target.username]: event.target.value
    })
  }

  render() {
    return (

      <div className="input-username">
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              placeholder="Username"
            />
          </label>
        </form>
      </div>
    )
  }
}
