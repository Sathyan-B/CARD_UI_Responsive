import React from "react";
import "./styles.css";
import Card from "./Card.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // imageURL: "../../public/images/icon-sedans.svg",

    let sedans = {
      imageURL: "/images/icon-sedans.svg",
      label: "SEDANS",
      content:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      buttonUrl: "",
      bgColor: "hsl(31, 77%, 52%)"
    };

    let suvs = {
      imageURL: "/images/icon-suvs.svg",
      label: "SUVS",
      content:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      buttonUrl: "",
      bgColor: "hsl(184, 100%, 22%)"
    };

    let luxury = {
      imageURL: "/images/icon-luxury.svg",
      label: "LUXURY",
      content:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      buttonUrl: "",
      bgColor: "hsl(179, 100%, 13%)"
    };

    return (
      <div className="cardHolder">
        <Card details={sedans} />
        <Card details={suvs} />
        <Card details={luxury} />
      </div>
    );
  }
}

export default App;
