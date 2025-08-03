import { useState } from 'react';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';

export default function AddQuestionsForm() {
  const [questions, setQuestions] = useState([
    { text: '', choices: ['', '', '', ''], correct: '' }
  ]);
  const [status, setStatus] = useState(null);

  // Update a field in one question block
  function updateQuestion(qIdx, field, value) {
    setQuestions(q =>
      q.map((qq, i) =>
        i === qIdx
          ? { ...qq, [field]: value }
          : qq
      )
    );
  }

  // Update one of the four choices
  function updateChoice(qIdx, cIdx, value) {
    setQuestions(q =>
      q.map((qq, i) =>
        i === qIdx
          ? {
              ...qq,
              choices: qq.choices.map((c, j) =>
                j === cIdx ? value : c
              )
            }
          : qq
      )
    );
  }

  // Append a fresh question block
  function addQuestionBlock() {
    setQuestions(q => [
      ...q,
      { text: '', choices: ['', '', '', ''], correct: '' }
    ]);
  }

  // Submit all questions to the server
  function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    // Basic validation
    for (let i = 0; i < questions.length; i++) {
      const { text, choices, correct } = questions[i];
      if (!text || choices.some(c => !c) || !choices.includes(correct)) {
        setStatus(`Please complete all fields in question #${i + 1}.`);
        return;
      }
    }

    axios.post('http://localhost:4000/api/questions/batch', { questions })
      .then(() => {
        setStatus('All questions saved successfully!');
        setQuestions([{ text: '', choices: ['', '', '', ''], correct: '' }]);
      })
      .catch(err => {
        console.error(err);
        setStatus('Error saving questions.');
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-indigo-600 text-white py-4 shadow">
        <h1 className="text-2xl text-center font-semibold">Create Your Quiz</h1>
      </header>

      <form onSubmit={handleSubmit} className="flex-1 overflow-auto p-6 space-y-8">
        {questions.map((q, qi) => (
          <div
            key={qi}
            className="bg-white p-6 rounded-lg shadow-lg space-y-5"
          >
            <h2 className="text-lg font-medium text-indigo-700">
              Question {qi + 1}
            </h2>

            <textarea
              value={q.text}
              onChange={e => updateQuestion(qi, 'text', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition"
              rows={3}
              placeholder="Enter question text…"
            />

            <div className="space-y-4">
              {q.choices.map((c, ci) => (
                <div key={ci} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name={`correct-${qi}`}
                    value={c}
                    checked={q.correct === c}
                    onChange={() => updateQuestion(qi, 'correct', c)}
                    className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                  />
                  <input
                    type="text"
                    value={c}
                    onChange={e => updateChoice(qi, ci, e.target.value)}
                    placeholder={`Choice ${ci + 1}`}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addQuestionBlock}
          className="flex items-center justify-center space-x-2 w-full py-3 border-2 border-dashed border-indigo-400 rounded-lg text-indigo-600 hover:bg-indigo-50 transition"
        >
          <FiPlus className="w-5 h-5" />
          <span>Add Another Question</span>
        </button>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Save All Questions
        </button>

        {status && (
          <p
            className={`mt-4 text-center text-sm ${
              status.startsWith('Error') ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
