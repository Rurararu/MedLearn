import React from 'react';
import { Question } from '../types';
import 'D:/3Kurs/1Sem/Kursova/program3/project/css/style.css';


interface TestQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answer: number) => void;
}

export function TestQuestion({ question, selectedAnswer, onSelectAnswer }: TestQuestionProps) {
  return (
    <div className="test-question">
      <h3 className="test-question-title">{question.text}</h3>
      <div className="test-question-options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`test-question-option ${
              selectedAnswer === index ? 'selected' : ''
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}