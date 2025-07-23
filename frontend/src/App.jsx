import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { FiMenu } from 'react-icons/fi';

function App() {
  const [currentPage, setCurrentPage] = useState('Primeros Pasos');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar
        setCurrentPage={setCurrentPage}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-1">
        <button
          className="md:hidden p-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FiMenu size={24} />
        </button>
        <MainContent currentPage={currentPage} />
      </div>
    </div>
  );
}

export default App;
