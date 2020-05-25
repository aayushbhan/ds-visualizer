import React from "react";
import Heading from "./Heading";
import "./Home.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="HomeContainer" align="center">
        <Heading />
        <h1>home</h1>
      </div>
    );
  }
}
