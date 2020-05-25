import React from "react";
import "./Visualizer.css";
import arrow from "/home/aayush/ds-visualizer/src/Images/arrow.png";
import ArrayComp from "./ArrayComp";

const leftStyle = {
  padding: 10,
};

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: this.props.structure,
      size: "",
      number: "",
      UID: -1,
      terms: this.props.extra,
      arraycom: false,
    };
  }

  //Updates the array structure every time a number is pushed
  updateStructure = () => {
    let box = document.getElementById(`${this.state.UID}`);
    box.innerHTML = `${this.state.number}`;
  };

  //Creates the array structure
  createStructure = () => {
    let table = document.getElementById("tableContainer");
    let row = document.createElement("tr");
    row.id = "onlyRow";

    let temp_size = `${this.state.size}`;

    for (var i = 0; i < temp_size; i++) {
      var x = row.insertCell(i);
      x.innerHTML = " ";
      x.id = i;
    }
    table.appendChild(row);
  };

  //Called when Size of stack button is clicked, changes the "arraycom" state to true.
  SizeHandler = (event) => {
    event.preventDefault();
    this.setState({
      //arraycom: !this.state.arraycom,
      UID: this.state.UID + 1,
    });
    this.createStructure();
  };

  //Called when Push number button is clicked,
  NumberHandler = (event) => {
    event.preventDefault();
    this.setState({
      UID: this.state.UID + 1,
    });
    if(this.state.UID < this.state.size){
    this.updateStructure();
  } else{
    alert(this.state.structure+" is full");
  }
  };

  //Updates the "size" state when the size is entered
  SizeChangeHandler = (event) => {
    this.setState({ size: event.target.value });
  };

  //Updates the "number" state when the number is entered
  NumberChangeHandler = (event) => {
    event.preventDefault();
    this.setState({
      number: document.getElementById("number").value,
    });
  };

  render() {
    return (
      <div className="MainContainer">
        <div className="InputContainer">
          <div className="SizeChildContainer" style={leftStyle}>
            <h5>Enter Size Of {this.state.structure} :</h5>
            <form onSubmit={this.SizeHandler}>
              <input
                type="number"
                id="size"
                min="0"
                max="20"
                size="25"
                onChange={this.SizeChangeHandler}
              />
              <input type="submit" id="Sbtn" size="25" />
            </form>
          </div>
          <div className="NumberChildContainer">
            <h5>{this.state.terms[0]} Number</h5>
            <form onSubmit={this.NumberHandler}>
              <input
                type="number"
                id="number"
                min="0"
                size="25"
                onChange={this.NumberChangeHandler}
              />
              <input type="submit" id="Sbtn" size="25" />
            </form>
          </div>
          <div className="RemoveChildContainer">
            <h5>{this.state.terms[1]} Element</h5>
            <button id="popBtn">{this.state.terms[1]}</button>
          </div>
        </div>
        {/* <div className="TopLabelContainer">
          Top Of {this.state.structure}
          <img id="Arrow" src={arrow} />
        </div> */}
        <div className="VisualizingContainer">
          <table id="tableContainer">
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
