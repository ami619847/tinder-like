import React, { PureComponent } from 'react';
import Menu from './Menu';
import UserImage from './UserImage';
import UserStatisticsForm from './UserStatisticsForm';
import UserForm from './UserForm';
import HobbyForm from './HobbyForm';


export default class ProfileScreen extends React.PureComponent {
  render() {
    return(
      <div>
        <Menu />
        <h3>Create Profile</h3>
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
    )
  }
}
//export default connect({ newUser },{ newHobby })(ProfileScreen)
