import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/App.css';
import '../styles/Cart.css';

function Cart() {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const deliveryFee = cartItems.length > 0 ? 2.99 : 0;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <span className="cart-empty__icon">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Add items from a restaurant to get started</p>
            <button className="btn-primary" onClick={() => navigate('/')}>
              Start shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-page__title">Your Cart</h1>

        <div className="cart-page__layout">
          {/* Left: items */}
          <div className="cart-page__items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-row">
                <img src={item.image} alt={item.name} className="cart-row__img" />

                <div className="cart-row__info">
                  <h4 className="cart-row__name">{item.name}</h4>
                  <p className="cart-row__unit">${item.price.toFixed(2)} each</p>
                </div>

                {/* Quantity controls */}
                <div className="cart-row__qty">
                  <button
                    className="cart-row__qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >−</button>
                  <span className="cart-row__qty-val">{item.quantity}</span>
                  <button
                    className="cart-row__qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>

                <span className="cart-row__subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                  className="cart-row__remove"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove"
                >✕</button>
              </div>
            ))}

            <button className="cart-page__clear" onClick={clearCart}>
              Clear cart
            </button>
          </div>

          {/* Right: order summary */}
          <div className="cart-page__summary">
            <h2 className="cart-summary__title">Order Summary</h2>

            <div className="cart-summary__rows">
              <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-summary__row">
                <span>Delivery fee</span>
                <span>{deliveryFee === 0 ? 'Free' : '$' + deliveryFee.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-summary__divider" />

            <div className="cart-summary__row cart-summary__row--total">
              <span>Total</span>
              <span>${(cartTotal + deliveryFee).toFixed(2)}</span>
            </div>

            <button
              className="btn-primary cart-summary__btn"
              onClick={() => navigate('/checkout')}
            >
              Go to checkout
            </button>

            <button
              className="cart-summary__continue"
              onClick={() => navigate('/')}
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;