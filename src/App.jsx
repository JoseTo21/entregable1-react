import './App.css';
import ButtonPhr from './components/ButtonPhr';
import Phrases from './components/Phrases';
import phrases from './utils/phrases.json';
import getRandomPhrases from './utils/getRandomPhrases';
import { useState } from 'react';

const bgImgs = [1, 2, 3, 4];

function App() {

  const [phrase, setPhrase] = useState(getRandomPhrases(phrases))
  const [numberImg, setNumberImg] = useState(getRandomPhrases(bgImgs))

  const appStyle = {
    backgroundImage: `url('/backgrounds/fondo${numberImg}.jpg')`
  }

  return (
    <div style={appStyle} className="App">
      <h1 className='App__title'>Galletas de la Fortuna</h1>
      <Phrases phraseRandom ={phrase} />
      <ButtonPhr 
      changePhrases ={setPhrase} 
      setNumberImg ={setNumberImg}/>
    </div>
  )
}

export default App
