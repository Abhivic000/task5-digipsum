import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
