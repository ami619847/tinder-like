import React, { PureComponent } from 'react';
import Menu from './Menu';
import UserImage from './UserImage';
import UserForm from './UserForm';
// import HobbyForm from './HobbyForm';


export default class ProfileScreen extends React.PureComponent {
  render() {
    return(
      <div>
        <Menu />
        <p> Profile </p>
        <main>
          <UserImage/>
          <UserForm/>
          {/* <HobbyForm/> */}
        </main>
      </div>
    )
  }
}
