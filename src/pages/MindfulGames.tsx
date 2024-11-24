import React from 'react';
import { Brain, Heart, Users, Zap } from 'lucide-react';
import GameCard from '../components/GameCard';

export default function MindfulGames() {
  return (
    <div className="pt-16 ml-64">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sage-900 mb-6">Mindful Games</h1>
          <p className="text-xl text-sage-700">
            Discover games that help you relax, focus, and build resilience while providing therapeutic benefits.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Brain className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Stress Relief</h3>
            <p className="text-gray-600">Games for relaxation and productivity</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Heart className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Self-Reflection</h3>
            <p className="text-gray-600">Build emotional resilience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Users className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Social Games</h3>
            <p className="text-gray-600">Connect and collaborate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Zap className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Mental Skills</h3>
            <p className="text-gray-600">Train your cognitive abilities</p>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Games</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GameCard
              title="Forest: Stay Focused"
              description="Plant virtual trees that grow while you stay focused. If you leave the app, your tree dies."
              benefits={[
                'Improves focus and productivity',
                'Reduces phone addiction',
                'Gamifies time management',
              ]}
              imageUrl="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80"
              downloadUrl="https://www.forestapp.cc/"
              category="Stress Relief"
            />
            <GameCard
              title="Celeste"
              description="A beautiful platformer about climbing a mountain, dealing with anxiety, and overcoming personal challenges."
              benefits={[
                'Teaches persistence',
                'Explores mental health themes',
                'Builds resilience',
              ]}
              imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
              downloadUrl="https://www.celestegame.com/"
              category="Self-Reflection"
            />
            <GameCard
              title="Peak - Brain Training"
              description="Scientifically designed games to challenge your cognitive skills and track your progress."
              benefits={[
                'Improves memory',
                'Enhances problem-solving',
                'Builds mental agility',
              ]}
              imageUrl="https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?auto=format&fit=crop&q=80"
              downloadUrl="https://www.peak.net/"
              category="Mental Skills"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-900 mb-6">Start Playing</h2>
          <p className="text-lg text-sage-700 mb-8">
            Explore games that combine fun and mindfulness to support your mental well-being.
          </p>
          <button className="bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors">
            Browse All Games
          </button>
        </div>
      </section>
    </div>
  );
}
