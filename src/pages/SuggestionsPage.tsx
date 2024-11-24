import React, { useState } from 'react';
import { Film, Tv, Heart, Brain, Smile } from 'lucide-react';

interface MediaItem {
  title: string;
  type: 'movie' | 'series';
  image: string;
  description: string;
  benefits: string[];
  category: string;
}

const mediaData: MediaItem[] = [
  {
    title: "Inside Out",
    type: "movie",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000",
    description: "A beautiful exploration of emotions and mental processes through animation.",
    benefits: ["Understanding emotions", "Emotional awareness", "Self-acceptance"],
    category: "Stress Management",
  },
  {
    title: "The Secret Life of Walter Mitty",
    type: "movie",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=2000",
    description: "An inspiring journey of self-discovery and overcoming anxiety.",
    benefits: ["Courage building", "Adventure inspiration", "Anxiety management"],
    category: "Anxiety Reduction",
  },
  {
    title: "Wonder",
    type: "movie",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=2000",
    description: "A heartwarming story about acceptance and inner beauty.",
    benefits: ["Self-acceptance", "Empathy development", "Confidence building"],
    category: "Self-Esteem Building",
  },
];

const categories = [
  { name: "All", icon: Heart },
  { name: "Stress Management", icon: Brain },
  { name: "Anxiety Reduction", icon: Smile },
  { name: "Self-Esteem Building", icon: Film },
  { name: "Focus & Productivity", icon: Tv },
];

export default function SuggestionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMedia = selectedCategory === "All"
    ? mediaData
    : mediaData.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-16 ml-64">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sage-900 mb-6">Curated Media for Your Well-being</h1>
          <p className="text-xl text-sage-700">
            Discover movies and shows that inspire, heal, and support your mental health journey.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full shadow text-gray-700 transition ${
                  selectedCategory === category.name
                    ? 'bg-sage-600 text-white'
                    : 'bg-white hover:bg-sage-50 hover:text-sage-600'
                }`}
              >
                <category.icon className="w-5 h-5 inline-block mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition p-6">
                <div className="h-48 mb-4 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <span className="absolute top-2 right-2 bg-sage-500 text-white text-sm px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-sage-600 mb-2">Benefits:</h4>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    {item.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-900 mb-6">Looking for Personalized Recommendations?</h2>
          <p className="text-lg text-sage-700 mb-8">
            Schedule a consultation with our therapists to get customized media suggestions tailored to your unique journey.
          </p>
          <button className="bg-sage-600 text-white px-6 py-3 rounded-lg hover:bg-sage-700 transition">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
