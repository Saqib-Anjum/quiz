import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

export default function QuizGrid({ quizzes }) {
  if (!quizzes.length) {
    return <p className="text-gray-500">No quizzes available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {quizzes.map(q => (
        <div
          key={q.id}
          className="bg-white rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 transition p-6 flex flex-col"
        >
          <div className="flex items-center mb-4">
            <FaQuestionCircle className="text-blue-500 text-2xl mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">{q.title}</h3>
          </div>
          <p className="text-gray-600 flex-1">{q.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">{q.questions} Qs</span>
            <button
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-lg text-sm transition"
            >
              Start
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
