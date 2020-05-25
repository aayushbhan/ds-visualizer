import React from "react";
import "./Queue.css";
import Heading from "/home/aayush/ds-visualizer/src/Components/Heading";
import Visualizer from "/home/aayush/ds-visualizer/src/Components/Visualizer";

const termArray = ['Queue','Dequeue'];

export default class App extends React.Component {
  render() {
    return (
      <div className="QueueContainer">
        <Heading />
        <Visualizer structure="Queue" extra={termArray}/>
      </div>
    );
  }
}
