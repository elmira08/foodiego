import React, { createContext, useState } from 'react';

// Step 1: Create the context object
// This is just an empty "container" — no data yet
export const CartContext = createContext();

// Step 2: Create the Provider component
// This holds the actual state and functions
// It wraps the whole app in App.js so everyone can access it
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // cartItems is an array of: { id, name, price, image, quantity, restaurantId }

  // ADD item: if item already exists, increase quantity; otherwise add new
  const addToCart = (food) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === food.id);
      if (existing) {
        // Map returns a NEW array — never mutate state directly
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // New item — spread food object and add quantity: 1
      return [...prev, { ...food, quantity: 1 }];
    });
  };

  // REMOVE item completely from cart
  const removeFromCart = (foodId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== foodId));
  };

  // UPDATE quantity — if new qty is 0 or less, remove the item
  const updateQuantity = (foodId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(foodId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === foodId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // CLEAR entire cart (called after successful checkout)
  const clearCart = () => {
    setCartItems([]);
  };

  // DERIVED values — computed from cartItems, not stored separately
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Step 3: Provide the value to all children
  // Any component wrapped inside CartProvider can call useCart() to get these
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}