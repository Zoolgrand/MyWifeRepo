import React from "react";
import "./Galary.css";
import GalaryItem from "../galaryItem/GalaryItem";

const Galary = (props) => {
  const { holsts, pencils } = props;

  return (
    <div className="galary">
      {holsts.map((item) => (
        <GalaryItem />
      ))}
    </div>
  );
};

export default Galary;
