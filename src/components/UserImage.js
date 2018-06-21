import React, { PureComponent } from 'react';
import Image from '../images/image-homer.jpg';

export default class UserImage extends PureComponent {

  render() {
    return(
      <div>
        <img className="profile-image" src={Image} alt={"profile-image"}/>
        <br/>
      </div>
    )
  }
}
