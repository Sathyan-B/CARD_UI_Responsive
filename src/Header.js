import React from "react";
import "./styles.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("what", this.props.imageURL);

    return (
      <div>
        <img src={this.props.imageURL}></img>
      </div>
    );
  }
}

export default Header;
