import React from 'react';
import { useCart } from '../hooks/useCart';
import '../styles/CardItem.css';

// CartItem renders a single row in the Cart page
// It gets the item as a prop, but calls cart actions directly via useCart

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item__image" />

      <div className="cart-item__info">
        <h4 className="cart-item__name">{item.name}</h4>
        <p className="cart-item__price">${item.price.toFixed(2)} each</p>
      </div>

      {/* Quantity controls: minus / number / plus */}
      <div className="cart-item__qty">
        <button
          className="cart-item__qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="cart-item__qty-value">{item.quantity}</span>
        <button
          className="cart-item__qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Subtotal for this item */}
      <span className="cart-item__subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </span>

      {/* Remove button */}
      <button
        className="cart-item__remove"
        onClick={() => removeFromCart(item.id)}
        aria-label="Remove item"
      >
        ✕
      </button>
    </div>
  );
}

export default CartItem;