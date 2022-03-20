import React from 'react'

import { Header } from './Components/Layouts/Header/Header'
import { Gif } from './Components/Layouts/Gif/Gif'
import { Footer } from './Components/Layouts/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Gif/>
      <Footer/>
    </div>
  );
}
export default App;