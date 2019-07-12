import React from "react";
import Sidebar from "react-sidebar"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from "../actions"

const mapStateToProps = state => ({token: state.auth.token})
const NavBarContent = connect(mapStateToProps, { signOut })(({handleClick, signOut, token}) => {
  return (
    <div className="nav-bar open">
      <h1 className="logo">app.ly</h1>
      <div className="nav-links">
        <NavLink to="/home" onClick={handleClick}>home</NavLink>
        <NavLink to="/opportunities" onClick={handleClick}>opportunities</NavLink>
        <NavLink to="/organizations" onClick={handleClick}>organizations</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/settings" onClick={handleClick}>settings</NavLink>
        {
          token ? <h2 onClick={signOut} style={{cursor: "pointer"}}>sign out</h2> :
          (<React.Fragment>
            <NavLink to="/login" onClick={handleClick}>login</NavLink>
            <NavLink to="/signup" onClick={handleClick}>sign up</NavLink>
          </React.Fragment>)
        }
      </div>
    </div>
  )
})

class NavBar extends React.Component {
  state = {
    sidebarOpen: false
  }

  onSetSidebarOpen = (open) => {
   this.setState({ sidebarOpen: open });
 }

  render() {
    return (
        <Sidebar
        sidebar={<NavBarContent handleClick={() => this.onSetSidebarOpen(false)}/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        >
        <div>
          <div className="nav-bar closed" onClick={() => this.onSetSidebarOpen(true)}>
            <h1>&#9776;</h1>
            <h1 className="logo">app.ly</h1>
          </div>
          {this.props.children}
        </div>
        </Sidebar>
    )
  }
}

export default NavBar
