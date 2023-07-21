import React from "react";

import "./Services.css";

import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";

export const Services = () => {
  return (
    <div className="body">
      <h1>Graphic Design Works</h1>
      <img src={one} className="image" alt="Unique Salonga" />
      <img src={two} className="image" alt="Friedrich Nietzche" />
      <img src={three} className="height-image" alt="Osamu Dazai" />
      <img src={four} className="width-image" alt="Marvel Ruins" />
    </div>
  );
};
