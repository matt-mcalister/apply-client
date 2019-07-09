import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import Organizations from "./components/Organizations"
import Opportunities from "./components/Opportunities"
import Settings from "./components/Settings"


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
        <Switch>
          <Route exact path="/login" render={() => {
            return <Login />
          }}/>
          <Route exact path="/signup" render={() => {
            return <SignUp />
          }}/>
          <Route exact path="/organizations" render={() => {
            return <Organizations />
          }}/>
          <Route exact path="/opportunities" render={() => {
            return <Opportunities />
          }}/>
          <Route exact path="/settings" render={() => {
            return <Settings />
          }}/>
          <Route exact path="/" render={() => {
            return <Home />
          }}/>
          <Route exact path="/:catch" render={() => {
            return (<Redirect to="/" />)
          }} />
        </Switch>
       </NavBar>
    );
  }
}

export default App
