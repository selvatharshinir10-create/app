import React from 'react';
import FoodItem from './FoodItem';
import './home.css'

const foods = [
  { id: 1, name: 'Burger', price: 5, img: '/burger.png'},
  { id: 2, name: 'Pizza', price: 8, img: '/pizza.png' },
  { id: 3, name: 'Sushi', price: 12, img: '/roll.png' },
];

const Home = ({ addToCart }) => {
  return (
    <>
    <h1>THIS IS MY FOOD APP</h1>
    
    <div id='a' style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} addToCart={addToCart} />
      ))}
    </div>
    </>
  );
};

export default Home;
