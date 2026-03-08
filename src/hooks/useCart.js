import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// Custom hook — this is just a shortcut so every component doesn't have to:
//   import { useContext } from 'react'
//   import { CartContext } from '../context/CartContext'
//   const value = useContext(CartContext)
//
// Instead they just do:
//   import { useCart } from '../hooks/useCart'
//   const { cartItems, addToCart } = useCart()

export function useCart() {
  const context = useContext(CartContext);

  // Safety check: if someone uses useCart() outside of CartProvider, warn them
  if (!context) {
    throw new Error('useCart must be used inside a CartProvider');
  }

  return context;
}