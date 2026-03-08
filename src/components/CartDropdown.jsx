import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/CartDropdown.css';

// The cart popup that opens from the navbar cart icon.
// This is the ONE place the cart lives — Restaurant page no longer has its own.

function CartDropdown({ onClose }) {
  const { cartItems, cartTotal, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const deliveryFee = cartItems.length > 0 ? 2.99 : 0;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  const handleViewCart = () => {
    onClose();
    navigate('/cart');
  };

  // Empty state
  if (cartItems.length === 0) {
    return (
      <div className="cart-dd">
        <div className="cart-dd__empty">
          <span className="cart-dd__empty-icon">🛒</span>
          <h3>Your cart is empty</h3>
          <p>Add items from a restaurant or store to start a new cart</p>
          <button className="btn-primary cart-dd__start-btn" onClick={onClose}>
            Start shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-dd">
      {/* Items list with +/- controls */}
      <div className="cart-dd__items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-dd__item">
            <span className="cart-dd__item-qty">{item.quantity}</span>
            <span className="cart-dd__item-name">{item.name}</span>
            <div className="cart-dd__item-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <span className="cart-dd__item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Totals + actions */}
      <div className="cart-dd__footer">
        <div className="cart-dd__row">
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="cart-dd__row">
          <span>Delivery costs</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="cart-dd__row cart-dd__row--total">
          <span>Total</span>
          <span>${(cartTotal + deliveryFee).toFixed(2)}</span>
        </div>

        <button className="btn-primary cart-dd__checkout-btn" onClick={handleCheckout}>
          Go to checkout
        </button>
        <button className="cart-dd__view-btn" onClick={handleViewCart}>
          View full cart
        </button>
        <button className="cart-dd__clear-btn" onClick={clearCart}>
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default CartDropdown;