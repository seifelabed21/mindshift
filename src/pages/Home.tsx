import React from 'react';
import { Play, Brain, Users, Gamepad, PhoneCall, BookOpen } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const features = [
  {
    icon: Brain,
    title: 'Assessment Quiz',
    description: 'Evaluate your mental well-being with our comprehensive assessment tools.',
  },
  {
    icon: Users,
    title: 'Anonymous Forum',
    description: 'Connect with peers and share experiences in a safe, moderated space.',
  },
  {
    icon: Gamepad,
    title: 'Mindful Games',
    description: 'Engage in interactive games designed to promote mental wellness.',
  },
  {
    icon: PhoneCall,
    title: 'Online Consultation',
    description: 'Connect with mental health professionals for personalized support.',
  },
  {
    icon: BookOpen,
    title: 'Suggestions',
    description: 'Discover curated resources tailored to your mental health journey.',
  },
];

export default function Home() {
  return (
    <div className="pt-16 ml-64">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-sage-900 mb-6">
            Your Journey to Mental Well-being Starts Here
          </h1>
          <p className="text-xl text-sage-700 mb-8">
            Empowering students with tools and support for better mental health.
          </p>
          <button className="bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition-colors flex items-center">
            <Play className="w-5 h-5 mr-2" />
            Watch Introduction
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-900 mb-12 text-center">
            Comprehensive Support System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 border border-sage-200 rounded-xl hover:shadow-md transition-shadow">
                <feature.icon className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-2">{feature.title}</h3>
                <p className="text-sage-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-sage-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-900 mb-12 text-center">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              text="Serenity Steps helped me manage my anxiety during finals. The mindfulness exercises were a game-changer!"
              author="Sarah Chen"
              role="Graduate Student"
            />
            <TestimonialCard
              text="The anonymous forum gave me a safe space to share my struggles and connect with others who understand."
              author="James Wilson"
              role="Undergraduate Student"
            />
            <TestimonialCard
              text="The assessment tools and professional guidance helped me understand and improve my mental health."
              author="Maya Patel"
              role="PhD Candidate"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-900 mb-6">Who We Are</h2>
          <p className="text-lg text-sage-700 mb-8">
            Serenity Steps is a comprehensive mental health platform designed specifically for students.
            We provide a safe, accessible, and effective space for managing mental well-being through
            interactive tools, professional support, and peer connections.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 text-sage-100 py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Serenity Steps</h3>
            <p className="text-sage-300">
              Your partner in mental wellness and academic success.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>support@serenitysteps.com</li>
              <li>1-800-SERENITY</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}