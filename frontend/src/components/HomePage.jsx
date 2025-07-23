import React from 'react';
import { 
  PlayIcon, 
  BookOpenIcon, 
  ChartBarIcon,
  LightBulbIcon,
  CodeBracketIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { getOverallProgress, getTopicProgress } from '../utils/progressUtils';

const HomePage = ({ setCurrentPage }) => {
  const overallProgress = getOverallProgress();
  const topicProgress = getTopicProgress();

  const features = [
    {
      icon: CodeBracketIcon,
      title: 'Aprende Programando',
      description: 'Ejercicios interactivos y ejemplos prácticos para dominar Java paso a paso.'
    },
    {
      icon: ChartBarIcon,
      title: 'Sigue tu Progreso',
      description: 'Visualiza tu avance con un roadmap interactivo y estadísticas detalladas.'
    },
    {
      icon: LightBulbIcon,
      title: 'Conceptos Claros',
      description: 'Explicaciones sencillas y ejemplos del mundo real para cada concepto.'
    },
    {
      icon: BookOpenIcon,
      title: 'Glosario Completo',
      description: 'Consulta términos y conceptos importantes cuando los necesites.'
    }
  ];

  const quickStats = [
    {
      label: 'Temas Completados',
      value: overallProgress.completedTopics,
      total: overallProgress.totalTopics,
      color: 'text-primary-600'
    },
    {
      label: 'Progreso Total',
      value: `${overallProgress.percentage}%`,
      color: 'text-secondary-600'
    },
    {
      label: 'Ejercicios Resueltos',
      value: Object.values(topicProgress).filter(t => t.completed).length,
      color: 'text-accent-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Aprende{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    Java
                  </span>{' '}
                  desde Cero
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Domina los fundamentos de la programación en Java con ejercicios interactivos, 
                  explicaciones claras y un roadmap personalizado que se adapta a tu ritmo de aprendizaje.
                </p>
              </div>

              {/* Progress Overview */}
              {overallProgress.percentage > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tu Progreso</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Progreso General</span>
                      <span className="text-sm font-bold text-gray-900">{overallProgress.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-700 ease-out animate-progress-fill"
                        style={{ width: `${overallProgress.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-500">
                      {overallProgress.completedTopics} de {overallProgress.totalTopics} temas completados
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('roadmap')}
                  className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <RocketLaunchIcon className="mr-2 h-5 w-5" />
                  {overallProgress.percentage > 0 ? 'Continuar Aprendizaje' : 'Comenzar Ahora'}
                </button>
                <button
                  onClick={() => setCurrentPage('glosario')}
                  className="flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                >
                  <BookOpenIcon className="mr-2 h-5 w-5" />
                  Explorar Glosario
                </button>
              </div>
            </div>

            {/* Right content - Illustration */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/learning-illustration.svg" 
                  alt="Ilustración de aprendizaje Java" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-bounce-gentle" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-400 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200">
              <div className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                  {stat.total && <span className="text-gray-400">/{stat.total}</span>}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué Elegir Nuestra Plataforma?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñada específicamente para hacer que aprender Java sea accesible, divertido y efectivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl mb-4 group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-200">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para Comenzar tu Viaje en Java?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya están dominando Java con nuestro enfoque paso a paso.
          </p>
          <button
            onClick={() => setCurrentPage('roadmap')}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <PlayIcon className="mr-2 h-5 w-5" />
            Comenzar mi Aprendizaje
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;