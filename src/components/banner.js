import React from "react";
import Carousel from "@brainhubeu/react-carousel";

import banner_two from "../assets/banner-two-web.png";
import banner_three from "../assets/banner-three-web.png";
import banner_four from "../assets/banner-four-web.png";

export default function Banner() {
  return (
    <Carousel slidesPerPage={1} arrows={false} autoPlay={7000} infinite>
      <img
        src={banner_two}
        alt="Palmieri Uniformes"
        style={{ width: "100%" }}
      />
      <img
        src={banner_three}
        alt="Palmieri Uniformes"
        style={{ width: "100%" }}
      />
      <img
        src={banner_four}
        alt="Palmieri Uniformes"
        style={{ width: "100%" }}
      />
    </Carousel>
  );
}
