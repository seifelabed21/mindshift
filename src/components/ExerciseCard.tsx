import React from 'react';
import { Play, Lock } from 'lucide-react';

interface ExerciseCardProps {
  title: string;
  description: string;
  duration: string;
  isPremium?: boolean;
  completionRate?: number;
  onStart: () => void;
}

export default function ExerciseCard({
  title,
  description,
  duration,
  isPremium = false,
  completionRate,
  onStart,
}: ExerciseCardProps) {
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
      {completionRate !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-sage-600 mb-1">
            <span>Progress</span>
            <span>{completionRate}%</span>
          </div>
          <div className="w-full bg-sage-100 rounded-full h-2">
            <div
              className="bg-sage-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-sage-500">{duration}</span>
        <button
          onClick={onStart}
          className="flex items-center px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
          disabled={isPremium}
        >
          {isPremium ? (
            <>
              <Lock className="w-4 h-4 mr-2" />
              Unlock
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Start
            </>
          )}
        </button>
      </div>
    </div>
  );
}