import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const handleCheckout = () => {
    alert("Order placed successfully!");
    setCart([]); // Clear the cart after checkout
  };

  return (
    
    <div className="cart-container">
      <h2 className="cart-title">Your Cart 🛍️</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
