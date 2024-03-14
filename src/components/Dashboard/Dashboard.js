import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Dummy data for key metrics
  const totalProducts = 100;
  const totalOrders = 50;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <span className="label">Total Products</span>
          <span className="value">{totalProducts}</span>
        </div>
        <div className="metric">
          <span className="label">Total Orders</span>
          <span className="value">{totalOrders}</span>
        </div>
      </div>
      <div className="navigation">
        <button className="nav-button">Manage Products</button>
        <button className="nav-button">Manage Orders</button>
      </div>
    </div>
  );
};

export default Dashboard;