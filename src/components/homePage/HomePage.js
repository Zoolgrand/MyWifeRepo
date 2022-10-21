import React from "react";
import Banner from "../banner/Banner";
import Slider from "../slider/Slider";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <h3 className="text">
        ADVANTAGES OF THE PALEY ONLINE STATIONERY STORE We offer the easiest way
        to order. We offer to buy stationery online store in Ukraine by
        wholesale and retail, at affordable prices. We guarantee safe shopping,
        as well as impeccable quality of certified products. We organize prompt
        delivery of goods to any region of Ukraine in the agreed terms. We offer
        to buy stationery in our online store in Ukraine, products for office
        work and paper products on favorable terms, VAT included. Our
        advantages: A wide range of well-known brands. Any forms of purchase:
        offline, retail, wholesale, online stationery. Simple order execution.
        Payment for goods by any convenient way. Fast delivery in any region of
        Ukraine. Consultations of qualified managers will help to determine the
        right choice in a huge catalog of our online store stationery. Do not
        hesitate to buy and make sure that the Stationery Shop has high quality
        and loyal prices. We wish you a pleasant and useful shopping!
      </h3>
      <Slider />
    </div>
  );
};

export default HomePage;
