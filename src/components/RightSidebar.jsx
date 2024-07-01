import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-72 p-3 bg-white mt-14">
      <div className="flex flex-row top-0 mt-4 ml-28 absolute gap-2">
      <div className="w-8 h-8 rounded-full bg-gray-500"></div>
      <h1 className="mt-0.5">Elise Beverley</h1>
      </div>
      <div className="mb-6 text-center rounded-lg shadow-lg h-[22rem]">
        <div className="bg-pink-200 p-4 rounded-t-lg h-24">
          <svg width="90" height="90" className="absolute ml-[4.3rem] mt-5" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="103" height="103" rx="18" fill="#F2446E" stroke="white" stroke-width="4" />
          </svg>

        </div>
        <h2 className="text-lg font-bold mt-7">Delta Hub Studio</h2>
        <div className="flex justify-between mt-4">
          <div className="text-center px-3 py-1 bg-gray-100 rounded-lg ml-2">
            <p className="text-gray-600">In Progress</p>
            <p className="text-xl font-bold">20</p>
          </div>
          <div className="text-center px-3 py-1 bg-gray-100 rounded-lg mr-2">
            <p className="text-gray-600">Completed</p>
            <p className="text-xl font-bold">120</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg m-2">
          <p className="text-gray-600">Member</p>
          <div className="flex justify-center mt-1">
            {Array(5).fill(0).map((_, idx) => (
              <div key={idx} className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white -ml-2 first:ml-0"></div>
            ))}
            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center border-2 border-white -ml-2 first:ml-0">8+</div>
          </div>
        </div>
      </div>

      <div className="mt-6 shadow-lg rounded-lg p-2 h-[15rem]">
        <h3 className="text-lg font-bold mb-2">Voice Sync</h3>
        <ul>
          {['UX Research', 'Onboarding', 'Usability Testing', 'Website Research'].map((task, idx) => (
            <li key={idx} className="flex justify-between items-center p-2 px-2 bg-gray-100 mb-2 rounded-lg">
              <div className="flex items-center">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.01" width="23" height="23" fill="black" />
                  <path d="M12 14C14.2091 14 16 12.3469 16 10.3077V5.69231C16 3.6531 14.2091 2 12 2C9.79086 2 8 3.6531 8 5.69231V10.3077C8 12.3469 9.79086 14 12 14Z" fill="#8791A3" />
                  <path d="M19 10C19 9.44772 18.5523 9 18 9C17.4477 9 17 9.44772 17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10C7 9.44772 6.55228 9 6 9C5.44772 9 5 9.44772 5 10C5.00407 13.4766 7.55907 16.4233 11 16.92V19H8.89C8.39847 19 8 19.3985 8 19.89V20.11C8 20.6015 8.39847 21 8.89 21H15.11C15.6015 21 16 20.6015 16 20.11V19.89C16 19.3985 15.6015 19 15.11 19H13V16.92C16.4409 16.4233 18.9959 13.4766 19 10Z" fill="#8791A3" />
                </svg>

                <span>{task}</span>
              </div>
              <div className="flex items-center">
                {Array(3).fill(0).map((_, idx) => (
                  <div key={idx} className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white -ml-2 first:ml-0"></div>
                ))}
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center border-2 border-white -ml-2 first:ml-0">4+</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
