import React from "react";
import mountfuji from "../src/assets/mountfuji.avif";
import locationmarker from "../src/assets/marker.png";

const Entry = () => {
  return (
    <article>
      <img src={mountfuji} alt="img" />
      <img src={locationmarker} />
      <p>Japan</p>
      <h1>Mount Fuji</h1>
      <p>12 Jan, 2021 - 24 Jan, 2021</p>
      <p>
        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters.
      </p>
      <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
    </article>
  );
};

export default Entry;
