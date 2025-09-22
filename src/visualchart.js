// src/components/ChartComponent.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components of Chart.js that you need
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  // Sample data for a line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Sales Growth',
        data: [10, 30, 50, 70, 90, 110], // Y-axis data points
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  // Options for the chart (e.g., title, scales)
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales Growth Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales ($)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Data Visualization with Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
