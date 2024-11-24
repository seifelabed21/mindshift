import React from 'react';
import { MessageCircle, ThumbsUp, Flag, Clock } from 'lucide-react';

interface ForumPostProps {
  title: string;
  content: string;
  category: string;
  upvotes: number;
  replies: number;
  timeAgo: string;
  isExpertResponse?: boolean;
}

export default function ForumCard({ title, content, category, upvotes, replies, timeAgo, isExpertResponse }: ForumPostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <span className={`px-3 py-1 rounded-full text-sm ${
          isExpertResponse ? 'bg-sage-100 text-sage-800' : 'bg-sage-100 text-sage-800'
        }`}>
          {category}
        </span>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <span>{timeAgo}</span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-600 hover:text-sage-600 transition-colors">
            <ThumbsUp className="w-4 h-4 mr-1" />
            <span>{upvotes}</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-sage-600 transition-colors">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>{replies}</span>
          </button>
        </div>
        <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
          <Flag className="w-4 h-4 mr-1" />
          <span>Report</span>
        </button>
      </div>
    </div>
  );
}