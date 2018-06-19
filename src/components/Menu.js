import * as React from 'react'
import './Menu.css'

export default class Menu extends React.PureComponent {
  render() {
    return(
      <div>
      <ul className= 'menu'>
        <li> Discover</li>
        <li>Message</li>
        <li> Profile </li>
      </ul>
    </div>
    )
  }
}
