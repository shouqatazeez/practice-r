import React from "react";
import reactLogo from "../assets/react.svg";

const Nav = () => {
  return (
    <header>
      <nav>
        <img src={reactLogo} className=" imglogo" alt="" />
        <span className="heading"> ReactFacts</span>
      </nav>
    </header>
  );
};

export default Nav;
