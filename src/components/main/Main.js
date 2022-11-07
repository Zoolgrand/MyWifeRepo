import React from "react";
import Catalog from "../catalog/Catalog";
import HomePage from "../homePage/HomePage";
import "./Main.css";

const Main = () => {
  return (
    <div className="solid">
      {/* <HomePage /> */}
      <Catalog />
      {/* <div>FAVORYT</div> */}
    </div>
  );
};

export default Main;
