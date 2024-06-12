import React from "react";

const Header = () => {
  return (
    <header className="w-600 max-w-900 bg-white text-black pr-10 pb-4 p-4 flex justify-between items-center shadow border-b rounded-t-lg mt-8">
      <div className="text-xl font-bold">Students</div>
      <div className="flex items-center space-x-5">
        <button className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg">
          + Add a student
        </button>
        <div className="flex justify-center items-center w-10 h-10 bg-gray-200 rounded-full border-2 border-gray-400">
          <i className="fa-solid fa-user text-gray-600"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
