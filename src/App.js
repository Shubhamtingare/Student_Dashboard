import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StudentTable from "./components/StudentTable";
import "./App.css";

const App = () => {
  return (
    <div className="flex h-screen w-full max-w-full overflow-hidden bg-violet-700 p-5">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-gray-100 overflow-hidden rounded-b-lg ">
          <div className="container bg-white shadow rounded-lg overflow-auto ">
            <StudentTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
