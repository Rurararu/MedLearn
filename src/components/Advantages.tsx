import React from 'react';
import { BookOpen, Clock, Award, Users, Brain, Shield } from 'lucide-react';

export function Advantages() {
  const advantages = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Expert-Led Content',
      description: 'Courses designed and reviewed by medical professionals'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Self-Paced Learning',
      description: 'Study at your own pace with lifetime access to courses'
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Interactive Testing',
      description: 'Comprehensive assessments to validate your knowledge'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose MedLearn?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the advantages that make our platform unique
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{advantage.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}