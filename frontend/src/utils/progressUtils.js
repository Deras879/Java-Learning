// Utility functions for managing user progress in localStorage

const STORAGE_KEYS = {
  TOPIC_PROGRESS: 'java_learning_topic_progress',
  EXERCISE_PROGRESS: 'java_learning_exercise_progress',
  QUIZ_PROGRESS: 'java_learning_quiz_progress',
  OVERALL_PROGRESS: 'java_learning_overall_progress'
};

// Topic Progress Management
export const getTopicProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.TOPIC_PROGRESS);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error loading topic progress:', error);
    return {};
  }
};

export const updateTopicProgress = (topicId, completed) => {
  try {
    const progress = getTopicProgress();
    progress[topicId] = {
      completed,
      completedAt: completed ? new Date().toISOString() : null
    };
    localStorage.setItem(STORAGE_KEYS.TOPIC_PROGRESS, JSON.stringify(progress));
    updateOverallProgress();
    return progress;
  } catch (error) {
    console.error('Error updating topic progress:', error);
    return {};
  }
};

// Exercise Progress Management
export const getExerciseProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.EXERCISE_PROGRESS);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error loading exercise progress:', error);
    return {};
  }
};

export const updateExerciseProgress = (topicId, exerciseId, completed, attempts = 1) => {
  try {
    const progress = getExerciseProgress();
    if (!progress[topicId]) progress[topicId] = {};
    
    progress[topicId][exerciseId] = {
      completed,
      attempts,
      completedAt: completed ? new Date().toISOString() : null,
      lastAttemptAt: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEYS.EXERCISE_PROGRESS, JSON.stringify(progress));
    
    // Check if all exercises in topic are completed
    checkTopicCompletion(topicId);
    
    return progress;
  } catch (error) {
    console.error('Error updating exercise progress:', error);
    return {};
  }
};

// Quiz Progress Management
export const getQuizProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_PROGRESS);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error loading quiz progress:', error);
    return {};
  }
};

export const updateQuizProgress = (topicId, score, totalQuestions, answers) => {
  try {
    const progress = getQuizProgress();
    const passed = score >= Math.ceil(totalQuestions * 0.7); // 70% to pass
    
    progress[topicId] = {
      score,
      totalQuestions,
      percentage: Math.round((score / totalQuestions) * 100),
      passed,
      answers,
      completedAt: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEYS.QUIZ_PROGRESS, JSON.stringify(progress));
    
    // Update topic completion if quiz passed
    if (passed) {
      updateTopicProgress(topicId, true);
    }
    
    return progress;
  } catch (error) {
    console.error('Error updating quiz progress:', error);
    return {};
  }
};

// Overall Progress Management
export const getOverallProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.OVERALL_PROGRESS);
    return stored ? JSON.parse(stored) : {
      totalTopics: 0,
      completedTopics: 0,
      percentage: 0,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error loading overall progress:', error);
    return {
      totalTopics: 0,
      completedTopics: 0,
      percentage: 0,
      lastUpdated: new Date().toISOString()
    };
  }
};

export const updateOverallProgress = (totalTopics = 5) => {
  try {
    const topicProgress = getTopicProgress();
    const completedTopics = Object.values(topicProgress).filter(p => p.completed).length;
    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    const overallProgress = {
      totalTopics,
      completedTopics,
      percentage,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEYS.OVERALL_PROGRESS, JSON.stringify(overallProgress));
    return overallProgress;
  } catch (error) {
    console.error('Error updating overall progress:', error);
    return getOverallProgress();
  }
};

// Helper function to check if all exercises in a topic are completed
const checkTopicCompletion = () => {
  // This would need to be imported from courseData, but to avoid circular dependency,
  // we'll handle this check in the components
  return true;
};

// Utility function to get progress for a specific topic
export const getTopicProgressById = (topicId) => {
  const topicProgress = getTopicProgress();
  const exerciseProgress = getExerciseProgress();
  const quizProgress = getQuizProgress();
  
  return {
    topicCompleted: topicProgress[topicId]?.completed || false,
    exercises: exerciseProgress[topicId] || {},
    quiz: quizProgress[topicId] || null
  };
};

// Reset all progress (for development/testing)
export const resetAllProgress = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    return true;
  } catch (error) {
    console.error('Error resetting progress:', error);
    return false;
  }
};

// Export progress data (for backup/sharing)
export const exportProgress = () => {
  try {
    const data = {};
    Object.entries(STORAGE_KEYS).forEach(([key, storageKey]) => {
      const stored = localStorage.getItem(storageKey);
      data[key] = stored ? JSON.parse(stored) : null;
    });
    return data;
  } catch (error) {
    console.error('Error exporting progress:', error);
    return null;
  }
};

// Import progress data (for restore)
export const importProgress = (data) => {
  try {
    Object.entries(STORAGE_KEYS).forEach(([key, storageKey]) => {
      if (data[key]) {
        localStorage.setItem(storageKey, JSON.stringify(data[key]));
      }
    });
    return true;
  } catch (error) {
    console.error('Error importing progress:', error);
    return false;
  }
};