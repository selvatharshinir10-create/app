import React, { useState } from 'react';

function ValidationForm() {
  // Define state to store form input values and errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
   
    // Validate the form
    const formErrors = validate();
   
    if (Object.keys(formErrors).length === 0) {
      // If no errors, submit the form
      alert(`Name: ${name}, Email: ${email}`);
      // Optionally reset form fields
      setName('');
      setEmail('');
    } else {
      // If there are errors, update the state to display them
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <h1>Validation Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        {/* Email input field */}
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ValidationForm;
