import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { newUser, changeUser } from '../actions/users'

class UserForm extends PureComponent {
  handleChange = (event) => {
    this.setState({
     [event.target.name]: event.target.value
   });
 }

 handleSubmit = (event) => {
   event.preventDefault()
   const name = this.state.name
   const gender = this.state.gender
   const age = this.state.age
   const location = this.state.location
   const description = this.state.shortDescription
   this.props.newUser(name, gender, age, location, description)

  //  setTimeout(() => {
  //   this.props.changeUser(name)
  // }, 5000)
  }

  render() {
    return(
      <div className="userForm">

        <form onSubmit={ this.handleSubmit }>
          <label>Name:
            <input type="text" name="name" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>Gender:
            <input type="text" name="gender" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Location:
            <input type="text" name="location" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Age:
            <input type="number" name="age" onChange={this.handleChange}/>
          </label>
          <br/>

          <label>
            Short Description:
          <input type="text" className="shortDescription" name="shortDescription" onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit" value="Create Account" />
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
const mapDispatchToProps = { newUser, changeUser }

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
