import React, { useState } from 'react';
import cadorna from './SearchBar.module.css';


export default function SearchBar({onSearch}) {
    const [city, setCity] = useState('');
    return (
      <form 
        onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('')
      }}>
        <input
          className={cadorna.busque}
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={ e => setCity(e.target.value)}
        />
        <input 
          className={cadorna.boton}
          type="submit" 
          value="Agregar" />
      </form>
    );
  }

