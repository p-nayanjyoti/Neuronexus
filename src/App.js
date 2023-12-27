import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import your other components/pages here
import Home from './components/Home';

import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './contexts/CartContext';
import Cancel from './components/Cancel';
import Success from './components/Success';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
         
        </Routes>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
