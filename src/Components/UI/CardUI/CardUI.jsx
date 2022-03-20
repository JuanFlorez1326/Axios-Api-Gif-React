import './CardUI.css'
import React from 'react';

export const CardUI = ({text, image }) => {
  return (
    <div className='divInfo'>
        <div className='divCardUI' >
          <h2 className='txtTitle' >{text} </h2>
          <img className='imgCard' src= {image} alt= {text} />
      </div>   
    </div>     
  )
}