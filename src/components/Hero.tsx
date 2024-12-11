import React from 'react';

export function Hero() {
  return (
    <div className="bg-blue-600 py-24 mt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            MedLearn: Your Gateway to Medical Excellence
          </h1>
          <p className="text-xl text-white leading-relaxed mb-0 font-medium">
            Advance your medical knowledge with our comprehensive courses designed for 
            healthcare professionals, students, and researchers. Learn from expert-curated 
            content and validate your understanding through interactive assessments.
          </p>
        </div>
      </div>
    </div>
  );
}