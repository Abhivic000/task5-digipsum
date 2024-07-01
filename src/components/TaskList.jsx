import React from 'react';

const tasks = [
  { id: 1, label: 'WR', title: 'Website Research', due: 'Due in 3 days', status: 'Active', statusColor: 'green', people: 2 },
  { id: 2, label: 'OI', title: 'Onboarding Illustration', due: 'Due in 7 days', status: 'Active', statusColor: 'green', people: 2 },
  { id: 3, label: 'UR', title: 'UX Research', due: 'Due in 3 days', status: 'Paused', statusColor: 'yellow', people: 2 },
  { id: 4, label: 'UT', title: 'Usability Testing', due: 'Due Tomorrow', status: 'Active', statusColor: 'green', people: 2 },
];

const TaskList = () => {
  return (
    <div>
      <div className="mb-3">
        <h2 className="text-xl font-bold mb-4">All Task</h2>
        <div className="flex space-x-3">
          <button className="p-2 bg-pink-500 text-white rounded">Active Task</button>
          <button className="p-2">Complete Task</button>
          <button className="p-2">Archive</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {tasks.map(task => (
          <div key={task.id} className="flex justify-between items-center p-2 border-b last:border-0">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${task.statusColor}-200`}>
                <span className="text-${task.statusColor}-600 font-bold">{task.label}</span>
              </div>
              <div>
                <p className="font-bold">{task.title}</p>
                <p className="text-sm text-gray-500">{task.due}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`text-${task.statusColor}-600 font-bold`}>{task.status}</span>
              <div className="flex relative">
                {Array(task.people).fill(0).map((_, idx) => (
                  <div key={idx} className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white -ml-2 first:ml-0"></div>
                ))}
                {task.people > 1 && <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center border-white border-2 -ml-2 first:ml-0">+{task.people}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
