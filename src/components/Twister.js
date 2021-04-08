import React from 'react'
import twister from "../images/twister.png"

export default function Twister() {
    return (
        <div className="twister">
            <img src={twister}  alt="twister" />
            <div className="overflow"></div>
        </div>
    )
}
