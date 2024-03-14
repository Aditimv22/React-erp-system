import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <>
      <h2 className="h2">Welcome To ERP System</h2>
        <div className="app">
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/" className="nav-link">Dashboard</Link>
              </li>
              <li>
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li>
                <Link to="/orders" className="nav-link">Orders</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;