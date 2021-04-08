import React from 'react'
import twister from "../images/twister.png"

export default function Twister(props) {
    return (
        <div className="twister" onScroll={props.scrollIt}>
            <img src={twister}  alt="twister" />
            <div className="overflow"></div>
        </div>
    )
}
