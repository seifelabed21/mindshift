import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeCategory === category
              ? 'bg-sage-600 text-white'
              : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}