import React, {useContext} from 'react'
import { TemaContext } from '../context/TemaContext'

 const Header = ()=> {

//     const[darkMode, setDarkMode] = useState(false)
//     const handleClick = ()=>{
//         setDarkMode(!darkMode)
//     }
    const color = useContext(TemaContext)

    

    return(
        <div className='header'>
            <h1 style={{color}}>Rick & Morty</h1>
            {/* <button type='button' 
                onClick={handleClick}> 
                {darkMode ? 'Dark Mode ': 'Light Mode'}
                </button> */}
             {/* Usando funcion anonina en onClick */}
             {/* <button type='button'onClick={()=>{handleClick(!setDarkMode)}}>
                {darkMode ? 'Dark Mode 1 ': 'Light Mode'}</button>    */}
        </div>
    )

}

export {Header}