import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function ChartPanel() {
  useEffect(() => {
    const ctx = document.getElementById('appointmentsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets: [
          {
            label: 'DATA ONE',
            data: [20,50,60,45,55,80,65,70],
            fill: true,
            borderColor: '#F59E0B',
            backgroundColor: 'rgba(245,158,11,0.2)'
          },
          {
            label: 'DATA TWO',
            data: [30,40,70,50,75,90,80,60],
            fill: true,
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59,130,246,0.2)'
          }
        ]
      },
      options: {
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true, max: 90, ticks: { stepSize: 10 } } }
      }
    });
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h4 className="font-semibold text-gray-700 mb-4">Appointments History</h4>
      <canvas id="appointmentsChart" />
    </div>
  );
}
