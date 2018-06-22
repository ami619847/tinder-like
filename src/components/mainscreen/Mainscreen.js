import React, { PureComponent } from 'react';
import UsernameForm from './UsernameForm';
import PasswordForm from './PasswordForm';
import RegisterButton from './RegisterButton';
import { changeUser } from '../../actions/users';
import './Mainscreen.css';
import logo from '../../images/Hobbyhub-logo-green.png'
import { ResponsiveEmbed } from 'react-bootstrap';

export default class Mainscreen extends PureComponent{

  render() {
    return (
      <ResponsiveEmbed>
        <div className="mainscreen">
          <body>
            <img src={logo}/>
            <UsernameForm />
            <PasswordForm />
            <br/>
            <RegisterButton />
          </body>
        </div>
      </ResponsiveEmbed>
    )
  }
}
