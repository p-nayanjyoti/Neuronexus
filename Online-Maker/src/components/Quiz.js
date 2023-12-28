import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
        id: 1,
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Jupiter', 'Mars', 'Venus', 'Mercury'],
        correctAnswer: 'Mars',
      },
      {
        id: 3,
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale',
      },
      {
        id: 4,
        question: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        correctAnswer: 'Leonardo da Vinci',
      },
      {
        id: 5,
        question: 'What year did World War I begin?',
        options: ['1910', '1914', '1918', '1920'],
        correctAnswer: '1914',
      },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
  };

  return (
    <div className="container mx-auto p-4">
      {currentQuestion < questions.length ? (
        <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`py-2 px-4 border rounded-md cursor-pointer ${
                  selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition duration-300"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Quiz Completed!</h2>
          <p className="text-lg font-semibold mb-2">
            Your Score: <span className="text-green-600">{score}</span> / {questions.length}
          </p>
          <button
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition duration-300"
            onClick={handleResetQuiz}
          >
            Reset Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
