import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { newHobby } from '../actions/users'
import { withRouter } from 'react-router-dom'

class HobbyForm extends PureComponent {
  handleChange = (event) => {
    this.setState({
     [event.target.name]: event.target.value
   });
 }

 handleSubmit = (event) => {
   event.preventDefault()
   const hobby = this.state.typeHobby
   const xp = this.state.experienceHobby
   const type = this.state.userType
   this.props.newHobby(hobby, xp, type)
   this.props.history.push('./discover')
  }

  render() {
    return(
      <div className="hobbyForm">
        <form onSubmit={ this.handleSubmit }>
          <label>
            Hobby:
            <input type="text" name="typeHobby" onChange={this.handleChange}/>
          </label>
          <br/>

            <label className="select">
              Experience:
              <select name="experienceHobby" onChange={this.handleChange}>
                <option value="null"></option>
                <option value="beginner">beginner</option>
                <option value="intermediate">intermediate</option>
                <option value="experienced">advanced</option>
              </select>
            </label>

          <br/>

            <label className="select">
              Level:
              <select name="userType" onChange={this.handleChange}>
                <option value="null"></option>
                <option value="learn">learn</option>
                <option value="practice">practice</option>
                <option value="teach">teach</option>
              </select>
            </label>


          <br/>
          <input type="submit" value="New Hobby"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    users: state.users.userData

  }
}
const mapDispatchToProps = { newHobby }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HobbyForm))
