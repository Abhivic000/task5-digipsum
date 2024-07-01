import React from 'react';

const TaskCard = ({ title, date, progress, progressValue }) => {
  return (
    <div className="bg-purple-600 text-white p-6 rounded-lg w-1/3">
      <h3 className="text-lg font-bold mb-2 grid grid-cols-1">{title}</h3>
      <p className="bg-purple-500 text-purple-200 p-1 rounded mb-4">{date}</p>
      <div className="mb-2">
        <div className="h-2 w-full bg-purple-500 rounded">
          <div 
            className="h-full bg-white rounded" 
            style={{ width: `${progressValue}%` }}
          ></div>
        </div>
        <p className="text-right mt-1">{progress}</p>
      </div>
      <div className="flex relative">
        {Array(5).fill(0).map((_, idx) => (
          <div key={idx} className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white -ml-2 first:ml-0"></div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
