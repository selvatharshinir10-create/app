import React, { useState } from 'react';
import axios from 'axios';

export const FetchJoke = () => {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";

    axios.get(url)
      .then(res => {
        setJoke(`${res.data.setup} - ${res.data.punchline}`);
      })
      .catch(err => {
        console.error("Error fetching joke:", err);
        setJoke("Failed to fetch a joke. Try again!");
      });
  };

  return (
    <div>
      <button onClick={getJoke}>Click to see Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
};
