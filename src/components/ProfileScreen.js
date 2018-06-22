import React, { PureComponent } from 'react';
import Menu from './Menu';
import UserImage from './UserImage';
import UserStatisticsForm from './UserStatisticsForm';
import UserForm from './UserForm';
import HobbyForm from './HobbyForm';
import './ProfileScreen.css';
import { ResponsiveEmbed } from 'react-bootstrap';


export default class ProfileScreen extends React.PureComponent {
  render() {
    return(
      <ResponsiveEmbed>
        <div>
          <Menu />
          <h3>CREATE ACCOUNT</h3>
          <main>
            <UserImage/>
            {//<UserStatisticsForm/>}
  }         <UserForm
              //newUser={this.newUser}
            />
            <HobbyForm
              //newHobby={this.newHobby}
            />
          </main>
        </div>
      </ResponsiveEmbed>
    )
  }
}
//export default connect({ newUser },{ newHobby })(ProfileScreen)
