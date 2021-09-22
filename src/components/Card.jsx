import React from 'react';
import cadorna from "./Card.module.css";
import { Link } from 'react-router-dom';


export default function Card(props) {
  // acá va tu código
  return ( <div className={cadorna.caja}>
    <div>
    <Link to={`/ciudad/${props.id}`} >
        <h5 className={cadorna.ciudad}>{props.name}</h5>
    </Link>
      <button className={cadorna.boton} onClick={props.onClose}></button>
    </div>
    <div className={cadorna.encabezado}>
      <div>
        <p className={cadorna.bold}>Min </p>
        <p>{props.min}°</p>
      </div>
      <div className={cadorna.max}>
        <p className={cadorna.bold}>Max </p>
        <p>{props.max}°</p>
      </div>
    </div>
    <img className={cadorna.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Sol"/>
  </div>
  )
};