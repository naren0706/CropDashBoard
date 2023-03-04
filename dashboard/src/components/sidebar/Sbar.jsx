import React from 'react'
import { data } from "./Sdata";
import './Sbar.css'

export default function Sbar() {
  return (
    <div className='sidebar-container'>
     <div className="group">
        {
          data.map((val,key)=>
            {
              return(
                  <div className='row'id={window.location.pathname===val.path ? "active":""} 
                  onClick={()=>{window.location.pathname=val.path;}}>
                      <div className='logo'>{val.logo}</div>
                      <div className="title">{val.tittle}</div>
                  </div>
                );
            }
          )
        }
      </div>   
    </div>
  )
}
