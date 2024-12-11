import { create } from 'zustand';
import { Question, TestResult } from '../types';
import { loadTestQuestions } from '../utils/testUtils';

interface TestState {
  questions: Question[];
  userAnswers: number[];
  currentQuestion: number;
  testResults: TestResult[];
  fetchQuestions: (courseId: string) => Promise<void>;
  submitAnswer: (questionIndex: number, answer: number) => void;
  submitTest: (courseId: string) => Promise<void>;
  setCurrentQuestion: (index: number) => void;
}

export const useTestStore = create<TestState>((set, get) => ({
  questions: [],
  userAnswers: [],
  currentQuestion: 0,
  testResults: [],
  
  fetchQuestions: async (courseId: string) => {
    const questions = await loadTestQuestions(courseId);
    set({ questions, userAnswers: [], currentQuestion: 0 });
  },

  submitAnswer: (questionIndex: number, answer: number) => {
    const { userAnswers } = get();
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    set({ userAnswers: newAnswers });
  },

  submitTest: async (courseId: string) => {
    const { questions, userAnswers } = get();
    const correctAnswers = userAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    
    const score = (correctAnswers / questions.length) * 100;
    const result: TestResult = {
      courseId,
      score,
      completedAt: new Date().toISOString(),
    };
    
    set((state) => ({
      testResults: [...state.testResults, result],
    }));
  },

  setCurrentQuestion: (index: number) => {
    set({ currentQuestion: index });
  },
}));