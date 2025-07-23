import React from 'react';

const Sidebar = ({ setCurrentPage, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 h-screen bg-gray-800 text-white transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
    >
      <div className="p-4 text-2xl font-bold">Aprende Java</div>
      <nav className="mt-10">
        <a
          href="#"
          onClick={() => {
            setCurrentPage('Primeros Pasos');
            setIsSidebarOpen(false);
          }}
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Primeros Pasos
        </a>
        <a
          href="#"
          onClick={() => {
            setCurrentPage('Árbol de Aprendizaje');
            setIsSidebarOpen(false);
          }}
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Árbol de Aprendizaje
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
