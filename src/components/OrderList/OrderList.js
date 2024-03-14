import React from 'react';
import './OrderList.css';

// Mock data for orders
const orders = [
  { id: 1, customerId: 1, customerName: 'Aditi Vyavhare', orderDate: '2023-05-01', status: 'Pending' },
  { id: 2, customerId: 2, customerName: 'Rudvi Patil', orderDate: '2023-05-03', status: 'Shipped' },
];

const OrderList = () => {
  return (
    <div className="order-list">
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;