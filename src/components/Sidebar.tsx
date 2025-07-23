import React from 'react';
import { 
  BookOpen, 
  Download, 
  FileText, 
  CheckCircle, 
  Circle,
  Home,
  TreePine
} from 'lucide-react';
import { lessons } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string, lessonId?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const { isLessonCompleted, getCompletionPercentage } = useProgress();

  const menuItems = [
    {
      id: 'home',
      title: 'Inicio',
      icon: Home,
      view: 'home'
    },
    {
      id: 'tree',
      title: 'Árbol de Aprendizaje',
      icon: TreePine,
      view: 'tree'
    },
    {
      id: 'installation',
      title: 'Instalación de Java',
      icon: Download,
      view: 'installation'
    },
    {
      id: 'glossary',
      title: 'Glosario',
      icon: FileText,
      view: 'glossary'
    }
  ];

  const levelColors = {
    principiante: 'text-green-600',
    intermedio: 'text-yellow-600',
    avanzado: 'text-red-600'
  };

  return (
    <div className="bg-white shadow-lg h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Java Academy</h1>
            <p className="text-sm text-gray-600">Aprende Java desde cero</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progreso general</span>
            <span>{getCompletionPercentage()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getCompletionPercentage()}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Menu */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Navegación
          </h3>
          <div className="space-y-1">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.view)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === item.view
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lessons */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Lecciones
          </h3>
          <div className="space-y-2">
            {lessons.map(lesson => {
              const isCompleted = isLessonCompleted(lesson.id);
              return (
                <button
                  key={lesson.id}
                  onClick={() => onNavigate('lesson', lesson.id)}
                  className={`w-full flex items-start space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === 'lesson' ? 'bg-gray-50' : 'hover:bg-gray-50'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {lesson.title}
                    </p>
                    <p className={`text-xs ${levelColors[lesson.level]} font-medium`}>
                      {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-500 text-center">
          © 2024 Java Academy
          <br />
          Educación de calidad para todos
        </p>
      </div>
    </div>
  );
};