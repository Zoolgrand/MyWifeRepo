import React from "react";
import "./Galary.css";
import GalaryItem from "../galaryItem/GalaryItem";

const Galary = (props) => {
  const { holsts, penscils, activeCatagory } = props;

  const renderMap = {
    holsts: holsts,
    penscils: penscils,
  };

  return (
    <div className="galary">
      {renderMap[activeCatagory].map((item) => (
        <GalaryItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          size={item.size}
          foundation={item.foundation}
          img={item.imageSrc}
          length={item.length}
          color={item.colour}
        />
      ))}
    </div>
  );
};

export default Galary;
