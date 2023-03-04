import React from 'react'
import { Routes , Route } from 'react-router-dom';

import Home from "../Home/Home";
import About from "../About/About";
import Crop from "../Crop/Crop";
import Chart from "../Chart/Chart";
import People from "../people/People";

const Pages = () => {
  return (
    <div className='page-container'>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/crop" element={<Crop/>}/>
          <Route path="/chart" element={<Chart/>}/>
          <Route path="/people" element={<People/>}/>
        </Routes> 
    </div>
  )
}

export default Pages
