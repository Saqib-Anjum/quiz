import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function QuizDashboard() {
  // ← replace sampleQuestions with remote data
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch questions from your API on mount
  useEffect(() => {
    axios.get('http://localhost:4000/api/questions')
      .then(res => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load questions.");
        setLoading(false);
      });
  }, []);

  // Short‑circuit while loading or on error
  if (loading) return <p className="p-6">Loading questions…</p>;
  if (error)   return <p className="p-6 text-red-600">{error}</p>;

  const current = questions[currentIndex];

  const handleSelect = option => setSelected(option);

  const handleSubmit = () => {
    if (!selected) return;
    if (selected === current.correctAnswer) {
      setScore(prev => prev + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(idx => idx + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-2xl font-bold text-indigo-600">QuizMaster</div>
        <nav className="mt-10">
          <a href="#" className="flex items-center py-2 px-8 text-gray-700 bg-indigo-50 border-l-4 border-indigo-500">Dashboard</a>
          <a href="#" className="flex items-center py-2 px-8 mt-4 text-gray-600 hover:bg-indigo-50 hover:border-l-4 hover:border-indigo-500">Questions</a>
          <a href="#" className="flex items-center py-2 px-8 mt-4 text-gray-600 hover:bg-indigo-50 hover:border-l-4 hover:border-indigo-500">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {!showResult ? (
          <div className="bg-white rounded-2xl shadow p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-800">
              Question {currentIndex + 1} of {questions.length}
            </h2>
            <p className="mt-4 text-gray-700">{current.text}</p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              {current.choices.map(choice => (
                <button
                  key={choice}
                  onClick={() => handleSelect(choice)}
                  className={`w-full text-left py-3 px-4 border rounded-lg transition duration-200
                    ${selected === choice
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-300 hover:border-indigo-400'}`}
                >
                  {choice}
                </button>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              {currentIndex < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow p-8 max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Quiz Completed!</h2>
            <p className="mt-4 text-indigo-600 text-xl">Your Score: {score} / {questions.length}</p>
          </div>
        )}
      </main>
    </div>
  );
}
