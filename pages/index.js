import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import CalculatorForm from '../components/CalculatorForm';
import Output from '../components/Output';
import BMIScale from '../components/BMIScale';
import { interpretBMI } from '../utils/bmiCalculator';
import ChartContainer from '../components/ChartContainer';



export default function Home() {
  const [bmi, setBMI] = useState(0);
  const [desc, setDesc] = useState('N/A');
  const [chartData, setChartData] = useState({
    labels: ['BMI Values'],
    datasets: [
      {
        label: 'Person1',
        data: [], // Empty initial data values
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
      
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call to get initial data
      const initialData = await simulateAPICall();
      setChartData(initialData);
    };

    fetchData();
  }, []);


  const simulateAPICall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          labels: ['BMI 1', 'BMI 2', 'BMI 3'],
          datasets: [
            {
              label: 'Welcome user',
              data: [0],
              fill: true,
              borderColor: 'rgb(54, 162, 235)',
              tension: 0.1,
            },
            
          ],
        });
      }, 1400);
    });
  };

  const updateChartData = (oldData, bmi) => {
    const labels = [...oldData.labels, 'New BMI']; // Assuming you want to add a timestamp as a label
    const datasets = [...oldData.datasets];
  
    // Check if datasets[1] exists before pushing to it
    if (datasets.length >= 2) {
      datasets[1].data.push(parseFloat(bmi));
    }
  
    // Always push to datasets[0] as it's the first dataset
    datasets[0].data.push(parseFloat(bmi));
  
    return {
      labels: labels,
      datasets: datasets,
    };
  };
  
  

  const handleSubmit = (weight, height) => {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }

    const heightInMeters = height / 100; // cm -> m
    const bmiValue = weight / Math.pow(heightInMeters, 2);
    const bmiDesc = interpretBMI(bmiValue);

    setBMI(bmiValue.toFixed(2));
    setDesc(`You are ${bmiDesc}`);
    const newChartData = updateChartData(chartData, bmiValue.toFixed(2)); // Update chart data with the new BMI value
    setChartData(newChartData);

    
  };

  const handleReset = () => {
    setBMI(0);
    setDesc('N/A');
    const initialData = {
      labels: ['BMI Values'],
      datasets: [
        {
          label: 'Person1',
          data: [],
          fill: false,
          borderColor: 'rgb(54, 162, 235)',
          tension: 0.1,
        },
      ],
    };
    setChartData(initialData);
  };
  

  return (
    <div className='container'>
      <Head>
        <title>BMI Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>BMI Calculator</h1>
      <CalculatorForm onSubmit={handleSubmit} onReset={handleReset} />
      <Output bmi={bmi} desc={desc} />
      <BMIScale />
      <ChartContainer  chartData={chartData} />
    </div>
  );
}
