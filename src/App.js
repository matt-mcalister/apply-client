import React, { Component } from 'react';
import NavBar from "./components/NavBar"


class App extends Component {

  state = {
    sideBarOpen: false
  }

  onSetSidebarOpen = (open) => {
   this.setState({ sidebarOpen: open });
 }


  render() {
    return (
      <NavBar>
        <div className="App">
          my content
        </div>
       </NavBar>
    );
  }
}

export default App
