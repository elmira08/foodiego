import React from 'react';
import { useCart } from '../hooks/useCart';
import '../styles/FoodCard.css';

// FoodCard receives a single food item as a prop from Restaurant page
// It uses useCart() to call addToCart — no props needed for that!
// This is the power of Context: FoodCard doesn't need the Cart page to pass anything

function FoodCard({ food }) {
  const { addToCart, cartItems } = useCart();

  // Check if this food is already in the cart to show quantity
  const cartItem = cartItems.find((item) => item.id === food.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAdd = (e) => {
    e.stopPropagation(); // prevent any parent onClick from firing
    addToCart(food);
  };

  return (
    <div className="food-card">
      <div className="food-card__image-wrap">
        <img src={food.image} alt={food.name} className="food-card__image" />
        {/* Show category label */}
        <span className="food-card__category">{food.category}</span>
      </div>

      <div className="food-card__body">
        <h4 className="food-card__name">{food.name}</h4>
        <p className="food-card__description">{food.description}</p>

        <div className="food-card__footer">
          <span className="food-card__price">${food.price.toFixed(2)}</span>

          <button className="food-card__add-btn" onClick={handleAdd}>
            {/* Show how many are already in cart */}
            {quantityInCart > 0 ? `+ Add (${quantityInCart})` : '+ Add'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;