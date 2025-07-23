import React, { useState, useEffect } from 'react';
import { 
  CheckCircleIcon, 
  PlayIcon, 
  LockClosedIcon,
  ChartBarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/24/solid';
import { courseTopics } from '../data/courseData';
import { getTopicProgressById, updateOverallProgress } from '../utils/progressUtils';

const RoadmapPage = ({ setCurrentPage }) => {
  const [topicsWithProgress, setTopicsWithProgress] = useState([]);
  const [overallStats, setOverallStats] = useState({
    completed: 0,
    total: courseTopics.length,
    percentage: 0
  });

  useEffect(() => {
    // Load progress for all topics
    const topicsData = courseTopics.map(topic => {
      const progress = getTopicProgressById(topic.id);
      return {
        ...topic,
        progress
      };
    });

    setTopicsWithProgress(topicsData);

    // Calculate overall stats
    const completed = topicsData.filter(t => t.progress.topicCompleted).length;
    const percentage = Math.round((completed / courseTopics.length) * 100);
    
    setOverallStats({
      completed,
      total: courseTopics.length,
      percentage
    });

    // Update localStorage
    updateOverallProgress(courseTopics.length);
  }, []);

  const getTopicStatus = (topic, index) => {
    if (topic.progress.topicCompleted) {
      return 'completed';
    }
    
    // First topic is always available
    if (index === 0) {
      return 'available';
    }
    
    // Check if previous topic is completed
    const previousTopic = topicsWithProgress[index - 1];
    if (previousTopic && previousTopic.progress.topicCompleted) {
      return 'available';
    }
    
    return 'locked';
  };

  const getStatusColors = (status) => {
    switch (status) {
      case 'completed':
        return {
          bg: 'bg-secondary-100 border-secondary-300',
          text: 'text-secondary-800',
          button: 'bg-secondary-500 hover:bg-secondary-600 text-white'
        };
      case 'available':
        return {
          bg: 'bg-primary-50 border-primary-200',
          text: 'text-primary-800',
          button: 'bg-primary-500 hover:bg-primary-600 text-white'
        };
      case 'locked':
        return {
          bg: 'bg-gray-50 border-gray-200',
          text: 'text-gray-500',
          button: 'bg-gray-300 text-gray-500 cursor-not-allowed'
        };
      default:
        return {
          bg: 'bg-gray-50 border-gray-200',
          text: 'text-gray-500',
          button: 'bg-gray-300 text-gray-500'
        };
    }
  };

  const handleTopicClick = (topic, status) => {
    if (status === 'locked') return;
    
    // Map topic IDs to page names
    const topicPageMap = {
      1: 'variables',
      2: 'operadores',
      3: 'control',
      4: 'arrays',
      5: 'metodos'
    };
    
    const pageName = topicPageMap[topic.id];
    if (pageName) {
      setCurrentPage(pageName);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Roadmap de Aprendizaje Java
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sigue tu progreso a través de los conceptos fundamentales de Java. 
            Cada tema incluye explicaciones, ejercicios y quizzes para asegurar tu comprensión.
          </p>
          
          {/* Overall Progress */}
          <div className="bg-white rounded-xl p-6 shadow-card max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">Progreso General</span>
              <div className="flex items-center space-x-2">
                <TrophyIcon className="h-6 w-6 text-accent-500" />
                <span className="text-2xl font-bold text-primary-600">{overallStats.percentage}%</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${overallStats.percentage}%` }}
              />
            </div>
            
            <div className="flex justify-between text-sm text-gray-600">
              <span>{overallStats.completed} completados</span>
              <span>{overallStats.total} total</span>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-secondary-300 rounded-full hidden md:block" />
          
          <div className="space-y-8">
            {topicsWithProgress.map((topic, index) => {
              const status = getTopicStatus(topic, index);
              const colors = getStatusColors(status);
              const exerciseCount = topic.exercises?.length || 0;
              const quizCount = topic.quiz?.questions?.length || 0;
              
              return (
                <div key={topic.id} className="relative">
                  {/* Topic Node */}
                  <div className="flex items-start">
                    {/* Status Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                        status === 'completed' ? 'bg-secondary-500' : 
                        status === 'available' ? 'bg-primary-500' : 'bg-gray-400'
                      }`}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      
                      {/* Progress indicator */}
                      {status === 'completed' && (
                        <div className="absolute -top-2 -right-2">
                          <CheckCircleIconSolid className="h-6 w-6 text-secondary-500 bg-white rounded-full" />
                        </div>
                      )}
                    </div>

                    {/* Topic Content */}
                    <div className="ml-6 flex-1">
                      <div className={`rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-lg ${colors.bg}`}>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                              {topic.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {topic.explanation.split('\n')[0]}
                            </p>
                            
                            {/* Stats */}
                            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                              <div className="flex items-center space-x-1">
                                <ChartBarIcon className="h-4 w-4" />
                                <span>{exerciseCount} ejercicio{exerciseCount !== 1 ? 's' : ''}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <CheckCircleIcon className="h-4 w-4" />
                                <span>{quizCount} pregunta{quizCount !== 1 ? 's' : ''} de quiz</span>
                              </div>
                            </div>

                            {/* Progress indicators for this topic */}
                            {status !== 'locked' && (
                              <div className="flex items-center space-x-4 text-xs">
                                {topic.progress.quiz && (
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-2 h-2 rounded-full ${
                                      topic.progress.quiz.passed ? 'bg-secondary-500' : 'bg-accent-500'
                                    }`} />
                                    <span className="text-gray-600">
                                      Quiz: {topic.progress.quiz.percentage || 0}%
                                    </span>
                                  </div>
                                )}
                                
                                {Object.keys(topic.progress.exercises).length > 0 && (
                                  <div className="flex items-center space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                                    <span className="text-gray-600">
                                      Ejercicios: {Object.values(topic.progress.exercises).filter(e => e.completed).length}/{exerciseCount}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Action Button */}
                          <div className="mt-4 lg:mt-0 lg:ml-6">
                            <button
                              onClick={() => handleTopicClick(topic, status)}
                              disabled={status === 'locked'}
                              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-1 ${colors.button} ${
                                status === 'locked' ? 'cursor-not-allowed' : 'hover:shadow-lg'
                              }`}
                            >
                              {status === 'completed' ? 'Revisar' : 
                               status === 'available' ? 'Comenzar' : 'Bloqueado'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Completion Message */}
        {overallStats.percentage === 100 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-secondary-100 to-accent-100 rounded-xl p-8 shadow-lg">
              <TrophyIcon className="h-16 w-16 text-accent-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Felicitaciones! 🎉
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Has completado todos los temas del curso de Java. ¡Es hora de seguir practicando!
              </p>
              <button
                onClick={() => setCurrentPage('glosario')}
                className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-secondary-600 hover:to-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explorar Glosario
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapPage;