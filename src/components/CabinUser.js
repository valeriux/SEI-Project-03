import React from 'react'

const CabinUser = (props) => {
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

    </div>
  )
}

export default CabinUser
