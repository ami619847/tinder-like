import * as React from 'react'

import { connect } from 'react-redux'


class Chats extends React.PureComponent {
  render() {
    return(

      <div className= 'Chats'>
        <div className = 'matches'>

          <div className = 'Cicimages'> <img className = 'icimages' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg' /> </div>
          <div className = 'ctext'> lorem ipsum </div>
        </div>

      </div>


    )
  }
}

const mapStateToProps = function (state) {
  return {

  }
}

export default connect()(Chats)
