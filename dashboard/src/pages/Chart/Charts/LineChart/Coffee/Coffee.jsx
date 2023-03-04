import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Coffee',
    },
  },
};

const labels = ['N(mg/kg)','P(mg/kg)','K(ppm)','Temperature(C)','humidity(bars)','ph','rainfall(Liter Per Sq meter)'];

export const data = {
  labels,
  datasets: [
    {
        label: 'minimum',
        data: [80	,	15	,	25	,	23.05951896	,	50.04557009	,	6.020947179	,	115.1564012],
        backgroundColor:'blue',
    },
    {
      label: 'maximum',
      data: [120	,	40	,	35	,	27.92374437	,	69.94807345	,	7.493191968	,	199.4735636],
      backgroundColor:'red',
  }
    
  ],
};

export default function Coffee() {
    return (
      <div style={{width:600, height:400}}>
      <Line options={options} data={data}/>
      </div>
    );
  }
  