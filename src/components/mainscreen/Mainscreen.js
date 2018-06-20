import React, { PureComponent } from 'react';
import UsernameForm from './UsernameForm';
import PasswordForm from './PasswordForm';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import { changeUser } from '../../actions/users'

export default class Mainscreen extends PureComponent{

  render() {
    return (
      <div className="mainscreen">
        <header className="App-header">
          <h1>LOGO</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <UsernameForm />
        <PasswordForm />
        <br/>
        {//<LoginButton />
        }
        <RegisterButton />
      </div>
    )
  }
}
