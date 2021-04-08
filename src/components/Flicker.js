import React from 'react'
import flicker from "../images/flicker.png"

export default function Flicker({mouseIt}) {

    return (
        <img src={flicker} className="flicker" alt="flicker" onMouseOver={mouseIt} />
    )
}

// same as 

// export default function Flicker(props) {

//     // const mouseIt = () => {
//     //     props.mouseIt
//     // }
//     return (
//         <img src={flicker} className="flicker" alt="flicker" onMouseOver={mouseIt}/>
//     )
// }