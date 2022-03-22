import axios from 'axios'
import React, { useState } from 'react'
import { TextUI } from '../../UI/TextUI/TextUI'
import { CardUI } from '../../UI/CardUI/CardUI'


export const Gif = () => {

  const [card, setCard] = useState([]);

  const GetCardsGif = (event) => {

    const URL = `https://api.giphy.com/v1/stickers/search?api_key=rTPCVxAn7IZy5r8bFByK547YgW7MfwET&q=${event.target.value}&limit=16`

    axios.get(URL)    
    .then(response => setCard(response.data.data))
    .catch(error => console.log(error))
  }

  return(
    <div className='divGif'>

      <div>
        <TextUI event={GetCardsGif}/> 
      </div>  

      <main className='divMain'>
        <div>
          { card.map(card => (<CardUI key={card.id} text={card.title} image={card.images.downsized.url} />)) }
        </div>
      </main>

    </div>
  )
}