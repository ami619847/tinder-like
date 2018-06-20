import React, { PureComponent } from 'react';
import Image from '../image-homer.jpg';

export default class UserImage extends PureComponent {

  render() {
    return(
      <div>
        <img src={Image} alt={"profile-image"}/>
        <br/>
      </div>
    )
  }
}
