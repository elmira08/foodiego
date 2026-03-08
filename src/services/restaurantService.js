// restaurantService.js
// This is your DATA ACCESS LAYER — pages never import from /data directly.
// They always go through here.
//
// WHY? Because right now data is mocked locally.
// When you add a real backend, you only change THIS file — not every page.
// Pages stay exactly the same. That's the power of a service layer.

import { restaurants } from '../data/restaurants';
import { foods } from '../data/foods';

// Get all restaurants (for Home page)
export const getAllRestaurants = () => {
  return restaurants;
};

// Get a single restaurant by id (for Restaurant page)
// The :id from the URL gets passed here
export const getRestaurantById = (id) => {
  // URL params are strings, so we convert to number with parseInt
  return restaurants.find((r) => r.id === parseInt(id));
};

// Get all food items for a specific restaurant
export const getFoodsByRestaurantId = (restaurantId) => {
  return foods.filter((f) => f.restaurantId === parseInt(restaurantId));
};

// Search restaurants by name or cuisine
export const searchRestaurants = (query) => {
  const lower = query.toLowerCase();
  return restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(lower) ||
      r.cuisine.toLowerCase().includes(lower) ||
      r.tags.some((tag) => tag.toLowerCase().includes(lower))
  );
};