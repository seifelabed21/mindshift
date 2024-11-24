import React from 'react';
import QuizCard from '../components/QuizCard';
import QuizCategory from '../components/QuizCategory';

const mentalHealthQuizzes = {
  core: [
    {
      title: 'Depression Test',
      description: 'Evaluate symptoms of depression and understand your emotional state.',
      duration: '10-15 minutes',
      isPremium: false,
    },
    {
      title: 'Anxiety Test',
      description: 'Assess your anxiety levels and identify potential triggers.',
      duration: '10-15 minutes',
      isPremium: false,
    },
    {
      title: 'ADHD Test',
      description: 'Screen for attention-deficit/hyperactivity disorder symptoms.',
      duration: '15-20 minutes',
      isPremium: true,
    },
  ],
  specialized: [
    {
      title: 'PTSD Test',
      description: 'Evaluate symptoms related to post-traumatic stress disorder.',
      duration: '15-20 minutes',
      isPremium: true,
    },
    {
      title: 'Eating Disorder Test',
      description: 'Screen for various eating disorder patterns and behaviors.',
      duration: '15-20 minutes',
      isPremium: true,
    },
    {
      title: 'Addiction Test',
      description: 'Assess potential addictive behaviors and their impact.',
      duration: '10-15 minutes',
      isPremium: true,
    },
  ],
  additional: [
    {
      title: 'Parent Test',
      description: 'Evaluate parenting stress and family dynamics.',
      duration: '15-20 minutes',
      isPremium: false,
    },
    {
      title: 'Youth Test',
      description: 'Specifically designed for teenagers and young adults.',
      duration: '10-15 minutes',
      isPremium: false,
    },
    {
      title: 'Technology & Mental Health',
      description: 'Assess how technology use affects your mental well-being.',
      duration: '10-15 minutes',
      isPremium: false,
    },
  ],
};

export default function Assessment() {
  const handleStartQuiz = (quizTitle: string) => {
    console.log(`Starting quiz: ${quizTitle}`);
    // Quiz start logic will be implemented here
  };

  return (
    <div className="pt-16 ml-64">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sage-900 mb-6">
            Mental Health Assessment
          </h1>
          <p className="text-xl text-sage-700">
            Understanding your mental health is the first step toward well-being. Our
            scientifically validated assessments help you gain insights into your emotional
            state and provide personalized recommendations.
          </p>
        </div>
      </section>

      {/* Quiz Categories */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold text-sage-800 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-sage-100 rounded-lg">
                <div className="text-sage-600 font-medium mb-2">1. Take the Quiz</div>
                <p className="text-sage-500 text-sm">
                  Answer questions honestly to get the most accurate assessment
                </p>
              </div>
              <div className="p-4 border border-sage-100 rounded-lg">
                <div className="text-sage-600 font-medium mb-2">2. Get Results</div>
                <p className="text-sage-500 text-sm">
                  Receive immediate feedback about your mental health state
                </p>
              </div>
              <div className="p-4 border border-sage-100 rounded-lg">
                <div className="text-sage-600 font-medium mb-2">3. Take Action</div>
                <p className="text-sage-500 text-sm">
                  Get personalized recommendations and resources
                </p>
              </div>
            </div>
          </div>

          <QuizCategory title="Core Assessments">
            {mentalHealthQuizzes.core.map((quiz) => (
              <QuizCard
                key={quiz.title}
                {...quiz}
                onStart={() => handleStartQuiz(quiz.title)}
              />
            ))}
          </QuizCategory>

          <QuizCategory title="Specialized Assessments">
            {mentalHealthQuizzes.specialized.map((quiz) => (
              <QuizCard
                key={quiz.title}
                {...quiz}
                onStart={() => handleStartQuiz(quiz.title)}
              />
            ))}
          </QuizCategory>

          <QuizCategory title="Additional Assessments">
            {mentalHealthQuizzes.additional.map((quiz) => (
              <QuizCard
                key={quiz.title}
                {...quiz}
                onStart={() => handleStartQuiz(quiz.title)}
              />
            ))}
          </QuizCategory>
        </div>
      </section>

      {/* Premium Features */}
      <section className="bg-sage-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-900 mb-6">
            Unlock Premium Features
          </h2>
          <p className="text-lg text-sage-700 mb-8">
            Get detailed reports, personalized recommendations, and access to our Mental
            Gym exercises with a premium subscription.
          </p>
          <button className="bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors">
            Upgrade to Premium
          </button>
        </div>
      </section>
    </div>
  );
}