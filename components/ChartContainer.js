// src/components/ChartContainer.js

import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import styles from '../styles/ChartContainer.module.css';
import Chart from 'chart.js/auto';

const ChartContainer = ({ chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type:"line", // Change the chart type as needed
      data: chartData,
      options: {
        scales: {
          x: {
            type:'category',
            // ... other x-axis options
          },
          y: {
          
            
            // ... y-axis options
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className={styles.chartContainer}>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default ChartContainer;
