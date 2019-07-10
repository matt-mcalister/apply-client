import React from "react"
import { login } from "../actions"
import { connect } from "react-redux"

class Login extends React.Component {

  state = {
    email: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    }, this.props.history.push)
  }

  render(){
    return (
      <div className="flex centered full-page">
        <form className="auth-form flex column" onSubmit={this.handleSubmit}>
          <div className="form-input-container">
            <label htmlFor="email">Email: </label>
            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
          </div>
          <div className="form-input-container">
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
          </div>
          <input className="button" type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, { login })(Login)
