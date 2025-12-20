import { useState, useEffect } from 'react';

export function useCart() {
  const [cartData, setCartData] = useState(() => {
    const stored = localStorage.getItem('cartData');
    return stored ? JSON.parse(stored) : [];
  });

  const addToCart = (item) => {
    if (!item.id) {
      console.error('Item without id added to cart:', item);
      return;
    }

    setCartData((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCartData((prev) =>
      prev
        .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
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
