import React from "react";
import globe from "../src/assets/global-line.png";

const Header = () => {
  return (
    <header>
      <img src={globe} className="logo" alt="globe" />
      <h1 className="heading">Travel Journal.</h1>
    </header>
  );
};

export default Header;
