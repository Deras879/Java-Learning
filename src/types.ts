export interface Lesson {
  id: string;
  title: string;
  level: 'principiante' | 'intermedio' | 'avanzado';
  description: string;
  content: {
    explanation: string;
    codeExample: string;
    exercises: Exercise[];
    quiz: QuizQuestion[];
  };
  completed?: boolean;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  expectedOutput?: string;
  completed?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
}

export interface UserProgress {
  completedLessons: string[];
  completedExercises: string[];
  quizScores: Record<string, number>;
}