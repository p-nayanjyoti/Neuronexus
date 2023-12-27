import React from 'react'

const Success = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-4">Payment Successful!</h2>
      <p className="text-gray-600">Thank you for your purchase.</p>
      {/* Additional content or redirection logic */}
    </div>
  </div>
  )
}

export default Success
