export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  status: 'student' | 'teacher' | 'researcher';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: string;
  students: string;
  content: string;
}

export interface TestResult {
  courseId: string;
  score: number;
  completedAt: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}