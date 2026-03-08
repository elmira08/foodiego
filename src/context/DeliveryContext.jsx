import React, { createContext, useContext, useState } from 'react';

// DeliveryContext stores whether user selected Delivery or Pickup
// Navbar sets it, Home page reads it to filter restaurants

const DeliveryContext = createContext();

export function DeliveryProvider({ children }) {
  const [deliveryMode, setDeliveryMode] = useState('delivery'); // 'delivery' | 'pickup'
  return (
    <DeliveryContext.Provider value={{ deliveryMode, setDeliveryMode }}>
      {children}
    </DeliveryContext.Provider>
  );
}

export function useDelivery() {
  return useContext(DeliveryContext);
}