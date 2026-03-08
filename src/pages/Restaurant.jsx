import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { getRestaurantById, getFoodsByRestaurantId } from '../services/restaurantService';
import '../styles/App.css';
import '../styles/Restaurant.css';

function Restaurant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, addToCart, updateQuantity } = useCart();
  const [activeTab, setActiveTab] = useState(null);

  const restaurant = getRestaurantById(id);
  const foods = getFoodsByRestaurantId(id);

  if (!restaurant) {
    return (
      <div className="rpage">
        <div className="container empty-state">
          <h2>Restaurant not found</h2>
          <button className="btn-primary" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const categories = [...new Set(foods.map((f) => f.category))];

  const getQty = (foodId) => {
    const item = cartItems.find((i) => i.id === foodId);
    return item ? item.quantity : 0;
  };

  const scrollToCategory = (cat) => {
    setActiveTab(cat);
    const el = document.getElementById('cat-' + cat);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="rpage">
      {/* Hero */}
      <div className="rpage__hero">
        <img src={restaurant.image} alt={restaurant.name} className="rpage__hero-img" />
        <button className="rpage__back" onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="rpage__main container">
        {/* Restaurant info */}
        <div className="rpage__info">
          <h1 className="rpage__name">{restaurant.name}</h1>
          <p className="rpage__cuisine">{restaurant.tags.slice(0, 2).join(', ')}</p>
          <div className="rpage__meta">
            <span className="rpage__rating">⭐ {restaurant.rating} (100+)</span>
            <span>🟢 {restaurant.deliveryTime}</span>
            <span className={restaurant.deliveryFee === 0 ? 'rpage__free' : ''}>
              🚲 {restaurant.deliveryFee === 0 ? 'Free' : '$' + restaurant.deliveryFee.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Category tabs — clicking scrolls to that section */}
        <div className="rpage__tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={'rpage__tab' + (activeTab === cat ? ' rpage__tab--active' : '')}
              onClick={() => scrollToCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All menu sections visible at once */}
        <div className="rpage__menu">
          {categories.map((cat) => (
            <div key={cat} id={'cat-' + cat} className="rpage__section">
              <h2 className="rpage__section-title">{cat}</h2>
              <div className="rpage__food-grid">
                {foods.filter((f) => f.category === cat).map((food) => {
                  const qty = getQty(food.id);
                  return (
                    <div key={food.id} className="frow">
                      <div className="frow__info">
                        <p className="frow__price">${food.price.toFixed(2)}</p>
                        <h4 className="frow__name">{food.name}</h4>
                        <p className="frow__desc">{food.description}</p>
                      </div>
                      <div className="frow__right">
                        <img src={food.image} alt={food.name} className="frow__img" />
                        {qty > 0 ? (
                          <div className="frow__qty">
                            <button
                              className="frow__qty-btn"
                              onClick={() => updateQuantity(food.id, qty - 1)}
                            >−</button>
                            <span>{qty}</span>
                            <button
                              className="frow__qty-btn"
                              onClick={() => addToCart(food)}
                            >+</button>
                          </div>
                        ) : (
                          <button className="frow__add" onClick={() => addToCart(food)}>
                            +
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;