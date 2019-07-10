import React from "react"
import { signUp } from "../actions"
import { connect } from "react-redux"

class SignUp extends React.Component {

  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.signUp({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    }, this.props.history.push)
  }

  render(){
    return (
      <div className="flex centered full-page">
        <form className="auth-form flex column" onSubmit={this.handleSubmit}>
          <div className="form-input-container">
            <label htmlFor="first_name">First Name: </label>
            <input name="first_name" type="text" value={this.state.first_name} onChange={this.handleChange} placeholder="First Name"/>
          </div>
          <div className="form-input-container">
            <label htmlFor="last_name">Last Name: </label>
            <input name="last_name" type="text" value={this.state.last_name} onChange={this.handleChange} placeholder="Last Name"/>
          </div>
          <div className="form-input-container">
            <label htmlFor="email">Email: </label>
            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
          </div>
          <div className="form-input-container">
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
          </div>
          <div className="form-input-container">
            <label htmlFor="password_confirmation">Password Confirmation: </label>
            <input name="password_confirmation" type="password" value={this.state.password_confirmation} onChange={this.handleChange} placeholder="Password Confirmation"/>
          </div>
          <input className="button" type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToProps, { signUp })(SignUp)
