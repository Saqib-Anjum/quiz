import React from 'react';
import {
  FaTachometerAlt,
  FaUserMd,
  FaUserInjured,
  FaList,
  FaCalendarAlt,
  FaCog,
  FaFileAlt,
  FaSignOutAlt
} from 'react-icons/fa';

const links = [
  { icon: FaTachometerAlt, label: 'Dashboard', active: true },
  { icon: FaUserMd,       label: 'Doctor' },
  { icon: FaUserInjured,  label: 'Patients' },
  { icon: FaList,         label: 'To do list' },
  { icon: FaCalendarAlt,  label: 'Calendar' },
  { icon: FaCog,          label: 'Settings' },
  { icon: FaFileAlt,      label: 'Report' },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-blue-900 text-white flex flex-col justify-between p-6">
      <div>
        <div className="text-2xl font-bold mb-8">DASH</div>
        <nav className="space-y-2">
          {links.map(({ icon: Icon, label, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition
                ${active ? 'bg-blue-700' : 'hover:bg-blue-700/50'}`}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
      <a
        href="#"
        className="flex items-center space-x-3 text-sm hover:text-red-300 transition"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </a>
    </aside>
  );
}
