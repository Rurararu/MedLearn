import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourseStore } from '../store/courseStore';
import { CourseContent } from '../components/CourseContent';
import 'D:/3Kurs/1Sem/Kursova/program3/project/css/style.css';


export function Course() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentCourse, fetchCourse } = useCourseStore();

  useEffect(() => {
    if (id) {
      fetchCourse(id);
    }
  }, [id, fetchCourse]);

  if (!currentCourse) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-container">
      <div className="course-wrapper">
        <div className="course-content-page">
          <img
            src={currentCourse.imageUrl}
            alt={currentCourse.title}
            className="course-image"
          />
          <div className="course-content-page">
            <h1 className="course-title">{currentCourse.title}</h1>
            <CourseContent course={currentCourse} />
            <div className="mt-8">
              <button
                onClick={() => navigate(`/courses/${id}/test`)}
                className="course-button"
              >
                Take Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}