import React from "react";

const Sidebar = () => {
  return (
    <div className="w-40 bg-violet-700 text-white flex flex-col p-4">
      <nav className="flex flex-col space-y-4">
        <a href="#" className="hover:bg-violet-800 p-6 rounded text-center">
          <i class="fa-solid fa-location-arrow text-6xl"></i>
        </a>
        <a href="#" className="hover:bg-violet-800 p-4 rounded text-center">
          <i class="fa-solid fa-user-plus text-l mt-10"></i>
        </a>
        <a href="#" className="hover:bg-violet-800 p-3 rounded text-center">
          <i class="fa-solid fa-graduation-cap text-l"></i>
        </a>
        <a href="#" className="hover:bg-violet-800 p-3 rounded text-center">
          <i class="fa-solid fa-chart-bar text-l"></i>
        </a>
        <a href="#" className="hover:bg-violet-800 p-3 rounded text-center">
          <i class="fa-solid fa-calendar-days text-l"></i>
        </a>
        <a href="#" className="hover:bg-violet-800 p-3 rounded text-center">
          <i class="fa-solid fa-gear text-l"></i>
        </a>
        <a href="#" className=" p-4 rounded text-center pt-20">
          <i class="fa-solid fa-arrow-right-from-bracket text-l mt-20"></i>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
