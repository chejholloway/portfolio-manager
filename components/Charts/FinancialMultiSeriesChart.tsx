// components/FinancialMultiSeriesChart.tsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

interface FinancialMultiSeriesChartProps {
  data: {
    labels: (string | number)[];
    datasets: {
      label: string;
      data: { t: number; o: number; h: number; l: number; c: number }[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}


Chart.register(...registerables);

const FinancialMultiSeriesChart: React.FC<FinancialMultiSeriesChartProps> = ({ data }) => {
  // Register the financial and time scales
  const scales = {
    x: [
      {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
    ],
    y: {
      type: 'linear',
      position: 'right',
    },
  };

  // Chart options with scales
  const options = {
    scales,
  };

  return (
    <div className="relative w-full h-96">
      <Line data={data} options={options} type="financial" />
    </div>
  );
};

export default FinancialMultiSeriesChart;
