import * as React from 'react'
import Menu from './Menu'
import DiscoverDumbComponent from './DiscoverDumbComponent'

export default class DiscoverScreen extends React.PureComponent {
  render() {
    return(<div>
      <Menu />
      <DiscoverDumbComponent />
  </div>
    )
  }
}
