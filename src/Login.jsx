import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
<Nav.Link as={Link} to="/login">Login</Nav.Link>


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', { email, password });

      if (response.data === "Login successful!") {
        alert('Login Successful!');
        navigate('/'); // Redirect to Home Page
      } else {
        alert('Invalid credentials!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login Failed!');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
