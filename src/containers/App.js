import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }

    function onFilter(ciudadId) {
      let ciudad = cities.find(c => c.id === parseInt(ciudadId));
      if (ciudad) {
        return ciudad;
      } else {
        return null;
      }
    }


  return (
    <div className="App">
      <Route path='/' render={() => <Nav onSearch={onSearch} />} />
      <Route path='/' exact render={() => 
        <Cards 
          cities={cities}   
          onClose={onClose}
          />}
      />

      <Route exact path="/ciudad/:ciudadId" render={({match}) => {
          const city = onFilter(match.params.ciudadId);
          return <Ciudad city={city} />
      }} />
            
      <Route component={About} exact path='/about'  />
    </div>
  );
};

export default App;
