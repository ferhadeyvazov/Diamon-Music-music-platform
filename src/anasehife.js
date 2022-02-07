import React, { useState } from 'react'
import Logo from "../src/Images/Logo/diamon2.png"
import { NavLink } from "react-router-dom"
function Menubar() {

  const [toggle, setToggle] = useState(false);
    // console.log(toggle);
    return (
        <div className="menubar">
            <div className="logo">
                <a href="/layihe/src/teqdimat.js"><img src={Logo} alt="logo" /></a>
                <h2><NavLink to="/">Diamon Music</NavLink></h2>
            </div>
            <ul className={toggle ? "sidebar-active" : "sidebar"}>
                <li>
                    <NavLink to="/">Ana Sehife</NavLink>
                </li>
                <li>
                    <NavLink to="/Janrlar">Janrlar</NavLink>
                </li>
                <li>
                    <NavLink to="/Tədbirlər">Tədbirlər</NavLink>
                </li>
                <li>
                    <NavLink to="/Əlaqə">Əlaqə</NavLink>
                </li>
            </ul>
            {/* <input type="checkbox" className="checkbox" /> */}
            <button id="checkbox" onClick={ () => setToggle(!toggle)}>CLick</button>
            <label htmlFor="checkbox" className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </label>
        </div>

    )

}

export default Menubar
