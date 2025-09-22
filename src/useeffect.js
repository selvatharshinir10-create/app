import React, { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));
    return () => {
      
    };
  }, []); 

  return (
    <div>
      <p>{data ? JSON.stringify(data) : 'Loading...'}</p>
    </div>
  );
}
export default Example
