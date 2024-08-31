
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; 
import Dashboard from './components/Dashboard'; 
import Inventory from './components/Inventory';
import Order from './components/Order';
import Returns from './components/Returns';
import Customers from './components/Customers';

import Shipping  from './components/Shipping';
import Channel from './components/Channel';
import Calculation  from './components/Calculation';
import Account  from './components/Account';
const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/order" element={<Order />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/calculation" element={<Calculation />} />
            <Route path="/account" element={<Account />} />
          
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
