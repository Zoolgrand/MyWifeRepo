import React from "react";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import "./GalaryItem.css";

const GalaryItem = (props) => {
  const { id, title, price, size, foundation, img, length, color } = props;

  // const sizeDesct = size ? size : null;

  return (
    <div className="galary-item">
      <p className="galary-item_name">{title}</p>

      <div className="galary-item_main">
        <img className="galary-item_image" src={img} alt="smile" />
        <h3 className="galary-item_text">
          опис
          {size && <p>Size: {size}</p>}
          {foundation && <p>Foundation: {foundation} </p>}
          {length && <p>Length: {length} </p>}
          {color && <p>Color: {color}</p>}
        </h3>
      </div>
      <div className="price-wrap">
        <p className="galary-item_price">{price} </p>
      </div>
      <div className="galary-item_btn">
        <button>детальніше</button>
        <button>купити</button>
      </div>
    </div>
  );
};

export default GalaryItem;
