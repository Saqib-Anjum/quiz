import React from 'react';
import {
  FaCalendarCheck,
  FaEye,
  FaWallet,
  FaUser
} from 'react-icons/fa';

const cards = [
  { icon: FaCalendarCheck,   label: 'Appointments', value: '243',   pct: '+34% Higher' },
  { icon: FaEye,             label: 'Unique View',  value: '450',   pct: '+22% Higher' },
  { icon: FaWallet,          label: 'Total Income', value: '€450',  pct: '+22% Higher' },
  { icon: FaUser,            label: 'New User',     value: '176',   pct: '+4% Higher'  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {cards.map(({ icon: Icon, label, value, pct }) => (
        <div
          key={label}
          className="relative bg-white rounded-2xl p-6 shadow"
        >
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-gray-500">{label}</div>
          <div className="text-green-500 text-sm mt-1">{pct}</div>
          <Icon className="absolute top-4 right-4 text-gray-200 text-3xl" />
        </div>
      ))}
    </div>
  );
}
