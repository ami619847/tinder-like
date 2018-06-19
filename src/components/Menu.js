import * as React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export default class Menu extends React.PureComponent {
  render() {
    return(
      <div>
      <ul className= 'menu'>
        <li>
          <Link to="/Discover">Discover</Link>
        </li>
        <li>
          <Link to="/Chat">Message</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
         </li>
      </ul>
    </div>
    )
  }
}
