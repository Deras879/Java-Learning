import React from 'react';
import { 
  HomeIcon, 
  MapIcon, 
  BookOpenIcon, 
  CodeBracketIcon,
  BeakerIcon,
  ChartBarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ currentPage, setCurrentPage, isSidebarOpen, setIsSidebarOpen }) => {
  const navigationItems = [
    {
      id: 'inicio',
      name: 'Inicio',
      icon: HomeIcon,
      description: 'Página principal'
    },
    {
      id: 'roadmap',
      name: 'Roadmap',
      icon: MapIcon,
      description: 'Ruta de aprendizaje'
    },
    {
      id: 'glosario',
      name: 'Glosario',
      icon: BookOpenIcon,
      description: 'Términos y conceptos'
    }
  ];

  const courseTopics = [
    {
      id: 'variables',
      name: 'Variables y Tipos',
      icon: CodeBracketIcon
    },
    {
      id: 'operadores',
      name: 'Operadores',
      icon: BeakerIcon
    },
    {
      id: 'control',
      name: 'Estructuras de Control',
      icon: ChartBarIcon
    },
    {
      id: 'arrays',
      name: 'Arrays',
      icon: CodeBracketIcon
    },
    {
      id: 'metodos',
      name: 'Métodos',
      icon: BeakerIcon
    }
  ];

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-primary-800 to-primary-900 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 shadow-xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary-700">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="Java Learning" className="h-8 w-auto" />
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-1 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          {/* Main Navigation */}
          <nav className="px-3 space-y-1">
            <div className="text-xs font-semibold text-primary-300 uppercase tracking-wider px-3 py-2">
              Navegación
            </div>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-primary-100 hover:bg-primary-700 hover:text-white'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="flex-1 text-left">{item.name}</span>
                  {isActive && (
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Course Topics */}
          <nav className="mt-8 px-3 space-y-1">
            <div className="text-xs font-semibold text-primary-300 uppercase tracking-wider px-3 py-2">
              Temas del Curso
            </div>
            {courseTopics.map((topic, index) => {
              const Icon = topic.icon;
              const isActive = currentPage === topic.id;
              
              return (
                <button
                  key={topic.id}
                  onClick={() => handleNavigation(topic.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
                    isActive
                      ? 'bg-secondary-600 text-white shadow-lg'
                      : 'text-primary-100 hover:bg-primary-700 hover:text-white'
                  }`}
                >
                  <div className="mr-3 flex-shrink-0">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive ? 'bg-white text-secondary-600' : 'bg-primary-600 text-white'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  <span className="flex-1 text-left">{topic.name}</span>
                  <Icon className="ml-2 h-4 w-4 flex-shrink-0 opacity-60" />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-primary-700">
          <div className="text-xs text-primary-300 text-center">
            Java Learning Platform v1.0
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
