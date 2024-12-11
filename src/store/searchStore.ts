import { create } from 'zustand';
import { Course } from '../types';

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterCourses: (courses: Course[]) => Course[];
}

export const useSearchStore = create<SearchState>((set, get) => ({
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  filterCourses: (courses: Course[]) => {
    const { searchQuery } = get();
    if (!searchQuery.trim()) return courses;
    
    const query = searchQuery.toLowerCase();
    return courses.filter(
      course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
    );
  },
}));