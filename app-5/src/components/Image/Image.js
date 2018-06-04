import React, { Component } from "react";
import "./Image.css";

const Image = props => {
  return <img className="center" src={props.image} />;
};

export default Image;
