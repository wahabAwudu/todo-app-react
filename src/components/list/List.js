import React, { Component } from "react";
import "./List.css";

class List extends Component {
  render() {
    return (
      <div className="note fade-in">
        <span className="closebtn">&times;</span>
        <p className="noteContent">{"content"}</p>
      </div>
    );
  }
}

export default List;
