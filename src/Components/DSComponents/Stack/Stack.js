import React from "react";
import "./Stack.css";
import Heading from "/home/aayush/ds-visualizer/src/Components/Heading";
import Visualizer from "/home/aayush/ds-visualizer/src/Components/Visualizer";

const termArray = ['Push','Pop'];

export default class App extends React.Component {
  render() {
    return (
      <div className="StackContainer">
        <Heading />
        <Visualizer structure="Stack" extra={termArray}/>
      </div>
    );
  }
}
