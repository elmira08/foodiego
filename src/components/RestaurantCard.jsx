import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RestaurantCard.css';

// RestaurantCard renders as a horizontal list row, matching the BigDevSoon design.
// Image on the left, info on the right.

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <div className="rcard" onClick={() => navigate('/restaurant/' + restaurant.id)}>
      <img src={restaurant.image} alt={restaurant.name} className="rcard__img" />

      <div className="rcard__body">
        <h3 className="rcard__name">{restaurant.name}</h3>
        <p className="rcard__cuisine">{restaurant.tags.slice(0, 2).join(', ')}</p>

        <div className="rcard__meta">
          <span className="rcard__rating">⭐ {restaurant.rating} (100+)</span>
          <span className="rcard__dot">•</span>
          <span className="rcard__time">🟢 {restaurant.deliveryTime}</span>
          <span className="rcard__dot">•</span>
          <span className={restaurant.deliveryFee === 0 ? 'rcard__free' : 'rcard__fee'}>
            🚲 {restaurant.deliveryFee === 0 ? 'Free' : '$ ' + restaurant.deliveryFee.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;