import { Scale } from 'chart.js';
import React from 'react';
import './FoodItem.css'

const FoodItem = ({ food, addToCart }) => {
  return (
    <div id='ani'style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center',}}>
      <img src={food.img} alt={food.name} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
      <h3>{food.name}</h3>
      <p>${food.price}</p>
      <button onClick={() => addToCart(food)} style={{ padding: '8px 12px', cursor: 'pointer' }}>
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default FoodItem;
