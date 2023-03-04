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
      text: 'Kidneybeans',
    },
  },
};

const labels = ['N(mg/kg)','P(mg/kg)','K(ppm)','Temperature(C)','humidity(bars)','ph','rainfall(Liter Per Sq meter)'];

export const data = {
  labels,
  datasets: [
    {
        label: 'minimum',
        data: [0	,	55	,	15	,	15.33042636	,	18.09224048	,	5.502999119	,	60.27552528],
        backgroundColor:'blue',
    },
    {
      label: 'maximum',
      data: [40	,	80	,	25	,	24.92360104	,	24.96969858	,	5.99812453	,	149.7441028],
      backgroundColor:'red',
  }
    
  ],
};

export default function Kidneybeans() {
    return (
      <div style={{width:600, height:400}}>
      <Line options={options} data={data}/>
      </div>
    );
  }
  