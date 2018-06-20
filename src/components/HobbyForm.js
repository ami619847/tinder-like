import React, { PureComponent } from 'react';

export default class HobbyForm extends PureComponent {
  handleChange = (event) => {
    this.setState({
     [event.target.name]: event.target.value
   });
 }

 handleSubmit = (event) => {
   event.preventDefault()

   // if () {
   //   this.props.newHobby({
   //     typeHobby: this.state.typeHobby,
   //     experienceHobby: this.state.experienceHobby,
   //     userType: this.state.userType
   //   })
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
          <label>
            Experience:
            <select name="experienceHobby" onChange={this.handleChange}>
              <option value="beginner">beginner</option>
              <option value="intermediate">intermediate</option>
              <option value="experienced">advanced</option>
            </select>
          </label>
          <br/>
          <label>
            Level:
            <select name="userType" onChange={this.handleChange}>
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
