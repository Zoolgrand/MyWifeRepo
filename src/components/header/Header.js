import React from "react";
import Bascket from "../bascket/Bascket";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import './Header.css'


const Header = () => {
    return (
        <div className="header" >
           <Logo />
            <Menu />
            <Bascket/>
        </div>
    )
}

export default Header