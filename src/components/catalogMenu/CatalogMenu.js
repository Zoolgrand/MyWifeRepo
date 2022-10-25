import React from "react";
import CatalogMenuItem from "../catalogMenuItem/CatalogMenuItem";
import "./CatalogMenu.css";

const CatalogMenu = (props) => {
  const { activeCatagory, setActiveCatagory } = props;

  const catalogMenuItems = [
    {
      id: "holsts",
      text: "HOLSTS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XdMqQJ71l6X2Kn2mxZK7dw4uojS3vq-jBw&usqp=CAU",
    },
    {
      id: "penscils",
      text: "PENSCILS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhB2ujABJ396cz3vTr-TByd7KFMUT6fo4Ig&usqp=CAU",
    },
  ];

  return (
    <div className="menu-element">
      {catalogMenuItems.map((item) => (
        <CatalogMenuItem
          id={item.id}
          text={item.text}
          img={item.img}
          activeCatagory={activeCatagory}
          setActiveCatagory={setActiveCatagory}
        />
      ))}
    </div>
  );
};

export default CatalogMenu;
