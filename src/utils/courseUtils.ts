export const loadCourses = async () => {
    try {
      const response = await import('../data/courses.json');
      return response.courses;
    } catch (error) {
      console.error('Error loading courses:', error);
      return [];
    }
  };


  