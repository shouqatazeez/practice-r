import React from "react";
import mountfuji from "../src/assets/mountfuji.avif";
import locationmarker from "../src/assets/marker.png";

const Entry = () => {
  return (
    <article>
      <div className="img-frame">
        <img src={mountfuji} className="main-img" alt="img" />
      </div>
      <div className="content">
        <span className="japanloc">
          <img src={locationmarker} alt="marker" className="marker" />
          Japan
          <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="link">
            View on Google Maps
          </a>{" "}
        </span>

        <h2>Mount Fuji</h2>
        <p>12 Jan, 2021 - 24 Jan, 2021</p>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters.
        </p>
      </div>
    </article>
  );
};

export default Entry;
