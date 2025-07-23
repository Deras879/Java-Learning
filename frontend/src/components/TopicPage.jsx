import React, { useState, useEffect } from 'react';
import { 
  BookOpenIcon, 
  CodeBracketIcon, 
  BeakerIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
  ArrowLeftIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/24/solid';
import { 
  getTopicProgressById, 
  updateExerciseProgress, 
  updateQuizProgress, 
  updateTopicProgress 
} from '../utils/progressUtils';

const TopicPage = ({ topic, setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('explanation');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseCode, setExerciseCode] = useState('');
  const [exerciseOutput, setExerciseOutput] = useState('');
  const [exerciseAttempts, setExerciseAttempts] = useState(1);
  const [showHints, setShowHints] = useState(false);
  
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Progress state
  const [topicProgress, setTopicProgress] = useState({
    topicCompleted: false,
    exercises: {},
    quiz: null
  });

  useEffect(() => {
    if (topic) {
      const progress = getTopicProgressById(topic.id);
      setTopicProgress(progress);
      
      // Initialize exercise code
      if (topic.exercises && topic.exercises.length > 0) {
        setExerciseCode(topic.exercises[0].initialCode);
      }
    }
  }, [topic]);

  const tabs = [
    { id: 'explanation', name: 'Explicación', icon: BookOpenIcon },
    { id: 'example', name: 'Ejemplo', icon: CodeBracketIcon },
    { id: 'exercises', name: 'Ejercicios', icon: BeakerIcon },
    { id: 'quiz', name: 'Quiz', icon: CheckCircleIcon }
  ];

  // Exercise Methods
  const runExercise = () => {
    const currentEx = topic.exercises[currentExercise];
    const isCorrect = exerciseCode.trim() === currentEx.solution.trim();
    
    if (isCorrect) {
      setExerciseOutput('¡Excelente! Has resuelto el ejercicio correctamente. 🎉');
      updateExerciseProgress(topic.id, currentEx.id, true, exerciseAttempts);
      
      // Update local progress
      setTopicProgress(prev => ({
        ...prev,
        exercises: {
          ...prev.exercises,
          [currentEx.id]: { completed: true, attempts: exerciseAttempts }
        }
      }));
    } else {
      setExerciseOutput('El código no es correcto. ¡Sigue intentando! 💪\nRevisa las pistas si necesitas ayuda.');
      updateExerciseProgress(topic.id, currentEx.id, false, exerciseAttempts);
      setExerciseAttempts(prev => prev + 1);
    }
  };

  const nextExercise = () => {
    if (currentExercise < topic.exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setExerciseCode(topic.exercises[currentExercise + 1].initialCode);
      setExerciseOutput('');
      setExerciseAttempts(1);
      setShowHints(false);
    }
  };

  const prevExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(prev => prev - 1);
      setExerciseCode(topic.exercises[currentExercise - 1].initialCode);
      setExerciseOutput('');
      setExerciseAttempts(1);
      setShowHints(false);
    }
  };

  // Quiz Methods
  const submitQuizAnswer = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuestion] = {
      questionId: currentQuestion,
      selectedAnswer,
      isCorrect: selectedAnswer === topic.quiz.questions[currentQuestion].correctAnswer
    };
    setQuizAnswers(newAnswers);

    if (currentQuestion < topic.quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      // Calculate final score
      const correctAnswers = newAnswers.filter(a => a.isCorrect).length;
      const finalScore = correctAnswers;
      setQuizScore(finalScore);
      
      // Update progress
      updateQuizProgress(topic.id, finalScore, topic.quiz.questions.length, newAnswers);
      
      setShowQuizResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizAnswers([]);
    setSelectedAnswer(null);
    setShowQuizResults(false);
    setQuizScore(0);
  };

  // Check if topic should be marked as completed
  useEffect(() => {
    if (!topic) return;
    
    const allExercisesCompleted = topic.exercises.every(ex => 
      topicProgress.exercises[ex.id]?.completed
    );
    const quizPassed = topicProgress.quiz?.passed;
    
    if (allExercisesCompleted && quizPassed && !topicProgress.topicCompleted) {
      updateTopicProgress(topic.id, true);
      setTopicProgress(prev => ({ ...prev, topicCompleted: true }));
    }
  }, [topicProgress, topic]);

  if (!topic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tema no encontrado</h2>
          <button
            onClick={() => setCurrentPage('roadmap')}
            className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200"
          >
            Volver al Roadmap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('roadmap')}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Volver al Roadmap
              </button>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">{topic.title}</h1>
            </div>
            
            {topicProgress.topicCompleted && (
              <div className="flex items-center space-x-2 text-secondary-600">
                <CheckCircleIconSolid className="h-6 w-6" />
                <span className="font-semibold">Completado</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-card mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="mr-2 h-5 w-5" />
                    {tab.name}
                    
                    {/* Progress indicators */}
                    {tab.id === 'exercises' && topic.exercises && (
                      <span className="ml-2 bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        {Object.values(topicProgress.exercises).filter(e => e?.completed).length}/{topic.exercises.length}
                      </span>
                    )}
                    
                    {tab.id === 'quiz' && topicProgress.quiz && (
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        topicProgress.quiz.passed 
                          ? 'bg-secondary-100 text-secondary-800'
                          : 'bg-accent-100 text-accent-800'
                      }`}>
                        {topicProgress.quiz.percentage}%
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Explanation Tab */}
            {activeTab === 'explanation' && (
              <div className="prose max-w-none">
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 mb-6">
                  <div className="flex items-start space-x-4">
                    <LightBulbIcon className="h-8 w-8 text-accent-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        ¿Qué aprenderás en este tema?
                      </h3>
                      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {topic.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Example Tab */}
            {activeTab === 'example' && (
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <CodeBracketIcon className="mr-2 h-5 w-5" />
                    Ejemplo de Código
                  </h3>
                  <p className="text-gray-600">
                    Estudia este ejemplo para entender cómo aplicar los conceptos en la práctica.
                  </p>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-white overflow-x-auto">
                    <code>{topic.codeExample}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Exercises Tab */}
            {activeTab === 'exercises' && topic.exercises && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Ejercicio {currentExercise + 1} de {topic.exercises.length}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevExercise}
                      disabled={currentExercise === 0}
                      className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={nextExercise}
                      disabled={currentExercise === topic.exercises.length - 1}
                      className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      {topic.exercises[currentExercise].title}
                    </h4>
                    <p className="text-blue-800">
                      {topic.exercises[currentExercise].description}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tu código:
                    </label>
                    <textarea
                      value={exerciseCode}
                      onChange={(e) => setExerciseCode(e.target.value)}
                      className="w-full h-64 p-4 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                      placeholder="Escribe tu código aquí..."
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={runExercise}
                      className="flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200"
                    >
                      <PlayIcon className="mr-2 h-5 w-5" />
                      Ejecutar Código
                    </button>
                    
                    <button
                      onClick={() => setShowHints(!showHints)}
                      className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200"
                    >
                      {showHints ? 'Ocultar' : 'Mostrar'} Pistas
                    </button>
                  </div>

                  {/* Hints */}
                  {showHints && topic.exercises[currentExercise].hints && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <h4 className="font-semibold text-yellow-900 mb-2">💡 Pistas:</h4>
                      <ul className="list-disc list-inside text-yellow-800 space-y-1">
                        {topic.exercises[currentExercise].hints.map((hint, index) => (
                          <li key={index}>{hint}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Output */}
                  {exerciseOutput && (
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Resultado:</h4>
                      <pre className="text-gray-800 whitespace-pre-wrap">{exerciseOutput}</pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quiz Tab */}
            {activeTab === 'quiz' && topic.quiz && (
              <div>
                {!showQuizResults ? (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Pregunta {currentQuestion + 1} de {topic.quiz.questions.length}
                      </h3>
                      <div className="text-sm text-gray-500">
                        Progreso: {Math.round(((currentQuestion + 1) / topic.quiz.questions.length) * 100)}%
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <h4 className="font-semibold text-blue-900 mb-4">
                          {topic.quiz.questions[currentQuestion].question}
                        </h4>
                        
                        <div className="space-y-3">
                          {topic.quiz.questions[currentQuestion].options.map((option, index) => (
                            <label
                              key={index}
                              className="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:bg-blue-50 transition-colors"
                            >
                              <input
                                type="radio"
                                name="quiz-option"
                                value={index}
                                checked={selectedAnswer === index}
                                onChange={() => setSelectedAnswer(index)}
                                className="mr-3 text-primary-600"
                              />
                              <span className="text-gray-900">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={submitQuizAnswer}
                        disabled={selectedAnswer === null}
                        className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        {currentQuestion === topic.quiz.questions.length - 1 ? 'Finalizar Quiz' : 'Siguiente Pregunta'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="mb-6">
                      {quizScore >= Math.ceil(topic.quiz.questions.length * 0.7) ? (
                        <CheckCircleIconSolid className="h-16 w-16 text-secondary-500 mx-auto mb-4" />
                      ) : (
                        <XCircleIcon className="h-16 w-16 text-red-500 mx-auto mb-4" />
                      )}
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {quizScore >= Math.ceil(topic.quiz.questions.length * 0.7) 
                          ? '¡Excelente trabajo!' 
                          : '¡Sigue intentando!'
                        }
                      </h3>
                      
                      <p className="text-xl text-gray-600 mb-4">
                        Obtuviste {quizScore} de {topic.quiz.questions.length} respuestas correctas
                      </p>
                      
                      <div className="text-lg font-semibold">
                        <span className={quizScore >= Math.ceil(topic.quiz.questions.length * 0.7) ? 'text-secondary-600' : 'text-accent-600'}>
                          {Math.round((quizScore / topic.quiz.questions.length) * 100)}%
                        </span>
                      </div>
                    </div>

                    {/* Quiz Review */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                      <h4 className="font-semibold text-gray-900 mb-4">Revisión de Respuestas:</h4>
                      <div className="space-y-4">
                        {topic.quiz.questions.map((question, qIndex) => {
                          const userAnswer = quizAnswers[qIndex];
                          return (
                            <div key={qIndex} className="border-b border-gray-200 pb-4">
                              <p className="font-medium text-gray-900 mb-2">
                                {qIndex + 1}. {question.question}
                              </p>
                              <div className="text-sm">
                                <p className={`mb-1 ${userAnswer.isCorrect ? 'text-secondary-600' : 'text-red-600'}`}>
                                  Tu respuesta: {question.options[userAnswer.selectedAnswer]} 
                                  {userAnswer.isCorrect ? ' ✓' : ' ✗'}
                                </p>
                                {!userAnswer.isCorrect && (
                                  <p className="text-secondary-600 mb-1">
                                    Respuesta correcta: {question.options[question.correctAnswer]} ✓
                                  </p>
                                )}
                                <p className="text-gray-600 text-xs italic">
                                  {question.explanation}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      onClick={resetQuiz}
                      className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200"
                    >
                      Intentar de Nuevo
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;