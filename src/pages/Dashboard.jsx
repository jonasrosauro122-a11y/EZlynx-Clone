import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', clients: 5, policies: 2 },
  { name: 'Feb', clients: 10, policies: 8 },
  { name: 'Mar', clients: 7, policies: 4 },
];

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="clients" stroke="#8884d8" />
        <Line type="monotone" dataKey="policies" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default Dashboard;
