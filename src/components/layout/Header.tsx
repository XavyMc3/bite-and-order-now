
import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onLogout: () => void;
  employeeName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onLogout,
  employeeName,
}) => {
  return (
    <header className="bg-pos-primary-surface p-4 rounded-lg mb-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-pos-accent">
          🍽️ RestaurantPOS
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pos-text-muted" size={20} />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 w-80 bg-pos-primary-card border border-pos-primary-card rounded-md text-pos-text-primary placeholder-pos-text-muted focus:outline-none focus:ring-2 focus:ring-pos-accent focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {employeeName && (
          <span className="text-pos-text-secondary">
            Welcome, <span className="text-pos-text-primary font-medium">{employeeName}</span>
          </span>
        )}
        
        <button
          onClick={onLogout}
          className="pos-button-secondary px-4 py-2 hover:scale-105 transition-transform duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
};
