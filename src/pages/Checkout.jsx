import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/App.css';
import '../styles/Checkout.css';


// Checkout page — a form that simulates placing an order
// On submit: clears the cart and navigates to /orders

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Form state — one useState object for all fields
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Generic onChange handler — works for all inputs
  // e.target.name matches the key in the form object
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    // Basic validation — check all fields are filled
    const allFilled = Object.values(form).every((v) => v.trim() !== '');
    if (!allFilled) {
      alert('Please fill in all fields.');
      return;
    }
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Simulate order placed
    setSubmitted(true);
    clearCart(); // empty the cart after order
    setTimeout(() => navigate('/orders'), 2000);
  };

  // Success screen after submit
  if (submitted) {
    return (
      <div className="page">
        <div className="container empty-state">
          <div className="checkout__success-icon">🎉</div>
          <h2>Order placed!</h2>
          <p>Redirecting you to your orders...</p>
        </div>
      </div>
    );
  }

  const deliveryFee = 2.99;

  return (
    <div className="page">
      <div className="container">
        <h1 className="section-title">Checkout</h1>

        <div className="checkout__layout">
          {/* Left: form */}
          <div className="checkout__form">
            <h3 className="checkout__section-label">Delivery Details</h3>
            <div className="checkout__grid-2">
              <div className="checkout__field">
                <label>Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
              </div>
              <div className="checkout__field">
                <label>Email</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" />
              </div>
            </div>
            <div className="checkout__field">
              <label>Address</label>
              <input name="address" value={form.address} onChange={handleChange} placeholder="123 Main Street" />
            </div>
            <div className="checkout__field">
              <label>City</label>
              <input name="city" value={form.city} onChange={handleChange} placeholder="New York" />
            </div>

            <h3 className="checkout__section-label" style={{ marginTop: 32 }}>Payment</h3>
            <div className="checkout__field">
              <label>Card Number</label>
              <input name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="4242 4242 4242 4242" maxLength="19" />
            </div>
            <div className="checkout__grid-2">
              <div className="checkout__field">
                <label>Expiry</label>
                <input name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" maxLength="5" />
              </div>
              <div className="checkout__field">
                <label>CVV</label>
                <input name="cvv" value={form.cvv} onChange={handleChange} placeholder="123" maxLength="3" />
              </div>
            </div>
          </div>

          {/* Right: summary */}
          <div className="checkout__summary">
            <h2 className="cart__summary-title">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="checkout__summary-item">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="cart__summary-divider" />
            <div className="checkout__summary-item">
              <span>Delivery</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="checkout__summary-item checkout__summary-item--total">
              <span>Total</span>
              <span>${(cartTotal + deliveryFee).toFixed(2)}</span>
            </div>

            <button className="btn-primary cart__checkout-btn" onClick={handleSubmit}>
              Place Order 🎉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;