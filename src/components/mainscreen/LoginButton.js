import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class LoginButton extends PureComponent {

  render() {
    return (
      <Link to="/discover">
        <button className="login-button" onClick = {this.props.onClick }>
          Log In
        </button>
      </Link>
    )
  }
}
