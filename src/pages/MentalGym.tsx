import React, { useState } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import CategoryFilter from '../components/CategoryFilter';
import ProgressStats from '../components/ProgressStats';
import { Award } from 'lucide-react';

const categories = [
  'All Exercises',
  'Stress Management',
  'Anxiety Reduction',
  'Self-Esteem',
  'Focus',
  'Emotional Resilience',
];

const exercises = {
  'Stress Management': [
    {
      title: 'Guided Breathing',
      description: 'Learn deep breathing techniques to manage stress and anxiety.',
      duration: '10 mins',
      isPremium: false,
      completionRate: 75,
    },
    {
      title: 'Progressive Muscle Relaxation',
      description: 'Systematically relax your muscles to reduce physical tension.',
      duration: '15 mins',
      isPremium: true,
    },
  ],
  'Anxiety Reduction': [
    {
      title: 'Mindful Meditation',
      description: 'Practice mindfulness to reduce anxiety and improve focus.',
      duration: '10 mins',
      isPremium: false,
      completionRate: 30,
    },
    {
      title: 'Anxiety Journal',
      description: 'Track and analyze anxiety triggers with guided prompts.',
      duration: '15 mins',
      isPremium: true,
    },
  ],
  'Self-Esteem': [
    {
      title: 'Positive Affirmations',
      description: 'Build confidence through daily positive self-talk exercises.',
      duration: '5 mins',
      isPremium: false,
    },
    {
      title: 'Self-Compassion Practice',
      description: 'Learn to treat yourself with kindness and understanding.',
      duration: '20 mins',
      isPremium: true,
    },
  ],
  'Focus': [
    {
      title: 'Pomodoro Timer',
      description: 'Enhance productivity with timed work and break intervals.',
      duration: '25 mins',
      isPremium: false,
      completionRate: 50,
    },
    {
      title: 'Mind Mapping',
      description: 'Organize thoughts and improve concentration through visual mapping.',
      duration: '15 mins',
      isPremium: true,
    },
  ],
  'Emotional Resilience': [
    {
      title: 'Gratitude Practice',
      description: 'Strengthen emotional resilience through daily gratitude exercises.',
      duration: '10 mins',
      isPremium: false,
    },
    {
      title: 'Emotional Intelligence Training',
      description: 'Advanced exercises to understand and manage emotions effectively.',
      duration: '30 mins',
      isPremium: true,
    },
  ],
};

export default function MentalGym() {
  const [activeCategory, setActiveCategory] = useState('All Exercises');

  const handleStartExercise = (title: string) => {
    console.log(`Starting exercise: ${title}`);
    // Exercise start logic will be implemented here
  };

  const getFilteredExercises = () => {
    if (activeCategory === 'All Exercises') {
      return Object.values(exercises).flat();
    }
    return exercises[activeCategory as keyof typeof exercises] || [];
  };

  return (
    <div className="pt-16 ml-64">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sage-900 mb-6">Mental Gym</h1>
          <p className="text-xl text-sage-700">
            Build mental strength and emotional resilience through our curated collection
            of exercises. Track your progress and earn rewards as you develop healthy
            mental habits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Progress Stats */}
          <ProgressStats
            exercisesCompleted={12}
            currentStreak={5}
            totalMinutes={180}
          />

          {/* Achievements */}
          <div className="bg-white p-6 rounded-xl border border-sage-100 mb-8">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-sage-600 mr-2" />
              <h2 className="text-xl font-semibold text-sage-800">Recent Achievements</h2>
            </div>
            <div className="flex gap-4">
              <div className="bg-sage-50 p-3 rounded-lg text-center">
                <span className="block text-sage-600 text-sm mb-1">5-Day Streak</span>
                <span className="text-2xl">🔥</span>
              </div>
              <div className="bg-sage-50 p-3 rounded-lg text-center">
                <span className="block text-sage-600 text-sm mb-1">Mindfulness Master</span>
                <span className="text-2xl">🧘</span>
              </div>
              <div className="bg-sage-50 p-3 rounded-lg text-center">
                <span className="block text-sage-600 text-sm mb-1">Early Bird</span>
                <span className="text-2xl">🌅</span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Exercise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredExercises().map((exercise) => (
              <ExerciseCard
                key={exercise.title}
                {...exercise}
                onStart={() => handleStartExercise(exercise.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="bg-sage-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-900 mb-6">
            Unlock Premium Exercises
          </h2>
          <p className="text-lg text-sage-700 mb-8">
            Get access to advanced exercises, personalized recommendations, and detailed
            progress tracking with a premium subscription.
          </p>
          <button className="bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors">
            Upgrade to Premium
          </button>
        </div>
      </section>
    </div>
  );
}