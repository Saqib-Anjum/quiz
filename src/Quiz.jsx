import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome", "Madrid"],
    answer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    answer: 1,
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "80°C", "100°C", "120°C"],
    answer: 2,
  },
  {
    question: "Which language is primarily used for Android app development?",
    options: ["Swift", "Java", "Kotlin", "C#"],
    answer: 2,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: 2,
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    answer: 1,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Zinc"],
    answer: 1,
  },
  {
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["England", "Germany", "France", "Spain"],
    answer: 2,
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    answer: 0,
  },
  {
    question: "In which year did World War II end?",
    options: ["1945", "1939", "1918", "1963"],
    answer: 0,
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Dollar", "Euro"],
    answer: 0,
  },
  {
    question: "Who discovered penicillin?",
    options: ["Marie Curie", "Alexander Fleming", "Isaac Newton", "Albert Einstein"],
    answer: 1,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: 2,
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2,
  },
  {
    question: "Which organ purifies blood in the human body?",
    options: ["Liver", "Heart", "Kidney", "Lungs"],
    answer: 2,
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
    answer: 1,
  },
  {
    question: "Which year did the Titanic sink?",
    options: ["1912", "1905", "1898", "1920"],
    answer: 0,
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    answer: 1,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext(); 
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionClick = index => {
    setSelected(index);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(prev => prev + 1);
    }
    setSelected(null);
    setTimeLeft(60);
    const nextQ = current + 1;
    if (nextQ < questions.length) {
      setCurrent(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-xl">Your Score: <span className="font-semibold">{score} / {questions.length}</span></p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Question {current + 1} of {questions.length}</h2>
              <span className="text-lg font-medium">Time Left: {timeLeft}s</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{questions[current].question}</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={`p-4 rounded-xl shadow-md hover:scale-105 transform transition ${selected === idx ? 'bg-purple-200' : 'bg-gray-100'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 disabled:opacity-50"
            >
              {current === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
