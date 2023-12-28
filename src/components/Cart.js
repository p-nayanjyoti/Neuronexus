import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";



const Cart = () => {
  const { cartItems, updateCart } = useCart();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price , 0).toFixed(2);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission or integrate with a payment gateway
    console.log('Payment Information:', paymentInfo);
    // Implement logic to process payment (e.g., through a payment gateway)
  };

  // Function to remove an item from the cart by ID
  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };
  
  const makePayment = async()=>{
    const stripe = await loadStripe("pk_test_51OQ243SBCDmchXvQCNc15snXjqXqjpU5BnlSXYlMg81W1qeCAJZoUGxis65AmAIyIxsp3J0l2xmgeXTMquyGQChe000lV4eAJP");
    console.log(cartItems);

    const body = {
        products:cartItems,
    }
    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:4000/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
       
    });

    console.log("ko")
    const session = await response.json();

    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
}
const test =()=>{
  console.log(cartItems)
}


  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
       <p className="text-gray-600 text-center mt-8">Your cart is currently empty.</p>

      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded-md p-4 mb-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: ${item.price}</p>
              <button
                onClick={() => removeItem(item.id)} // Invoke removeItem with the item's ID
                className="bg-red-500 text-white px-3 py-1 rounded-md mt-2"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-xl font-semibold mt-4">
            Total Price: ${getTotalPrice()}
          </div>
          <button
            onClick={() => 
             makePayment()
          
            } type='button'
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Proceed to Payment
          </button>

          {showPaymentForm && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <form onSubmit={handlePaymentSubmit}>
                <div className="mb-4">
                  <label className="block mb-1">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md w-full"
                    placeholder="Enter card number"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block mb-1">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={paymentInfo.expiry}
                      onChange={handleInputChange}
                      className="border p-2 rounded-md w-full"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={paymentInfo.cvv}
                      onChange={handleInputChange}
                      className="border p-2 rounded-md w-full"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Pay Now
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
