import React from 'react';
import TaskCard from './TaskCard';
import TaskList from './TaskList';
import RightSidebar from './RightSidebar';

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-white flex">
      <div className="flex-1 mr-6">
        <header className="mb-6">
          <input 
            type="text" 
            placeholder="Search for anything..." 
            className="w-1/2 p-2 rounded-lg bg-white shadow-md"
          />
        </header>
        <div className="flex space-x-4 mb-6">
          <div className="w-1/3 bg-white p-4 rounded-lg shadow-md text-center">
            <button className="bg-gray-200 p-4 w-full h-full rounded">Add New Task</button>
          </div>
          <TaskCard 
            title="Create 20 Alternative design for Clients" 
            date="Jun 13, 2019 - Jun 20, 2022" 
            progress="10 of 20" 
            progressValue={50}
          />
          <TaskCard 
            title="Revision all Webpages" 
            date="Jun 13, 2019 - Jun 20, 2022" 
            progress="10 of 20" 
            progressValue={50}
          />
        </div>
        <TaskList />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
