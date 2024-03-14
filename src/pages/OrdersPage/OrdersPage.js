import React from 'react';
import OrderList from '../../components/OrderList/OrderList';
import OrderCalendar from '../../components/OrderCalendar/OrderCalendar';
import './OrdersPage.css';

const OrdersPage = () => {
  return (
    <div className="orders-page">
      <OrderList />
      <OrderCalendar />
    </div>
  );
};

export default OrdersPage;