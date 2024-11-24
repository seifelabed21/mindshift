import React from 'react';
import { Shield, MessageCircle, Users } from 'lucide-react';
import ForumCard from '../components/ForumCard';

const categories = [
  'Stress',
  'Anxiety',
  'School Life',
  'Relationships',
  'General Support',
];

const forumPosts = [
  {
    title: 'Dealing with exam anxiety',
    content: "I have a big exam coming up and I'm feeling overwhelmed. Any tips on managing test anxiety?",
    category: 'Anxiety',
    upvotes: 24,
    replies: 8,
    timeAgo: '2h ago',
  },
  {
    title: 'Meditation techniques for beginners',
    content: "Here are some effective meditation techniques I've found helpful for managing stress and anxiety...",
    category: 'Stress',
    upvotes: 42,
    replies: 15,
    timeAgo: '4h ago',
    isExpertResponse: true,
  },
];

export default function AnonymousForum() {
  return (
    <div className="pt-16 ml-64">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sage-900 mb-6">Anonymous Forum</h1>
          <p className="text-xl text-sage-700">
            A supportive, anonymous space to share experiences, seek advice, and connect with others in a safe and inclusive environment.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold text-sage-800 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-purple-100 rounded-lg">
                <Shield className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-sage-700 text-center">Safe & Anonymous</h3>
                <p className="text-sage-500 text-center">
                  Share your thoughts without revealing your identity.
                </p>
              </div>
              <div className="p-4 border border-purple-100 rounded-lg">
                <MessageCircle className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-sage-700 text-center">Expert Support</h3>
                <p className="text-sage-500 text-center">
                  Receive guidance from mental health professionals.
                </p>
              </div>
              <div className="p-4 border border-purple-100 rounded-lg">
                <Users className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-sage-700 text-center">Community Support</h3>
                <p className="text-sage-500 text-center">
                  Connect with others who understand your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-sage-800 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white rounded-full shadow hover:shadow-md text-gray-700 hover:text-sage-600 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Posts Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-sage-800 mb-6">Recent Posts</h2>
          <div className="space-y-6">
            {forumPosts.map((post, index) => (
              <ForumCard
                key={index}
                title={post.title}
                content={post.content}
                category={post.category}
                upvotes={post.upvotes}
                replies={post.replies}
                timeAgo={post.timeAgo}
                isExpertResponse={post.isExpertResponse || false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-900 mb-6">Join the Discussion</h2>
          <p className="text-lg text-sage-700 mb-8">
            Become a part of our anonymous forum and share your thoughts with a supportive community.
          </p>
          <button className="bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors">
            Start Posting
          </button>
        </div>
      </section>
    </div>
  );
}
