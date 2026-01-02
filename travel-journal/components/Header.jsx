import React from "react";
import globe from "../src/assets/global-line.png";

const Header = () => {
  return (
    <header>
      <img src={globe} alt="globe" />
      <h1>This is the header component</h1>
    </header>
  );
};

export default Header;
