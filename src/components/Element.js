import React, { Component } from "react";

class Element extends Component {
  state = {};
  render() {
    return (
      <div className="element">
        <p>{this.props.name} <a><span className="glyphicon glyphicon-trash" /></a></p>
      </div>
    );
  }
}

export default Element;
