import React from 'react';
import { ExternalLink } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  downloadUrl: string;
  category: string;
}

export default function GameCard({ title, description, benefits, imageUrl, downloadUrl, category }: GameCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
            {category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
        >
          <span>Get Game</span>
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}