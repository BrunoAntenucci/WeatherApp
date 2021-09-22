import React from 'react';
import Logo from './logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { NavLink } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav id='divNav'>
      <NavLink to='/' activeClassName='home'>
        <div id='home'>
          <img src={Logo} alt='Logo'/>
          <span>Henry - Weather App</span>
        </div>
      </NavLink>
      <NavLink to='/about'>
        <span id='about'>About</span>
      </NavLink>
        <SearchBar onSearch={onSearch}/>
    </nav>
  )
};

export default Nav;