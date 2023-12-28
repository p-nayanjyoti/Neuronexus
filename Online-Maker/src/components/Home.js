import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import CreateQuiz from './CreateQuiz';

function Home() {
  return (
    
      <div
        className="min-h-screen flex  items-center bg-gray-200"
        style={{
          backgroundImage: `url(https://t4.ftcdn.net/jpg/04/39/13/37/360_F_439133763_FrLdhZsd5aGC23r9ATARuKJBr8ifZjIe.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="m-20 border-4 p-10 border-sky-500 ">
          <h1 className=" text-5xl text-bold text-white">Welcome to the Quiz App</h1>
          
        </div>

        
      </div>
    
  );
}

export default Home;
