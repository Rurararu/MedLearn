import React from 'react';
import { Course } from '../types';
  import 'D:/3Kurs/1Sem/Kursova/program/project/css/style.css';

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
