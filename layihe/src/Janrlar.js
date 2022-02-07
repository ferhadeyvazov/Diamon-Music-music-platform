import React from 'react'
import { NavLink } from "react-router-dom"
import VanillaTilt from "vanilla-tilt"
import gitara from "./Images/Janrlar/rock1.png"
import pop from "./Images/Janrlar/pop1.png"
import jazz from "./Images/Janrlar/jazz4.png"
function Janrlar() {
    VanillaTilt.init(document.querySelectorAll(".kart1"), {
		max: 25,
		speed: 400
	});
    return (
<div className="beden">
            <div className="janrlar">
            <div className="kart1">
                <h2 className="name">ROCK</h2>
                <NavLink to="/Janrlar/Rock" className="buy">Daxil ol</NavLink>
                <div className="circle"></div>
                <img className="product" src={gitara} alt="Guitar" />
            </div>

            <div className="kart1">
                <h2 className="name">POP</h2>
                <NavLink to="/Janrlar/Rock" className="buy">Daxil ol</NavLink>
                <div className="circle"></div>
                <img className="product" src={pop} alt="pop" />
            </div>

            <div className="kart1">
                <h2 className="name">JAZZ</h2>
                <NavLink to="/Janrlar/Rock" className="buy">Daxil ol</NavLink>
                <div className="circle"></div>
                <img className="product" src={jazz} alt="Jazz" />
            </div>
        </div>
</div>
        )
}

export default Janrlar
