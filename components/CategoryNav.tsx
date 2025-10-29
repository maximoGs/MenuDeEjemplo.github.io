
import React from 'react';
import type { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <nav className="sticky top-16 z-20 bg-gray-50 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-4 py-2 whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out
                ${selectedCategory === category.id
                  ? 'bg-[var(--primary-color)] text-[var(--primary-text-color)] shadow-md'
                  : 'bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }
              `}
            >
              {category.id === 'sidequests' && '📜 '}
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
