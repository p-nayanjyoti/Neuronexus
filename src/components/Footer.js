import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 YourShop. All rights reserved.</p>
          <div className="mt-2">
            <a href="/terms" className="text-gray-300 hover:text-white mx-2">Terms of Service</a>
            <a href="/privacy" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
            <a href="/contact" className="text-gray-300 hover:text-white mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
