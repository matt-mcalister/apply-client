import React from "react";
import Sidebar from "react-sidebar"

const NavBarContent = () => {
  return (
    <div className="nav-bar open">
      <h1 className="logo">app.ly</h1>
      <div className="nav-links">
        <h3>home</h3>
        <h3>opportunies</h3>
        <h3>organizations</h3>
      </div>
      <div className="bottom-links">
        <h3>settings</h3>
        <h3>sign out</h3>
      </div>
    </div>
  )
}

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
        sidebar={<NavBarContent />}
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
