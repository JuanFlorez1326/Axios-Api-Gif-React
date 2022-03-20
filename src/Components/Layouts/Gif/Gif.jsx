import axios from 'axios'
import React, { useState } from 'react'
import { TextUI } from '../../UI/TextUI/TextUI'
import { CardUI } from '../../UI/CardUI/CardUI'


export const Gif = () => {

  const [card, setCard] = useState([]);

  const UrlGif = "https://api.giphy.com/v1/stickers/search?"
  const key = "api_key=I4ub2ABDFChWF6nfeWp8yNiJIhRNDpsF"
  const limit = "&limit=16"
  const query = "&q="

  const GetCardsGif = (event) => {
    axios.get(`${UrlGif}${key}${query}${/*encodeURI*/(event.target.value)}${limit}`)    
    .then(response =>  setCard(response.data.data))
    .catch(error => console.log(error))
  }

  return(
    <div className='divGif'>

      <div>
        <TextUI event={GetCardsGif}/> 
      </div>  

      <main className='divMain'>
        { card.map(card => (<CardUI key={card.id/*+card.title*/} text={card.title} image={card.images.downsized_medium.url} />)) }
      </main>

    </div>
  )
}