import React from 'react'

const CabinCard = (props) => {
  return (
    <div className="card">

      <div className="card-header">
        <h3 className="card-header-title">{props.title}</h3>
      </div>

      <div className="card-image">
        <figure className="image">
          <img src={props.image} alt={props.title}/>
        </figure>
      </div>

      <div className="card-header">
        <h3 className="card-header-title">{props.address}</h3>
      </div>

      <div className="card-header">
        <h3 className="card-header-title">Price: £{props.price}</h3>
        <h3 className="card-header-title">Sleeps: {props.sleeps}</h3>

      </div>

    </div>
  )
}

export default CabinCard
