import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from 'chart.js';
import 'chart.js/auto';
import './LineChart1.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const LineChart1 = () => {
  // Simulated dynamic data
  const data = Array.from({ length: 30 }, (_, i) => ({
    date: `2024-01-${String(i + 1).padStart(2, '0')}`,
    topic: `Topic ${i + 1}`,
    intensity: Math.sin(i / 5) + Math.random() * 0.5, // Simulated intensity
    sentiment: Math.random() > 0.5 ? 'Positive' : 'Negative',
  }));

  const chartData = {
    labels: data.map(d => d.date),
    datasets: [{
      label: 'Intensity',
      data: data.map(d => d.intensity),
      borderColor: 'rgba(75, 192, 192, 1)', // Cool color for lines
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Filler color
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      pointBorderColor: 'rgba(75, 192, 192, 1)',
      pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
      pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      pointRadius: 6,
      fill: true, // Enable fill for better visual appeal
      tension: 0.4, // Increased tension for smoother curves
    }]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: -1,
        max: 1,
        ticks: {
          color: 'white', // Tick color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            const dataPoint = data[context.dataIndex];
            return `Topic: ${dataPoint.topic}, Intensity: ${dataPoint.intensity.toFixed(2)}, Sentiment: ${dataPoint.sentiment}`;
          }
        }
      }
    },
    animation: {
      tension: {
        duration: 1000,
        easing: 'easeInOutQuad',
        from: 0.1,
        to: 0.4,
        loop: true
      }
    }
  };

  return (
    <div className="trends-container">
      <h1 className="trends-title">Trends Visualization</h1>
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart1;
