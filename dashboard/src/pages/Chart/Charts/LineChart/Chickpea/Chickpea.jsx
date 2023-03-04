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
      text: 'Chickpea',
    },
  },
};

const labels = ['N(mg/kg)','P(mg/kg)','K(ppm)','Temperature(C)','humidity(bars)','ph','rainfall(Liter Per Sq meter)'];

export const data = {
  labels,
  datasets: [
    {
        label: 'minimum',
        data: [20	,	55	,	75	,	17.02498456	,	14.25803981	,	5.988992796	,	65.11365631],
        backgroundColor:'blue',
    },
    {
      label: 'maximum',
      data: [60	,	80	,	85	,	20.99502153	,	19.96978871	,	8.868741443	,	94.78189594],
      backgroundColor:'red',
  }
    
  ],
};

export default function Chickpea() {
    return (
      <div style={{width:600, height:400}}>
      <Line options={options} data={data}/>
      </div>
    );
  }
  