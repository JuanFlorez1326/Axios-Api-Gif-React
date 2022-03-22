import './TextUI.css'
import React from "react"

export const TextUI = ({ event }) => {
    return (
        <div className="divText">
            <input className='txtGif' type="text" placeholder = "Search" onChange={event}/>
        </div>
    )
}