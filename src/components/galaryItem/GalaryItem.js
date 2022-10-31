import React from "react";
import "./GalaryItem.css"

const GalaryItem = () => {

    
    return (
        <div className="galary-item" >
            <p className="galary-item_name" >назва</p>
           
            <div className="galary-item_main" >
                <img className="galary-item_image" alt="smile" />
                <p className="galary-item_text" >опис</p>
            </div>
            <p className="galary-item_price" >ціна</p> 
            <button>детальніше</button>
            <button>купити</button>
            
        </div>
    )
}

export default GalaryItem