import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { round: 1, accuracy: 82 },
  { round: 2, accuracy: 84 },
  { round: 3, accuracy: 80 },
];

const MetricsChart = () => (
  <div className="bg-white shadow p-4 rounded-lg">
    <h2 className="text-xl font-semibold mb-3">Detection Metrics</h2>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="round" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="accuracy" stroke="#4f46e5" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default MetricsChart;
