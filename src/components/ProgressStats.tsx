import React from 'react';
import { Trophy, Target, Calendar } from 'lucide-react';

interface ProgressStatsProps {
  exercisesCompleted: number;
  currentStreak: number;
  totalMinutes: number;
}

export default function ProgressStats({
  exercisesCompleted,
  currentStreak,
  totalMinutes,
}: ProgressStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-4 rounded-xl border border-sage-100 flex items-center">
        <Trophy className="w-8 h-8 text-sage-500 mr-4" />
        <div>
          <p className="text-sage-600 text-sm">Exercises Completed</p>
          <p className="text-2xl font-bold text-sage-800">{exercisesCompleted}</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-sage-100 flex items-center">
        <Target className="w-8 h-8 text-sage-500 mr-4" />
        <div>
          <p className="text-sage-600 text-sm">Current Streak</p>
          <p className="text-2xl font-bold text-sage-800">{currentStreak} days</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl border border-sage-100 flex items-center">
        <Calendar className="w-8 h-8 text-sage-500 mr-4" />
        <div>
          <p className="text-sage-600 text-sm">Total Time</p>
          <p className="text-2xl font-bold text-sage-800">{totalMinutes} mins</p>
        </div>
      </div>
    </div>
  );
}