import React from "react";
import "./styles.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let myStyle1 = {
      color: this.props.bgDetails.backgroundColor,
      backgroundColor: "#FFF"
    };

    return (
      <div className="footer">
        <button className="footerButton" style={myStyle1}>
          Learn More
        </button>
      </div>
    );
  }
}

export default Footer;
