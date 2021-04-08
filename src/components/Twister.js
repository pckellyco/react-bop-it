import React from 'react'
import twister from "../images/twister.png"

export default function Twister({scrollIt}) {

    return (
        <div className="twister" onScroll={scrollIt}>
            <img src={twister}  alt="twister" />
            <div className="overflow"></div>
        </div>
    )
}
