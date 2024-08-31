import React from 'react';
import SalesChart from './SalesChart';
import SalesPieChart from './SalesPieChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      
      <div style={{ flexGrow: 1, padding: '20px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 3, marginRight: '10px' }}>
            <SalesChart />
          </div>
          <div style={{ flex: 2 }}>
            <SalesPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
