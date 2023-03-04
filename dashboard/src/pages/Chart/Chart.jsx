import React from 'react'
import './Chart.css';
import Apple from './Charts/LineChart/Apple/Apple';
import Rice from './Charts/LineChart/Rice/Rice';
import Banana from "./Charts/LineChart/Banana/Banana";
import Blackgram from "./Charts/LineChart/Blackgram/Blackgram"
import Chickpea from "./Charts/LineChart/Chickpea/Chickpea"
import Coconut from "./Charts/LineChart/Coconut/Coconut"
import Coffee from "./Charts/LineChart/Coffee/Coffee"
import Cotton from "./Charts/LineChart/Cotton/Cotton"
import Grapes from "./Charts/LineChart/Grapes/Grapes"
import Jute from "./Charts/LineChart/Jute/Jute"
import Kidneybean from "./Charts/LineChart/Kidneybeans/Kidneybeans"
import Lentil from "./Charts/LineChart/Lentil/Lentil.jsx"
import Maize from "./Charts/LineChart/Maize/Maize.jsx"
import Mango from "./Charts/LineChart/Mango/Mango.jsx"
import Monthbean from "./Charts/LineChart/Monthbean/Monthbean.jsx"
import Mungbean from "./Charts/LineChart/Mungbean/Mungbean.jsx"
import Muskmelon from "./Charts/LineChart/Muskmelon/Muskmelon.jsx"
import Orange from "./Charts/LineChart/Orange/Orange.jsx"
import Papaya from "./Charts/LineChart/Papaya/Papaya.jsx"
import Pegionbean from "./Charts/LineChart/Pegionbean/Pegionbean.jsx"
import Pomegranate from "./Charts/LineChart/Pomegranate/Pomegranate.jsx"
import Watermelon from "./Charts/LineChart/Watermelon/Watermelon.jsx"



export default function chart() {
  return (
    <>
    <div className="chart-container">
      <Apple/>
      <Rice/>
      <Banana/>
      <Blackgram/>
      <Chickpea/>
      <Coconut/>
      <Coffee/>
      <Cotton/>
      <Grapes/>
      <Jute/>
      <Kidneybean/>
      <Lentil/>
      <Maize/>
      <Mango/>
      <Monthbean/>
      <Mungbean/>
      <Muskmelon/>
      <Orange/>
      <Papaya/>
      <Pegionbean/>
      <Pomegranate/>
      <Watermelon/>
      </div>
    </>
  );
}
