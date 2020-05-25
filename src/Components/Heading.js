import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default class Heading extends React.Component {
  render() {
    return (
      <div className="HomeContainer">
        <div className="HeadContainer" align="center">
          <NavLink to="/">Home</NavLink> &emsp;&emsp;&emsp;
          <NavLink to="/Stack">Stack</NavLink>&emsp;&emsp;&emsp;
          <NavLink to="/Queue">Queue</NavLink>&emsp;&emsp;&emsp;
        </div>
      </div>
    );
  }
}
