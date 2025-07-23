import React from 'react';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import { getOverallProgress } from '../utils/progressUtils';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const progress = getOverallProgress();

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu button and title */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">Plataforma de Aprendizaje Java</h1>
            </div>
          </div>

          {/* Center - Progress bar (hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Progreso General
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
            <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
              {progress.percentage}%
            </span>
          </div>

          {/* Right side - User info and stats */}
          <div className="flex items-center space-x-4">
            {/* Progress stats (visible on mobile) */}
            <div className="lg:hidden flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">
                  {progress.percentage}%
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-primary-600">{progress.completedTopics}</div>
                <div className="text-gray-500 text-xs">Completados</div>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-center">
                <div className="font-bold text-gray-700">{progress.totalTopics}</div>
                <div className="text-gray-500 text-xs">Total</div>
              </div>
            </div>

            {/* User avatar */}
            <div className="flex items-center space-x-2">
              <UserCircleIcon className="h-8 w-8 text-gray-600" />
              <span className="hidden sm:block text-sm font-medium text-gray-700">Estudiante</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile progress bar */}
      <div className="lg:hidden px-4 pb-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-gray-600">Progreso:</span>
          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-1.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <span className="text-xs font-bold text-gray-900">
            {progress.completedTopics}/{progress.totalTopics}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;