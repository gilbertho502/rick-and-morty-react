import './App.css';
import { Header } from './components/Header';
import { Characters } from './components/Characters';
import { useState } from "react";
import imgRick from './images/rick-morty.png'

function App() {
  const [characters, setCharacters] = useState(null)
  const resetCharacters = () => {
    setCharacters(null)    
  }
  const[darkMode, setDarkMode] = useState(false)
  const handleClick = ()=>{
      setDarkMode(!darkMode)
  }

  return (
    <div className="App">

      
      <div className={!darkMode? 'App-header': 'App-claro'} >
        <Header />
        <button type='button'
          className={darkMode? 'boton-claro': 'boton-dark'}  
          onClick={handleClick}> 
          {darkMode ? 'Dark Mode ': 'Light Mode'}
        </button>
          
          {characters ? (
            <>
            <div className='reset-class'><span className='back-home' onClick={resetCharacters}>Regresar</span></div>
            <Characters />
            
            </>
          ) : (
            <>
              <img src={imgRick} alt = "rick-morty" className = 'img-home'/>
              <button onClick={setCharacters} className="btn-search">Personajes</button>
            </>
          )}

      </div>
    </div>
  );
}

export default App;
