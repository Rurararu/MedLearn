export const loadTestQuestions = async (courseId: string) => {
    try {
      const response = await import('../data/tests.json');
      return response.tests[courseId]?.questions || [];
    } catch (error) {
      console.error('Error loading test questions:', error);
      return [];
    }
  };