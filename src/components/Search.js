import React from 'react'
import '../styles/search.css'
// import { Input } from 'antd';

const Search = ({search, searchInput, handleSearch}) =>{
    return(
        <div className='search'>
            <input className='buscar'
             type='text' 
                placeholder='Buscar...' 
                value={search}
                ref={searchInput} 
                onChange={handleSearch}/>

            {/* <Input type='text' 
            placeholder="Buscar..."
            value={search}
            ref={searchInput} 
            onChange={handleSearch}
             /> */}
             
        </div>
    )
}

export {Search}