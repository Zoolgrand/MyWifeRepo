import React from "react";
import './CatalogMenuItem.css'

const CatalogMenuItem = (props) => {

   const  {id, text, img, activeCatagory, setActiveCatagory} = props;

   const clickHandler = () => {
    setActiveCatagory(id)
   }

   const isActive = activeCatagory === id;
   const currClass = isActive ? "active" : "slip"
   const content = isActive ? text : <img src={img}/>

    return (
        <div className="item" onClick={clickHandler} >
            <div className={currClass} >{content}</div>
        </div>
    )
}

export default CatalogMenuItem