import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Stats from './Stats';
// /import ChartPanel from './ChartPanel';
import TasksPanel from './TasksPanel';
import PatientsTable from './PatientsTable';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col p-4">
        <Topbar />

        <Stats />

        <div className="grid grid-cols-2 gap-4 mb-4">
{/*           <ChartPanel />
 */}          
    {/* <TasksPanel /> */}
        </div>
        <Outlet />

        {/* <PatientsTable /> */}
      </div>
    </div>
  );
}
