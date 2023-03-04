import React from 'react'
import './home.css'
import Card from "./Card/Card";
export default function home() {
  return (
    <div className='home-container'>
      <div className="home-sub-container">
        <div className="cards">
          <Card/>
          {/* hi */}
          </div>
      </div>
    </div>
  )
}
