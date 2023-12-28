// TakeQuiz.js

import React, { useState } from 'react';

const TakeQuiz = ({ quizData }) => {
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));

  const handleAnswerChange = (index, event) => {
    const { value } = event.target;
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[index] = value;
    setUserAnswers(updatedUserAnswers);
  };

  const handleSubmit = () => {
    // Evaluate userAnswers against quizData to calculate score
    // Display user's score
    console.log('User Answers:', userAnswers);
  };

  return (
    <div>
      <h1>Take Quiz</h1>
      {quizData.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          {/* Display options and capture user answers */}
          {/* Implement logic to capture user answers */}
          <input type="text" onChange={(e) => handleAnswerChange(index, e)} />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Answers</button>
    </div>
  );
};

export default TakeQuiz;
