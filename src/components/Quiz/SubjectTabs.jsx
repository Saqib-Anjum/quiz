import React from 'react';

export default function SubjectTabs({ subjects, activeIndex, onSelect }) {
  return (
    <div className="mb-6 border-b">
      <nav className="-mb-px flex space-x-4">
        {subjects.map((subj, i) => {
          const active = i === activeIndex;
          return (
            <button
              key={subj.name}
              onClick={() => onSelect(i)}
              className={`
                pb-2 px-4 text-sm font-medium transition
                ${active
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'}
              `}
            >
              {subj.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
