import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';

function ShoppingCart() {
  const { cartData, handleClearCart, handleRemoveFromCart } =
    useContext(AppContext);

  const [isMobile, setIsMobile] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

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

  function calculatePrice() {
    let totalPrice = 0;
    cartData.forEach((item) => {
      totalPrice += item.price;
    });

    return totalPrice.toFixed(2);
  }

  useEffect(() => {
    setTotalPrice(calculatePrice());
  }, [cartData]);

  return (
    <div
      className={
        isMobile
          ? 'default-div custom-border rounded p-3 my-1 default-text'
          : 'default-div custom-border rounded p-3 my-3 default-text'
      }
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h5 className="fs-5">Cart</h5>
          <FontAwesomeIcon className="ms-2 mt-1" icon={faCartShopping} />
        </div>
        <button
          className="non-styled-item underline-button default-text mb-2"
          onClick={() => handleClearCart()}
        >
          Clear cart
        </button>
      </div>
      {cartData.length > 0 ? (
        cartData.map((item, index) => (
          <div key={index} className="row d-flex custom-border-bottom mb-2">
            <div className="col-5 col-sm-6 col-md-5">
              <p className="small mb-1">{item.name}</p>
            </div>
            <div className="col-4 col-sm-4 col-md-3 overflow-hidden">
              <p className="small mb-1 text-truncate">{item.shop}</p>
            </div>
            <div className="col-2 col-sm-1 col-md-3 p-0 justify-content-end">
              <p className="small mb-1">{item.price} €</p>
            </div>
            <div className="col-1 col-sm-1 col-md-1 p-0">
              <button
                className="non-styled-item underline-button default-text p-0"
                onClick={() => handleRemoveFromCart(item)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      {cartData.length > 0 ? (
        <div className="row d-flex">
          <div className="col-3 col-sm-3 col-md-3">
            <p className="small me-2 mb-1">Total:</p>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <p className="small me-2 mb-1">{totalPrice} €</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ShoppingCart;
