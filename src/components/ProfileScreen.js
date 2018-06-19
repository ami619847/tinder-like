import React, { PureComponent } from 'react';
import Menu from './Menu'
{/* <BackgroundImage/>
<ProfileImage/>
<User/>
<Hobbies/> */}
export default class ProfileScreen extends PureComponent{
  render() {
    return (
      <div className="profilescreen">
        <header>
          <Menu />
          <p> test </p>
        </header>
        <main>
            {/*
            <BackgroundImage/>
            <ProfileImage/>
            <User/>
            <Hobbies/>
             */}
        </main>
      </div>
    )
  }
}
