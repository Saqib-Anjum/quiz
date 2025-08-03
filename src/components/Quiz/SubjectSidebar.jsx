import { useState } from 'react';

export default function SubjectSidebar({
  subjects, activeIndex, onSelect, onAddSubject
}) {
  const [newName, setNewName] = useState('');

  const submit = e => {
    e.preventDefault();
    if (!newName.trim()) return;
    onAddSubject(newName.trim());
    setNewName('');
  };

  return (
    <aside className="w-64 bg-white border-l p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-4">Subjects</h3>
      <ul className="flex-1 space-y-2 overflow-auto mb-4">
        {subjects.map((subj, i) => (
          <li key={i}>
            <button
              onClick={() => onSelect(i)}
              className={`w-full text-left px-4 py-2 rounded-lg transition
                ${i === activeIndex
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-blue-50'
                }`}
            >
              {subj.name}
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={submit} className="flex space-x-2">
        <input
          type="text"
          placeholder="New subject"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg focus:ring"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add
        </button>
      </form>
    </aside>
  );
}
