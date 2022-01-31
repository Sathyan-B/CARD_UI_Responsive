import React from "react";
import "./styles.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <h1>{this.props.content.label}</h1>
        <div className="para">{this.props.content.content}</div>
      </div>
    );
  }
}

export default Main;
