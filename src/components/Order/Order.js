import React, { useState, useEffect } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/orders')
    .then(res => res.json())
    .then(data => setOrders(data))
  }, [])
  return (
    <div className="text-center">
      <h1>This is {orders.length} Order</h1>
{
  orders.map(order =><li>Name: {order.name} Order Time: {order.orderTime}</li>)
}
    </div>
  );
};

export default Order;