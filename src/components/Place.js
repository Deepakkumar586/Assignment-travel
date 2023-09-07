import React from 'react'

export default function Place(items) {
  return (
    <div>
      <div className='card'>
        <div className='cardHeader'>
            <img className='card-img' src={items.img}/>
            <div className={items.rating > 7.9 ? "Place" : "space"}>  {items.rating > 7.9 ? 'Best Place' : 'Not Best Place'}
            </div>
            <p>Rating : {items.rating}</p>
            <div className='card-body'>
                <h1>{items.destinationName}</h1>
                <p>{items.description}</p>
              
            </div>
        </div>
      </div>
      
    </div>
  )
}
