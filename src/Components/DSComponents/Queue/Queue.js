import React from "react";
import "./Queue.css";
import Heading from "/home/aayush/ds-visualizer/src/Components/Heading";
import QueueVisualizer from "/home/aayush/ds-visualizer/src/Components/DSComponents/Queue/QueueVisualizer";

const termArray = ['Queue','Dequeue'];

export default class App extends React.Component {
  render() {
    return (
      <div className="QueueContainer">
        <Heading />
         <QueueVisualizer structure="Queue" extra={termArray}/> 
      </div>
    );
  }
}
