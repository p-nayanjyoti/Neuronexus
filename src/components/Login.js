import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
   
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Handle successful login, e.g., set authentication tokens, redirect, etc.
        setLoggedIn(true);
        
      } else if (response.status === 401) {
        setErrorMessage('Unauthorized access. Please check your credentials.');
      } else {
        console.error('Login failed:', response.statusText);
        // Handle other login failures, show error message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors, etc.
    }
  };

  return (
    <div>
        {loggedIn ? (
        <Home />
      ) : (
        <div className="container mx-auto mt-8">
     <div className="container mx-auto mt-8 flex justify-center">
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
</div>

      {errorMessage && (
        <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md mb-4">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border p-2 rounded-md w-full"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </button>
        <p className="mt-4">
          If you don't have an account,{' '}
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </form>
      
    </div>
      )}
    </div>



    
    
  );
};

export default Login;
