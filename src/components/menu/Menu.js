import React from "react";
import Catalog from "./Catalog";
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu" >
            <Catalog />
            <div>СПИСОК ОБРАНОГО</div>
        </div>
    )
}

export default Menu