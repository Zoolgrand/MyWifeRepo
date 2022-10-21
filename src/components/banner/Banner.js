import React from "react";
import "./Banner.css";
import SimpleImageSlider from "react-simple-image-slider";

import img1 from "../../images/1.jpeg";
import img2 from "../../images/2.jpeg";
import img3 from "../../images/3.jpeg";
import img4 from "../../images/4.jpeg";
import img5 from "../../images/5.jpeg";
import img6 from "../../images/6.jpeg";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="banner">
      <SimpleImageSlider
        width={1000}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Banner;
