import React, {useState, useReducer, useMemo, useRef, useCallback} from 'react'
import { Search } from './Search';
import { useCharacters } from '../hooks/useCharacter';

const initialState = {
    favorites: []
};

const API = process.env.REACT_APP_API

const favoriteRedicer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITE': 
        return{
            ...state,
            favorites: [...state.favorites, action.payload]
        };
        default:
            return state
    }
};
const Characters = ()=>{
    
    // const [characters, setCharacters] = useState([]) 
    const [favorites, dispatch] = useReducer(favoriteRedicer, initialState)
    const [search, setSearch] = useState("")
    const searchInput = useRef()

    // hook para conectarnos a la api de Rick&Morty
    const characters = useCharacters(API)

    const handleClick = (favorite) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    };

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value)
    // };
    // usando useCallback
    const handleSearch = useCallback(()=>{
        setSearch(searchInput.current.value)
    }, [])

    // Funcion para filtrar
    // const filterUsers = characters.filter((user) => {
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // });

    const filterUsers = useMemo(()=>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase())
    }),
        [characters,search]
    )

    return(
        <div className='characters'> 
          {favorites.favorites.map(favorite => (
            <li key='favorite.id'>
                {favorite.name}
            </li>
        ))}
            <Search search={search}
                searchInput = {searchInput}
                handleSearch={handleSearch}
            />

            <div className='container-characters'>

                    {filterUsers.map((character, index) => (
                        <div className='character-container' key={index}>
                            <div>
                                <img src={character.image} alt= {character.name}/>
                            </div>
                            
                            <div>
                                <h3>{character.name}</h3>
                                <p>{character.status ==='Alive'? (
                                    <>
                                    <span className='alive'/>
                                    Alive
                                    </>
                                ): (
                                    <>
                                    <span className='dead'/>
                                    Dead
                                    </>
                                )
                                }</p>
                                <p className='text-grey'><span className='text-grey'>Episodios: {character.episode.length}</span></p>
                                <p className='text-grey'><span className='text-grey'>Especie: {character.species}</span></p>  
                                <p className='text-grey'><span className='text-grey'>Origen: {character.origin.name}</span></p>
                                <p className='text-grey'><span className='text-grey'>Ubicacion: {character.location.name}</span></p>
                                                     
                                
                            </div>
                            <button type='button' onClick={()=> handleClick(character)}>
                                Favorito
                            </button>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export {Characters}