
import React from 'react';
import { MenuCategory } from '../../types/menu';

interface CategoryNavProps {
  categories: MenuCategory[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <nav className="space-y-2">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-pos-text-primary mb-4">Menu Categories</h2>
        
        <button
          onClick={() => onCategorySelect('all')}
          className={`w-full text-left p-3 rounded-md transition-all duration-200 hover:bg-pos-primary-card ${
            selectedCategory === 'all'
              ? 'bg-pos-accent text-pos-accent-foreground'
              : 'bg-transparent text-pos-text-secondary hover:text-pos-text-primary'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg">🍽️</span>
              <span className="font-medium">All Items</span>
            </div>
            <span className="text-sm text-pos-text-muted">
              {categories.reduce((sum, cat) => sum + cat.itemCount, 0)}
            </span>
          </div>
        </button>
      </div>
      
      <div className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`w-full text-left p-3 rounded-md transition-all duration-200 hover:bg-pos-primary-card ${
              selectedCategory === category.id
                ? 'bg-pos-accent text-pos-accent-foreground'
                : 'bg-transparent text-pos-text-secondary hover:text-pos-text-primary'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm text-pos-text-muted">
                {category.itemCount}
              </span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};
