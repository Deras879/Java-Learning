import React, { useState } from 'react';
import { 
  CheckCircle, 
  Play, 
  BookOpen, 
  Code, 
  FileText, 
  Award,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { getLessonById } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

interface LessonViewProps {
  lessonId: string;
  onNavigate: (view: string, lessonId?: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({ lessonId, onNavigate }) => {
  const lesson = getLessonById(lessonId);
  const { 
    markLessonCompleted, 
    markExerciseCompleted, 
    saveQuizScore,
    isLessonCompleted, 
    isExerciseCompleted,
    getQuizScore 
  } = useProgress();

  const [activeTab, setActiveTab] = useState<'theory' | 'code' | 'exercises' | 'quiz'>('theory');
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [exerciseStatus, setExerciseStatus] = useState<Record<string, boolean>>({});

  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Lección no encontrada</p>
      </div>
    );
  }

  const tabs = [
    { id: 'theory', label: 'Teoría', icon: BookOpen },
    { id: 'code', label: 'Código', icon: Code },
    { id: 'exercises', label: 'Ejercicios', icon: FileText },
    { id: 'quiz', label: 'Quiz', icon: Award }
  ];

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuizQuestion] = answerIndex;
    setQuizAnswers(newAnswers);

    if (currentQuizQuestion < lesson.content.quiz.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      // Calculate score
      const correctAnswers = lesson.content.quiz.reduce((acc, question, index) => {
        return acc + (newAnswers[index] === question.correctAnswer ? 1 : 0);
      }, 0);
      const score = (correctAnswers / lesson.content.quiz.length) * 100;
      
      saveQuizScore(lessonId, score);
      setShowQuizResults(true);
      
      if (score >= 70) {
        markLessonCompleted(lessonId);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuizQuestion(0);
    setQuizAnswers([]);
    setShowQuizResults(false);
  };

  const handleExerciseComplete = (exerciseId: string) => {
    setExerciseStatus(prev => ({ ...prev, [exerciseId]: true }));
    markExerciseCompleted(exerciseId);
  };

  const levelColors = {
    principiante: 'bg-green-100 text-green-800',
    intermedio: 'bg-yellow-100 text-yellow-800',
    avanzado: 'bg-red-100 text-red-800'
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${levelColors[lesson.level]}`}>
                {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
              </span>
              {isLessonCompleted(lessonId) && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Completada</span>
                </div>
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{lesson.title}</h1>
            <p className="text-gray-600">{lesson.description}</p>
          </div>
          <button
            onClick={() => onNavigate('tree')}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
          >
            Volver al árbol
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6">
          {/* Theory Tab */}
          {activeTab === 'theory' && (
            <div className="prose max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: lesson.content.explanation.replace(/\n/g, '<br>').replace(/#{1,3}\s/g, '<h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                }}
              />
            </div>
          )}

          {/* Code Tab */}
          {activeTab === 'code' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Ejemplo de Código
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{lesson.content.codeExample}</code>
                </pre>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  💡 <strong>Tip:</strong> Intenta escribir este código en tu IDE y ejecútalo para ver cómo funciona.
                </p>
              </div>
            </div>
          )}

          {/* Exercises Tab */}
          {activeTab === 'exercises' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Ejercicios Prácticos
              </h3>
              <div className="space-y-4">
                {lesson.content.exercises.map((exercise, index) => {
                  const isCompleted = isExerciseCompleted(exercise.id) || exerciseStatus[exercise.id];
                  return (
                    <div key={exercise.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 mb-2">
                            Ejercicio {index + 1}: {exercise.title}
                          </h4>
                          <p className="text-gray-600 mb-3">{exercise.description}</p>
                          {exercise.expectedOutput && (
                            <div className="bg-gray-50 p-3 rounded text-sm">
                              <strong>Salida esperada:</strong> {exercise.expectedOutput}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => handleExerciseComplete(exercise.id)}
                          className={`ml-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                            isCompleted
                              ? 'bg-green-100 text-green-800 cursor-default'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                          disabled={isCompleted}
                        >
                          {isCompleted ? (
                            <>
                              <CheckCircle className="w-4 h-4 inline mr-1" />
                              Completado
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 inline mr-1" />
                              Marcar como hecho
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quiz Tab */}
          {activeTab === 'quiz' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Quiz de Evaluación
              </h3>
              
              {!showQuizResults ? (
                <div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Pregunta {currentQuizQuestion + 1} de {lesson.content.quiz.length}</span>
                      <span>{Math.round(((currentQuizQuestion + 1) / lesson.content.quiz.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuizQuestion + 1) / lesson.content.quiz.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">
                      {lesson.content.quiz[currentQuizQuestion].question}
                    </h4>
                    <div className="space-y-2">
                      {lesson.content.quiz[currentQuizQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswer(index)}
                          className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                        >
                          <span className="font-medium text-blue-600 mr-3">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <div className="text-center">
                      <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        ¡Quiz Completado!
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Tu puntuación: {getQuizScore(lessonId)}%
                      </p>
                      {getQuizScore(lessonId) >= 70 ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-green-800 font-medium">
                            ¡Excelente! Has aprobado la lección. 
                            {!isLessonCompleted(lessonId) && ' La lección ha sido marcada como completada.'}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <p className="text-yellow-800 font-medium">
                            Te recomendamos revisar el material y intentar nuevamente. 
                            Necesitas 70% o más para aprobar.
                          </p>
                        </div>
                      )}
                      <button
                        onClick={resetQuiz}
                        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Intentar de nuevo
                      </button>
                    </div>
                  </div>

                  {/* Results Review */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Revisión de Respuestas:</h4>
                    {lesson.content.quiz.map((question, index) => {
                      const userAnswer = quizAnswers[index];
                      const isCorrect = userAnswer === question.correctAnswer;
                      return (
                        <div key={index} className={`border rounded-lg p-4 ${
                          isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                        }`}>
                          <p className="font-medium text-gray-800 mb-2">
                            {index + 1}. {question.question}
                          </p>
                          <p className={`text-sm mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            Tu respuesta: {question.options[userAnswer]} 
                            {isCorrect ? ' ✓' : ' ✗'}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-700 mb-2">
                              Respuesta correcta: {question.options[question.correctAnswer]}
                            </p>
                          )}
                          <p className="text-sm text-gray-600">
                            {question.explanation}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};