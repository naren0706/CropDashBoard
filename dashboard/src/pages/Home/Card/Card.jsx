import React from 'react'
import { data } from './CardData'
import './Card.css'
const Card = () => {
  return (
    <div className='card-container'>
      {
        data.map((val,key)=>{
            return(
                <div className='card-row'>
                    
                          <div className="data-round">{val.data}</div>
                      <div className="card-title">{val.tittle}</div>
                    
                </div>

            );
        })
      }
    </div>
  )
}

export default Card
