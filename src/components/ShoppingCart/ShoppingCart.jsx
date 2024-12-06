import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function ShoppingCart() {
  const { cartData, handleClearCart } = useContext(AppContext);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //if window size is below 600px gives true
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    handleResize();
    // Remove event listener- prevents memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={
        isMobile
          ? 'default-div custom-border rounded p-3 my-1 default-text'
          : 'default-div custom-border rounded p-3 my-3 default-text'
      }
    >
      <h5>Shopping cart</h5>
      <p>
        Here you can add items to Your shopping cart from different shops. The
        item name, price and shop is displayed
      </p>
      {cartData.length > 0 ? (
        cartData.map((item, index) => (
          <div key={index} className="d-flex">
            <p className="small me-2 mb-1">{item.name}</p>
            <p className="small me-2 mb-1">{item.shop}</p>
            <p className="small me-2 mb-1">{item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <button
        className="non-styled-item underline-button default-text px-0"
        onClick={() => handleClearCart()}
      >
        Clear cart
      </button>
    </div>
  );
}

export default ShoppingCart;
