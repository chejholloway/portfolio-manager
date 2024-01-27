import React from 'react';
import { Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart } from 'recharts';

interface BoxAndWhiskersChartProps {
  data: { name: string; min: number; q1: number; median: number; q3: number; max: number }[];
}

const BoxAndWhiskersChart: React.FC<BoxAndWhiskersChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="q1" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="median" stroke="#82ca9d" dot={false} />
        <Line type="monotone" dataKey="q3" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="min" stroke="#ff7300" dot={false} />
        <Line type="monotone" dataKey="max" stroke="#ff7300" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BoxAndWhiskersChart;
