import React from 'react';
import { CheckCircle, Circle, Lock, Star, Zap, Trophy } from 'lucide-react';
import { lessons } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

interface LearningTreeProps {
  onNavigate: (view: string, lessonId?: string) => void;
}

export const LearningTree: React.FC<LearningTreeProps> = ({ onNavigate }) => {
  const { isLessonCompleted, getCompletionPercentage } = useProgress();

  const levelConfig = {
    principiante: {
      title: 'Principiante',
      subtitle: 'Fundamentos de Java',
      color: 'green',
      icon: Star,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800'
    },
    intermedio: {
      title: 'Intermedio',
      subtitle: 'Programación Orientada a Objetos',
      color: 'yellow',
      icon: Zap,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-800'
    },
    avanzado: {
      title: 'Avanzado',
      subtitle: 'Conceptos Avanzados',
      color: 'red',
      icon: Trophy,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800'
    }
  };

  const groupedLessons = {
    principiante: lessons.filter(l => l.level === 'principiante'),
    intermedio: lessons.filter(l => l.level === 'intermedio'),
    avanzado: lessons.filter(l => l.level === 'avanzado')
  };

  const getLessonStatus = (lesson: any, index: number, levelLessons: any[]) => {
    const isCompleted = isLessonCompleted(lesson.id);
    const isFirst = index === 0;
    const prevCompleted = index === 0 || isLessonCompleted(levelLessons[index - 1].id);
    
    if (isCompleted) return 'completed';
    if (isFirst || prevCompleted) return 'available';
    return 'locked';
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Árbol de Aprendizaje de Java
        </h1>
        <p className="text-gray-600 mb-6">
          Sigue el camino estructurado para dominar Java desde lo básico hasta conceptos avanzados
        </p>
        
        {/* Overall Progress */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <h3 className="font-semibold text-gray-800 mb-2">Progreso General</h3>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getCompletionPercentage()}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">{getCompletionPercentage()}% completado</p>
        </div>
      </div>

      {/* Learning Levels */}
      <div className="space-y-12">
        {Object.entries(groupedLessons).map(([level, levelLessons]) => {
          const config = levelConfig[level as keyof typeof levelConfig];
          const Icon = config.icon;
          const completedInLevel = levelLessons.filter(l => isLessonCompleted(l.id)).length;
          const progressPercentage = (completedInLevel / levelLessons.length) * 100;

          return (
            <div key={level} className="relative">
              {/* Level Header */}
              <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-lg p-6 mb-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`${config.bgColor} p-3 rounded-full border-2 ${config.borderColor}`}>
                      <Icon className={`w-8 h-8 ${config.textColor}`} />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${config.textColor}`}>
                        {config.title}
                      </h2>
                      <p className={`${config.textColor} opacity-80`}>
                        {config.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${config.textColor}`}>
                      {completedInLevel}/{levelLessons.length} lecciones
                    </p>
                    <div className="w-24 bg-white bg-opacity-50 rounded-full h-2 mt-1">
                      <div 
                        className={`bg-${config.color}-600 h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lessons Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {levelLessons.map((lesson, index) => {
                  const status = getLessonStatus(lesson, index, levelLessons);
                  
                  return (
                    <div
                      key={lesson.id}
                      className={`relative bg-white rounded-lg shadow-md p-6 transition-all duration-200 ${
                        status === 'available' 
                          ? 'hover:shadow-lg cursor-pointer border-2 border-transparent hover:border-blue-200' 
                          : status === 'completed'
                          ? 'ring-2 ring-green-200'
                          : 'opacity-60'
                      }`}
                      onClick={() => status !== 'locked' && onNavigate('lesson', lesson.id)}
                    >
                      {/* Status Icon */}
                      <div className="absolute -top-2 -right-2">
                        {status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
                        ) : status === 'locked' ? (
                          <Lock className="w-6 h-6 text-gray-400 bg-white rounded-full p-1" />
                        ) : (
                          <Circle className="w-6 h-6 text-blue-500 bg-white rounded-full" />
                        )}
                      </div>

                      {/* Lesson Number */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm font-medium px-2 py-1 rounded ${
                          status === 'completed' ? 'bg-green-100 text-green-800' :
                          status === 'available' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          Lección {index + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {lesson.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {lesson.description}
                      </p>

                      {/* Progress Indicator */}
                      {status === 'completed' && (
                        <div className="flex items-center text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          <span>Completada</span>
                        </div>
                      )}
                      {status === 'available' && (
                        <div className="flex items-center text-blue-600 text-sm">
                          <Circle className="w-4 h-4 mr-1" />
                          <span>Disponible</span>
                        </div>
                      )}
                      {status === 'locked' && (
                        <div className="flex items-center text-gray-400 text-sm">
                          <Lock className="w-4 h-4 mr-1" />
                          <span>Bloqueada</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Connection Line */}
              {level !== 'avanzado' && (
                <div className="flex justify-center mt-8 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Final Message */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          ¡Completa tu Journey en Java!
        </h3>
        <p className="text-gray-600">
          Al terminar todas las lecciones, habrás adquirido las habilidades necesarias 
          para desarrollar aplicaciones profesionales en Java.
        </p>
      </div>
    </div>
  );
};