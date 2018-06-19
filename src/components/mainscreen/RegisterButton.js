import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class RegisterButton extends PureComponent {

  render() {
    return (
      <Link to="/profile">
        <button className="register-button" onClick = {this.props.onClick}>
          Register
        </button>
      </Link>
    )
  }
}
