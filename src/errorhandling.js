import React, { useState } from 'react';
import axios from 'axios'; 

const ErrorHandlingEx = () => {
  const [joke, setJoke] = useState(''); 
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false); 

  const fetchJoke = async () => {
    setLoading(true); 
    setError(''); 

    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${response.data.setup} - ${response.data.punchline}`); 
    } catch (err) {
      setError('Failed to fetch joke. Please try again later.'); 
      console.error('Error fetching joke:', err); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <h1>Error Joke</h1>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? 'Loading...' : 'Get Joke'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message if it exists */}
      {joke && <p>{joke}</p>} {/* Display the joke if available */}
    </div>
  );
};

export default ErrorHandlingEx;
