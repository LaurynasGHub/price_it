import { useState, useEffect } from 'react';

export function useCart() {
  const [cartData, setCartData] = useState(() => {
    const stored = localStorage.getItem('cartData');
    return stored ? JSON.parse(stored) : [];
  });

  const addToCart = (item) => {
    setCartData((prev) => [...prev, item]);
  };

  const removeFromCart = (item) => {
    setCartData((prev) => prev.filter((dataItem) => dataItem.id !== item.id));
  };

  const clearCart = () => {
    setCartData([]);
  };

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  return {
    cartData,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
