import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';
import { ClockIcon, BookCheckIcon, UsersIcon } from 'lucide-react';
import '../css/style.css';


interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.id}`} className="block">
      <div className="course-card relative">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="course-card-img"
        />
        <div className="course-card-content">
          <h3 className="course-card-title">{course.title}</h3>
          <p className="course-card-description">{course.description}</p>
          <div className="absolute bottom-3 left-0 right-0 flex items-center gap-4 text-sm text-gray-500 px-4">
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-2" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <BookCheckIcon className="w-4 h-4 mr-2" />
              {course.level}
            </div>
            <div className="flex items-center">
              <UsersIcon className="w-4 h-4 mr-2" />
              {course.students} students
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
}