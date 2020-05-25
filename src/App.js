import React from "react";
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from './Components/Home'
import Stack from './Components/DSComponents/Stack/Stack'
import Queue from './Components/DSComponents/Queue/Queue'

export default class App extends React.Component {
  render() {
    return (
      <Router>
          <Route exact path = "/" component = {Home} />
          <div className="container">
            <Route exact path = "/Stack" component = {Stack} />
            <Route exact path = "/Queue" component = {Queue} /> 
          </div>
      </Router>
    );
  }
}
