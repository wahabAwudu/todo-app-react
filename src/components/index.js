import React, { Component } from "react";

import Form from "./form/Form";
import List from "./list/List";

class Home extends Component {
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase ToDo List</div>
        </div>
        <div className="notesBody">
          <List />
        </div>
        <div className="notesFooter">
          <Form />
        </div>
      </div>
    );
  }
}

export default Home;
