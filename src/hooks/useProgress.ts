import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

const PROGRESS_KEY = 'java-learning-progress';

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    completedExercises: [],
    quizScores: {}
  });

  // Cargar progreso del localStorage al inicializar
  useEffect(() => {
    const savedProgress = localStorage.getItem(PROGRESS_KEY);
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Guardar progreso en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  const markLessonCompleted = (lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, lessonId])]
    }));
  };

  const markExerciseCompleted = (exerciseId: string) => {
    setProgress(prev => ({
      ...prev,
      completedExercises: [...new Set([...prev.completedExercises, exerciseId])]
    }));
  };

  const saveQuizScore = (lessonId: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [lessonId]: score
      }
    }));
  };

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(lessonId);
  };

  const isExerciseCompleted = (exerciseId: string) => {
    return progress.completedExercises.includes(exerciseId);
  };

  const getQuizScore = (lessonId: string) => {
    return progress.quizScores[lessonId] || 0;
  };

  const getCompletionPercentage = () => {
    const totalLessons = 12; // Número total de lecciones disponibles
    return Math.round((progress.completedLessons.length / totalLessons) * 100);
  };

  const resetProgress = () => {
    setProgress({
      completedLessons: [],
      completedExercises: [],
      quizScores: {}
    });
  };

  return {
    progress,
    markLessonCompleted,
    markExerciseCompleted,
    saveQuizScore,
    isLessonCompleted,
    isExerciseCompleted,
    getQuizScore,
    getCompletionPercentage,
    resetProgress
  };
};