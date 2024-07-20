import React from 'react';
import { Line,Scatter } from 'react-chartjs-2';
import 'chart.js/auto';

import '../styles/allGraphing.css';

const AllGraphs = ({ sequences,Type }) => {
  
  // Transform the provided data into Chart.js datasets
  const datasets = sequences.map((sequence, index) => ({
    label: `Sequence of ${index + 1}`,
    data: sequence.map((y, x) => ({ x: x + 1, y })),
    borderColor: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color for each line
    fill: false,
  }));

  // Chart.js data object
  const chartData = {
    datasets,
  };

  // Chart.js options
  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        type:'linear',
        position: 'bottom',
        title: {
          display: true,
          text: `Steps`,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number reached in sequence',
        },
      },
    },
  };

  return (
    <div className='all-data'>
      <Type data={chartData} options={options} />
    </div>
      
  )
};

export default AllGraphs;