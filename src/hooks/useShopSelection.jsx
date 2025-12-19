import { useState, useEffect } from 'react';

export function useShopSelection() {
  const [selectedShopData, setSelectedShopList] = useState(() => {
    const stored = localStorage.getItem('selectedShopData');
    return stored ? JSON.parse(stored) : [];
  });

  const toggleShop = (shop) => {
    setSelectedShopList((prev) =>
      prev.includes(shop) ? prev.filter((s) => s !== shop) : [...prev, shop]
    );
  };

  useEffect(() => {
    localStorage.setItem('selectedShopData', JSON.stringify(selectedShopData));
  }, [selectedShopData]);

  return {
    selectedShopData,
    toggleShop,
  };
}
