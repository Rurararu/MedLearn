import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/testStore';
import { TestQuestion } from '../components/TestQuestion';

export function Test() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const {
    questions,
    userAnswers,
    currentQuestion,
    fetchQuestions,
    submitAnswer,
    submitTest,
    setCurrentQuestion,
  } = useTestStore();

  useEffect(() => {
    if (courseId) {
      fetchQuestions(courseId);
    }
  }, [courseId, fetchQuestions]);

  const handleSubmitTest = async () => {
    if (courseId) {
      await submitTest(courseId);
      navigate('/profile');
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <span className="text-sm text-gray-500">
                {Math.round((userAnswers.filter(Boolean).length / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width: `${(userAnswers.filter(Boolean).length / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <TestQuestion
            question={questions[currentQuestion]}
            selectedAnswer={userAnswers[currentQuestion] ?? null}
            onSelectAnswer={(answer) => submitAnswer(currentQuestion, answer)}
          />

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
              disabled={currentQuestion === 0}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmitTest}
                disabled={userAnswers.length !== questions.length}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={() => currentQuestion < questions.length - 1 && setCurrentQuestion(currentQuestion + 1)}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}