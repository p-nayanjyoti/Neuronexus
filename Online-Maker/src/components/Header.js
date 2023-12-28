import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="text-white">
            Online Quiz Maker
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/create" className="hover:underline text-white">
                Create Quiz
              </Link>
            </li>
            <li>
              <Link to="/take" className=" text-bold hover:underline text-white ">
                Take Quiz
              </Link>
            </li>
            {/* Add more navigation links or account-related links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
