import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent]   = useState(0);
  const [score, setScore]       = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  // Fetch questions on mount
  useEffect(() => {
    axios.get('http://localhost:4000/api/questions')
      .then(res => {

        const qs = res.data.map(q => {
      // find which choice matches the correctAnswer
      const idx = q.choices.findIndex(c => c === q.correctAnswer);
      return {
        question: q.text,
        options: q.choices,
        answer: idx,                // store the index, not the string
      };
    });
        setQuestions(qs);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load questions.');
        setLoading(false);
      });
  }, []);

  // Countdown timer
  useEffect(() => {
    if (loading || showScore) return;
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, loading, showScore]);

  const handleOptionClick = idx => {
    setSelected(idx);
  };

  const handleNext = () => {
    // Only check answer if they've actually selected one
    // if (selected !== null && selected === questions[current].answer) {
    //   setScore(s => s + 1);
    // }
    if (selected === questions[current].answer) {
  setScore(s => s + 1);
}

    setSelected(null);
    setTimeLeft(60);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-400 p-4">
        <p className="text-white text-xl">Loading questions…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-500 p-4">
        <p className="text-white text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-xl">
              Your Score: <span className="font-semibold">{score} / {questions.length}</span>
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Question {current + 1} of {questions.length}
              </h2>
              <span className="text-lg font-medium">Time Left: {timeLeft}s</span>
            </div>

            <h3 className="text-2xl font-bold mb-4">
              {questions[current].question}
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={`
                    p-4 rounded-xl shadow-md hover:scale-105 transform transition
                    ${selected === idx ? 'bg-purple-200' : 'bg-gray-100'}
                  `}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selected === null}
              className="
                w-full py-3 bg-purple-600 text-white font-semibold rounded-xl shadow
                hover:bg-purple-700 disabled:opacity-50 transition
              "
            >
              {current === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
