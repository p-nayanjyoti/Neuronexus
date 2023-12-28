import React, { useState } from 'react';

const QuizEditor = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleAddQuestion = () => {
    const newQuestion = {
      question: currentQuestion.question || '',
      option1: currentQuestion.option1 || '',
      option2: currentQuestion.option2 || '',
      answer: currentQuestion.answer || '',
    };
  
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion({});
    setIsEditing(false);
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion({ ...currentQuestion, [name]: value });
  };

  return (
    <div className="container mx-auto max-w-lg">
      <h2 className="text-2xl font-bold mb-4">Quiz Editor</h2>
      {isEditing ? (
        <div>
          <input
            className="w-full border rounded-md p-2 mb-2"
            type="text"
            placeholder="Enter question"
            name="question"
            value={currentQuestion.question || ''}
            onChange={handleInputChange}
          />
          {/* Add inputs for options */}
          <input
            className="w-full border rounded-md p-2 mb-2"
            type="text"
            placeholder="Option 1"
            name="option1"
            value={currentQuestion.option1 || ''}
            onChange={handleInputChange}
          />
          {/* Repeat for other options */}
          <input
            className="w-full border rounded-md p-2 mb-2"
            type="text"
            placeholder="Option 2"
            name="option2"
            value={currentQuestion.option2 || ''}
            onChange={handleInputChange}
          />
          {/* Input for correct answer */}
          <input
            className="w-full border rounded-md p-2 mb-4"
            type="text"
            placeholder="Correct answer"
            name="answer"
            value={currentQuestion.answer || ''}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAddQuestion}
          >
            Add Question
          </button>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setIsEditing(true)}
        >
          Add New Question
        </button>
      )}
      <hr className="my-6" />
      {/* Display added questions */}
      {questions.map((q, index) => (
        <div key={index} className="mb-4 border rounded p-4">
          <h3 className="text-xl font-semibold mb-2">{q.question}</h3>
          <ul>
            <li>{q.option1}</li>
            {/* Display other options */}
            <li>{q.option2}</li>
            {/* Add other options */}
          </ul>
          <p className="mt-2">Answer: {q.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizEditor;
