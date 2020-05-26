import React from "react";
import "./Stack.css";
import Heading from "/home/aayush/ds-visualizer/src/Components/Heading";
import StackVisualizer from "/home/aayush/ds-visualizer/src/Components/DSComponents/Stack/StackVisualizer";

const termArray = ['Push','Pop'];

export default class App extends React.Component {
  render() {
    return (
      <div className="StackContainer">
        <Heading />
        <StackVisualizer structure="Stack" extra={termArray}/>
      </div>
    );
  }
}
