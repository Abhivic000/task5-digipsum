import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Messages from './pages/Messages';
import Project from './pages/Project';
import Schedule from './pages/Schedule';
import Settings from './pages/Settings';
import Dashboard from './components/Dashboard';
import Insight from './pages/Insight';
import Help from './pages/Help';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-white">
        <Sidebar />
        <div className="">
          <Routes>
            <Route path="/dashboards" element={<Dashboard />} />
            <Route path="/project" element={<Project />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Insights" element={<Insight />} />
            <Route path="/Helps" element={<Help />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
