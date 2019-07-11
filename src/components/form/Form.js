import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div className="formWrapper">
        <input className="noteInput" placeholder="Write a new note..." />
        <button className="noteButton">Add Note</button>
      </div>
    );
  }
}

export default Form;
