import React from 'react'
import bopper from "../images/bopper.png"

export default function Bopper(props) {
    return (
        <img src={bopper} className="bopper" onClick={props.bopIt} alt="bopper"/>
    )
}