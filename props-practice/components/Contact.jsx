import React from "react";
import cat1 from "../src/assets/felix.png";

const Contact = () => {
  return (
    <div className="card">
      <img src={cat1} className="cat1" />
      <div className="cat1content">
        <h3>Mr.Felix</h3>
        <p>+91 6305755345</p>
        <p>mdshouqatazeez@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
