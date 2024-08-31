import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import './SalesPieChart.css'; 
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material'; 

const data = [
  { name: 'WooCommerce Store', value: 55.8 },
  { name: 'Shopify Store', value: 44.2 },
];

const COLORS = ['#ff69b4', '#00ffff'];

// Function to render the percentage labels
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${data[index].value.toFixed(1)}%`}
    </text>
  );
};

const SalesPieChart = () => {
  const total = 2659;

  return (
    <div className="pie-chart-container">
      <h1 className="chart-heading">Portion of Sales <IconButton className="info-icon" aria-label="info">
     

          <InfoIcon />
        </IconButton></h1>
        <hr className="chart-divider" />
      <ResponsiveContainer width="100%" height={300}>
        <PieChart className="chart-shadow">
          <Pie 
            data={data} 
            cx="50%" 
            cy="50%" 
            labelLine={false} 
            label={renderCustomizedLabel} 
            dataKey="value" 
            outerRadius={80}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          {total}
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            className="centered-total" 
            fill="black"
            fontSize="11px"
          >
            {`Total: ${total}`}
          </text>
        </PieChart>
      </ResponsiveContainer>
      <div className="legend">
        {data.map((entry, index) => (
          <div key={index} className="legend-item">
            <div className="color-box" style={{ backgroundColor: COLORS[index] }}></div>
            <span className="company-name">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPieChart;
