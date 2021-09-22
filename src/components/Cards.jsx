import React from 'react';
import Card from './Card.jsx';
import cadorna from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const { cities } = props;
  if(cities){
  return <div className={cadorna.div}>{
    cities.map(city => 
      <Card
        max={city.max}
        min={city.min}
        name={city.name}
        img={city.img}
        id={city.id}
        key={city.id}
        onClose={() => props.onClose(city.id)}
      />
    )}</div>
  }else{
    return (
      <div>Sin ciudades</div>
    )
  }
};