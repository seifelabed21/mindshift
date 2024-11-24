import React from 'react';
import { ArrowRight } from 'lucide-react';

interface QuizCardProps {
  title: string;
  description: string;
  duration: string;
  isPremium?: boolean;
  onStart: () => void;
}

export default function QuizCard({ title, description, duration, isPremium = false, onStart }: QuizCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-sage-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-sage-800">{title}</h3>
        {isPremium && (
          <span className="bg-sage-100 text-sage-700 text-xs px-2 py-1 rounded-full">
            Premium
          </span>
        )}
      </div>
      <p className="text-sage-600 mb-4">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-sage-500">{duration}</span>
        <button
          onClick={onStart}
          className="flex items-center text-sage-600 hover:text-sage-700 font-medium"
        >
          Start Quiz
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}