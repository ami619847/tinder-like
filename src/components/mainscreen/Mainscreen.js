import React, { PureComponent } from 'react';
import UsernameForm from './UsernameForm';
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
            <img src={logo} class="center"/>
            <div className="container">
              <UsernameForm />
            </div>
          </body>
        </div>
      </ResponsiveEmbed>
    )
  }
}
