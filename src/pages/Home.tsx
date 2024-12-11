import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Advantages } from '../components/Advantages';
import { CourseGrid } from '../components/CourseGrid';
import { ContactSection } from '../components/ContactSection';
import { useSearchStore } from '../store/searchStore';
import { useCourseStore } from '../store/courseStore';

export function Home() {
  const filterCourses = useSearchStore(state => state.filterCourses);
  const { courses, fetchCourses } = useCourseStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const filteredCourses = filterCourses(courses);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Advantages />
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No courses found matching your search criteria.</p>
        </div>
      ) : (
        <CourseGrid courses={filteredCourses} />
      )}
      <ContactSection />
    </div>
  );
}