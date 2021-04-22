import React from 'react'
import './Item.css';

export const Item = ({ item }) => {

  return (
    
      <div className="card" style= {{ width: "18rem" }} >
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{ item.title }</h5>
          <p className="card-text">{ item.price }</p>
          <a href="/#" className="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
    
  )
}
