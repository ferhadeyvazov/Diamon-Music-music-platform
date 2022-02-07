import React from 'react'
import { NavLink } from "react-router-dom"

function Teqdimat() {
  return (

    <div className="carousel">
      <figure>
        <div className="slash">
          <h1>Bizə qoşul <br /> və azad musiqidən həzz al!</h1>
          <p>100-dən çox mahni olan bu platformada səndə öz sevdiyin mahnılara
            qulaq as və tərzini yarat</p>
          <button className="ruh"><NavLink to="/Qeydiyyat">Qeydiyyatdan keç</NavLink></button>
        </div>
        <div className="slash">
          <h1>Bizə qoşul <br /> və azad musiqidən həzz al!</h1>
          <p>100-dən çox mahni olan bu platformada səndə öz sevdiyin mahnılara
            qulaq as və tərzini yarat</p>
          <button className="ruh"><NavLink to="/Qeydiyyat">Qeydiyyatdan keç</NavLink></button>
        </div>

        <div className="slash">
          <h1>Dinləməklə yetinmə, <br /> dostlarınla əyləncəni yaşa!</h1>
          <p>Dostlarınla əyləncənin dibinə vurmaq üçün Festivallar,
            Partilər, Tədbirlər vasitəsilə həyatına adrenalin qat</p>
          <button className="ruh"><NavLink to="/Qeydiyyat">Qeydiyyatdan keç</NavLink></button>
        </div>

      </figure>
    </div>
  )
}
export default Teqdimat
