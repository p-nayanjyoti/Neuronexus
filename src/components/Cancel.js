import React from 'react'

const Cancel = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-4">Payment Unsuccessful</h2>
      <p className="text-red-500">Oops! Something went wrong with your payment.</p>
      <p className="text-gray-600">Please try again .No money is deducted</p>
     
    </div>
  </div>
  )
}

export default Cancel
