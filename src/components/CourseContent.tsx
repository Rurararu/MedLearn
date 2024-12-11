import React from 'react';
import { Course } from '../types';
  import '../css/style.css';

interface CourseContentProps {
  course: Course;
}

export function CourseContent({ course }: CourseContentProps) {
  return (
    <div className="course-content">
      <div dangerouslySetInnerHTML={{ __html: course.content }} />
    </div>
  );
}
