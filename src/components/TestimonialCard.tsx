import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ text, author, role }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-sage-100">
      <Quote className="w-8 h-8 text-sage-400 mb-4" />
      <p className="text-sage-700 mb-4">{text}</p>
      <div className="border-t border-sage-100 pt-4">
        <p className="font-medium text-sage-800">{author}</p>
        <p className="text-sage-600 text-sm">{role}</p>
      </div>
    </div>
  );
}