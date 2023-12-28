import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CreateQuiz from './components/CreateQuiz';
import Quiz from './components/Quiz';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [questions, setQuestions] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={<CreateQuiz questions={questions} setQuestions={setQuestions} />}
          />
          <Route path="/take" element={<Quiz questions={questions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
