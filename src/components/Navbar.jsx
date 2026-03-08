import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useDelivery } from '../context/DeliveryContext';
import CartDropdown from './CartDropdown';
import '../styles/Navbar.css';

function Navbar() {
  const { cartCount } = useCart();
  const { deliveryMode, setDeliveryMode } = useDelivery();
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e) {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">Foodie Go</Link>

        <div className="navbar__toggle">
          <button
            className={'navbar__toggle-btn' + (deliveryMode === 'delivery' ? ' active' : '')}
            onClick={() => setDeliveryMode('delivery')}
          >
            🚲 Delivery
          </button>
          <button
            className={'navbar__toggle-btn' + (deliveryMode === 'pickup' ? ' active' : '')}
            onClick={() => setDeliveryMode('pickup')}
          >
            🏃 Pickup
          </button>
        </div>

        <div className="navbar__location">
          <span>📍</span>
          <span>136 Greenpoint Ave</span>
        </div>

        <div className="navbar__right">
          <div className="navbar__cart-wrap" ref={cartRef}>
            <button className="navbar__cart-btn" onClick={() => setCartOpen((o) => !o)}>
              🛒
              {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
            </button>
            {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
          </div>
          <button className="navbar__signin" onClick={() => navigate('/orders')}>Sign in</button>
          <button className="btn-primary navbar__create">Create account</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;