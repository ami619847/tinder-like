import * as React from 'react'
import Menu from './Menu'
// import Image from '../image-homer.jpg';
// import Image2 from '../image-marge.gif';
import SwipeImage from './SwipeImage';

export default class DiscoverScreen extends React.PureComponent {

  render() {
    return(
      <div>
        <Menu />
        <h3>Discover</h3>

        {/* <img src={Image} alt={"discover-image"}/> */}
        <SwipeImage/> 

        <br/>
        <button name="Like"/>
        <button name="Dislike"/>
      </div>
    )
  }
}
