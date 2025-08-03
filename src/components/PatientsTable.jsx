import React from 'react';

const rows = [
  {
    name:   'Joseph Mullins',
    age:     24,
    address: '1647 Primrose Lane Spring Green',
    phone:   '608-588-9764',
    email:   'joshep24@gmail.com',
    disease: 'Back pain also known as "dorsopathy"'
  },
  // … more rows
];

export default function PatientsTable() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow overflow-auto">
      <h4 className="font-semibold text-gray-700 mb-4">Patient</h4>
      <table className="w-full text-left text-sm">
        <thead className="border-b">
          <tr>
            {['Name','Age','Address','Phone','Email','Disease'].map(h => (
              <th key={h} className="py-2">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="py-2">{r.name}</td>
              <td>{r.age}</td>
              <td>{r.address}</td>
              <td>{r.phone}</td>
              <td>{r.email}</td>
              <td>{r.disease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
