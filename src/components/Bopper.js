import React from 'react'
import bopper from "../images/bopper2.png"

export default function Bopper(props) {
    return (
            <img src={bopper} className="bopper" alt="bopper" onClick={props.bopIt}/>
    )
}