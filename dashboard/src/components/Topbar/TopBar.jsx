import React from 'react'
import './topbar.css'
import * as Ricon from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function topbar() {
  return (
    <div className='topBar-container'>
      <div className='menu'>
        <Ricon.FaLeaf size={40}/>
        
      </div>  
        <div className='tittle'>
          crop growth
        </div>

      
      
    </div>
  )
}
