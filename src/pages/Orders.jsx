import React from 'react';
import { useNavigate } from 'react-router-dom';
import { orders } from '../data/orders';
import '../styles/Orders.css';


// Orders page — shows past orders from mock data
// In a real app you'd fetch these from a backend by user ID

function Orders() {
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <div className="page">
        <div className="container empty-state">
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>📋</div>
          <h2>No orders yet</h2>
          <p>Your past orders will appear here.</p>
          <button className="btn-primary" onClick={() => navigate('/')}>
            Order Something
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="section-title">Your Orders</h1>

        <div className="orders__list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              {/* Order header */}
              <div className="order-card__header">
                <div>
                  <h3 className="order-card__restaurant">{order.restaurantName}</h3>
                  <p className="order-card__date">{order.date} · {order.id}</p>
                </div>
                <span className={`order-card__status order-card__status--${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>

              {/* Items list */}
              <ul className="order-card__items">
                {order.items.map((item, i) => (
                  <li key={i} className="order-card__item">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              {/* Total */}
              <div className="order-card__footer">
                <span>Total</span>
                <span className="order-card__total">${order.total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;