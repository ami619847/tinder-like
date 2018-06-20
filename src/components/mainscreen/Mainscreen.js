import React, { PureComponent } from 'react';
import UsernameForm from './UsernameForm';
import PasswordForm from './PasswordForm';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import { changeUser } from '../../actions/users';
import './Mainscreen.css';

export default class Mainscreen extends PureComponent{

  render() {
    return (
      <div className="mainscreen">
        <h1>LOGO</h1>
        {/* <img src={logo} className="mainscreen-logo" alt="logo" /> */}
        <UsernameForm />
        <PasswordForm />
        <br/>
        <RegisterButton />
        <LoginButton />
      </div>
    )
  }
}
