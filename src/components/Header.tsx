import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, GraduationCap, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useSearchStore } from '../store/searchStore';
import 'D:/3Kurs/1Sem/Kursova/program3/project/css/style.css';

interface Course {
  id: string;
  title: string;
}

const mockCourses: Course[] = [
  { id: '1', title: 'Introduction to Anatomy' },
  { id: '2', title: 'Clinical Biochemistry' },
  { id: '3', title: 'Medical Ethics' },
  { id: '5', title: 'Surgical Procedures' },
  { id: '4', title: 'Pathophysiology' },
  { id: '6', title: 'Surgical Procedures' },
];

export function Header() {
  const { user, logout } = useAuthStore();
  const { searchQuery, setSearchQuery } = useSearchStore();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Фільтруємо курси на основі запиту
    const results = mockCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(results);
  }, [searchQuery]);

  const handleCourseClick = () => {
    setSearchQuery(''); // Очищуємо поле пошуку після кліку
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-flex">
          <Link to="/" className="logo">
            <GraduationCap className="logo-icon" />
            <span className="logo-text">MedLearn</span>
          </Link>

          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <div className="search-results">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <Link
                      to={`/courses/${course.id}`}
                      key={course.id}
                      className="search-result-item"
                      onClick={handleCourseClick} // Додаємо обробник кліку
                    >
                      {course.title}
                    </Link>
                  ))
                ) : (
                  <p className="no-results">No results found</p>
                )}
              </div>
            )}
          </div>

          <div className="nav-links">
            {user ? (
              <>
                <Link to="/profile" className="user-link">
                  <User className="h-5 w-5" />
                  <span>{user.firstName}</span>
                </Link>
                <button onClick={logout} className="logout-btn">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="auth-link">
                  Login
                </Link>
                <Link to="/register" className="register-btn">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
