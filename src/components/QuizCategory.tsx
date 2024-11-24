import React from 'react';

interface QuizCategoryProps {
  title: string;
  children: React.ReactNode;
}

export default function QuizCategory({ title, children }: QuizCategoryProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-sage-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}