import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';

const data = [
  { name: '6/30/2024 - 7/6/2024', orders: 1600, sales: 1404 },
  { name: '7/7/2024 - 7/12/2024', orders: 800, sales: 800 },
  { name: '7/21/2024 - 7/27/2024', orders: 800, sales: 460 },
];

const COLORS = ['#FF8042','#00C49F'];

const SalesChart = () => {
  return (
    <div className="chart-container">
      <h2>
        Sales vs Orders
        <IconButton className="info-icon" aria-label="info">
          <InfoIcon />
        </IconButton>
      </h2>
      
      <hr className="chart-divider" />
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} />
          <YAxis ticks={[0, 400, 800, 1200, 1600]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke={COLORS[0]} />
          <Line type="monotone" dataKey="sales" stroke={COLORS[1]} />

         
          <text 
  x="50%" 
  y="50%" 
  textAnchor="middle" 
  dominantBaseline="middle" 
  className="centered-chart-text" 
  fill="black"
  fontSize="10px"
>
  <tspan x="50%" dy="0">6/30/2024 - 7/6/2024</tspan>

 
  <tspan x="50%" dy="15">
    <tspan>
      <circle cx="-20" cy="0" r="4" fill="orange" />
    </tspan>
    Order
  </tspan>


  <tspan x="50%" dy="15">
    <tspan>
      <circle cx="-20" cy="0" r="4" fill="green" />
    </tspan>
    Sales - 1404
  </tspan>

  
  <tspan x="50%" dy="15">
    <tspan>
      <circle cx="-20" cy="0" r="4" fill="black" />
    </tspan>
    Avg Order Value - 35100
  </tspan>
</text>

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
