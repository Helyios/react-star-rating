import React, { Component } from "react";
import "./styles.css";
import Star from "./Star";

class StarRating extends Component {
  render() {
    return (
      <div>
        <Star starsNumber={5} />
      </div>
    );
  }
}

export default StarRating;
