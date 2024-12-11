import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useTestStore } from '../store/testStore';
import { ProfileForm } from '../components/ProfileForm';

export function Profile() {
  const { user, updateProfile } = useAuthStore();
  const { testResults } = useTestStore();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    return null;
  }

  const handleCourseClick = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  const handleEditSubmit = async (userData: Partial<typeof user>) => {
    await updateProfile(userData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* User Information - Fixed Position */}
          <div className="w-1/3">
            <div className="sticky top-24 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                {isEditing ? (
                  <ProfileForm
                    user={user}
                    onSubmit={handleEditSubmit}
                    onCancel={() => setIsEditing(false)}
                  />
                ) : (
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Full name</dt>
                      <dd className="mt-1 text-sm text-gray-900">{user.firstName} {user.lastName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Status</dt>
                      <dd className="mt-1 text-sm text-gray-900 capitalize">{user.status}</dd>
                    </div>
                  </dl>
                )}
              </div>
            </div>
          </div>

          {/* Course Progress - Scrollable */}
          <div className="w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Course Progress</h3>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {testResults.map((result) => (
                    <li 
                      key={`${result.courseId}-${result.completedAt}`}
                      onClick={() => handleCourseClick(result.courseId)}
                      className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-blue-600 hover:text-blue-800">
                          Course {result.courseId}
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-2">Score:</span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            result.score >= 70 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {Math.round(result.score)}%
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        Completed on {new Date(result.completedAt).toLocaleDateString()}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}