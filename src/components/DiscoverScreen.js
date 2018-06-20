import * as React from 'react'
import Menu from './Menu'

import SwipeImage from './SwipeImage';

import DiscoverDumbComponent from './DiscoverDumbComponent'


export default class DiscoverScreen extends React.PureComponent {

  render() {

    return(
      <div>
        <Menu />
        <h3>Discover</h3>
        <DiscoverDumbComponent />

        
        <SwipeImage/> 

        <br/>
        <button name="Like"/>
        <button name="Dislike"/>
      </div>


    )
  }
}
