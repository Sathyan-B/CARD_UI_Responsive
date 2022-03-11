import React from "react";
import "./styles.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    let mainContent = {
      label: this.props.details.label,
      content: this.props.details.content
    };

    const mystyle = {
      color: "white",
      backgroundColor: this.props.details.bgColor
    };

    return (
      <div className="card" style={mystyle}>
        <div className="cardWrapper">
          <Header imageURL={this.props.details.imageURL} />
          <Main content={mainContent} />
          <Footer bgDetails={mystyle} />
        </div>
      </div>
    );
  }
}

export default Card;
