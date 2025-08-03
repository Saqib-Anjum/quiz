import React from 'react';
import { FaCode, FaServer, FaCogs } from 'react-icons/fa';

const icons = [FaCode, FaServer, FaCogs];

export default function CategorySidebar({ categories, activeIndex, onSelect }) {
  return (
    <aside className="w-56 bg-white border-r shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat, i) => {
            const Icon = icons[i] || FaCode;
            const active = i === activeIndex;
            return (
              <li key={cat.name}>
                <button
                  onClick={() => onSelect(i)}
                  className={`
                    flex items-center w-full px-4 py-2 rounded-lg transition
                    ${active
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-600 hover:bg-blue-50'}
                  `}
                >
                  <Icon className="mr-3" />
                  {cat.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
