import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-gray-700 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-white">Gada Electronics</Link>
                <nav className="space-x-4 flex">
                    <Link to="/" className="hover:text-gray-300 text-2xl">Home</Link>
                    <Link to="/cart" className="hover:text-gray-300 text-2xl">Cart</Link>
                    <Link to="/login" className="hover:text-gray-300"><div className="text-3xl"><FaRegUserCircle /></div></Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
