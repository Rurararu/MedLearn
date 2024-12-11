import { create } from 'zustand';
import { Course } from '../types';
import { loadCourses } from '../utils/courseUtils';

interface CourseState {
  courses: Course[];
  currentCourse: Course | null;
  fetchCourses: () => Promise<void>;
  fetchCourse: (id: string) => Promise<void>;
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  currentCourse: null,
  fetchCourses: async () => {
    const courses = await loadCourses();
    set({ courses });
  },
  fetchCourse: async (id: string) => {
    const courses = await loadCourses();
    const course = courses.find((c) => c.id === id) || null;
    set({ currentCourse: course });
  },
}));