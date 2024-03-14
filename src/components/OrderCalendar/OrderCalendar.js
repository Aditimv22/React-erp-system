import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './OrderCalendar.css';

// Mock data for orders
const orders = [
  { id: 1, customerId: 1, customerName: 'John Doe', orderDate: '2023-05-01', deliveryDate: '2023-05-05' },
  { id: 2, customerId: 2, customerName: 'Jane Smith', orderDate: '2023-05-03', deliveryDate: '2023-05-07' },
];

const OrderCalendar = () => {
  const [date, setDate] = useState(new Date());

  const tileContent = ({ date, view }) => {
    const deliveryOrders = orders.filter((order) => {
      const deliveryDate = new Date(order.deliveryDate);
      return (
        deliveryDate.getFullYear() === date.getFullYear() &&
        deliveryDate.getMonth() === date.getMonth() &&
        deliveryDate.getDate() === date.getDate()
      );
    });

    return (
      <div className="tile-content">
        {deliveryOrders.length > 0 ? (
          <div>
            {deliveryOrders.map((order) => (
              <div key={order.id} className="order-info">
                Order ID: {order.id} ({order.customerName})
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="order-calendar">
      <h2>Order Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
      />
    </div>
  );
};

export default OrderCalendar;