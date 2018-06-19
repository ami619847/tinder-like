import React, { PureComponent } from 'react';
import Menu from './Menu'

// import { Link } from 'react-router-dom';
// import UsernameForm from './UsernameForm';
// import PasswordForm from './PasswordForm';
// import LoginButton from './LoginButton';
// import RegisterButton from './RegisterButton';
export default class Mainscreen extends PureComponent{
  render() {
    return (
      <div className="profilescreen">
        <header>
          <Menu />
          <p> test </p>
        </header>
        <main>
            {/* <ProfileImage />
            <User/>
            <br/>
            <LoginButton />
            <RegisterButton /> */}
        </main>
      </div>
    )
  }
}
