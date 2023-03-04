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
      text: 'Grapes',
    },
  },
};

const labels = ['N(mg/kg)','P(mg/kg)','K(ppm)','Temperature(C)','humidity(bars)','ph','rainfall(Liter Per Sq meter)'];

export const data = {
  labels,
  datasets: [
    {
        label: 'minimum',
        data: [0	,	120	,	195	,	8.825674745	,	80.01639435	,	5.510924849	,	65.01095312],
        backgroundColor:'blue',
    },
    {
      label: 'maximum',
      data: [40	,	145	,	205	,	41.94865736	,	83.98351748	,	6.499604931	,	74.91506217],
      backgroundColor:'red',
  }
    
  ],
};

export default function Grapes() {
    return (
      <div style={{width:600, height:400}}>
      <Line options={options} data={data}/>
      </div>
    );
  }
  