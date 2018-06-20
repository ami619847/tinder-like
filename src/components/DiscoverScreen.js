import * as React from 'react'
import Menu from './Menu'
import SwipeImage from './SwipeImage';
import Image from '../image-homer.jpg';
import Image2 from '../image-marge.gif';
import DiscoverDumbComponent from './DiscoverDumbComponent';
// import DiscoverSingleUser from './DiscoverSingleUser';

export default class DiscoverScreen extends React.PureComponent {

  render() {
    return(
      <div>
        <Menu />
        <h3>Discover</h3>
        <SwipeImage className="swiping" swipeOptions={{continuous: false}}>
          <div>
            <DiscoverDumbComponent/>
          </div>
          <div>
            <img src={Image}/>
            <br/>
            <button name="Like"/>
            <button name="Dislike"/>
          </div>
          <div>
            <img src={Image2}/>
            <br/>
            <button name="Like" value="Like"/>
            <button name="Dislike" value="Dislike"/>
          </div>

          {/* <DiscoverSingleUser/>
          <DiscoverSingleUser/> */}

        </SwipeImage>

      </div>
    )
  }
}
