import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const initial = [
  { text: 'Meeting with elizs', date: '04/Mar/19', done: false },
  { text: 'Meeting with elizs', date: '04/Mar/19', done: true  },
  { text: 'Meeting with elizs', date: '04/Mar/19', done: false },
];

export default function TasksPanel() {
  const [tasks, setTasks] = useState(initial);

  const toggle = i => {
    setTasks(ts =>
      ts.map((t, idx) => idx === i ? { ...t, done: !t.done } : t)
    );
  };

  const add = () => {
    const txt = prompt('New task name');
    if (txt) setTasks(ts => [...ts, { text: txt, date: 'Today', done: false }]);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow flex flex-col">
      <h4 className="font-semibold text-gray-700 mb-4">Task</h4>
      <ul className="flex-1 overflow-auto">
        {tasks.map((t, i) => (
          <li
            key={i}
            className={`flex items-center justify-between py-2 border-b ${
              t.done ? 'text-gray-400 line-through' : ''
            }`}
          >
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(i)}
              />
              <span>{t.text}</span>
            </label>
            <small className="text-xs">{t.date}</small>
          </li>
        ))}
      </ul>
      <button
        onClick={add}
        className="mt-4 flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800"
      >
        <FaPlus /> <span>Add Task</span>
      </button>
    </div>
  );
}
