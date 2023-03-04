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
      text: 'Banana',
    },
  },
};

const labels = ['N(mg/kg)','P(mg/kg)','K(ppm)','Temperature(C)','humidity(bars)','ph','rainfall(Liter Per Sq meter)'];

export const data = {
  labels,
  datasets: [
    {
        label: 'minimum',
        data: [80	,	70	,	45	,	25.01018457	,	75.03193255	,	5.505393833	,	90.10978128],
        backgroundColor:'blue',
    },
    {
      label: 'maximum',
      data: [120	,	95	,	55	,	29.90888522	,	84.97849241	,	6.490074429	,	119.84797],
      backgroundColor:'red',
  }
    
  ],
};

export default function Banana() {
    return (
      <div style={{width:600, height:400}}>
      <Line options={options} data={data}/>
      </div>
    );
  }
  