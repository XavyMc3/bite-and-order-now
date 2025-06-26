
import React from 'react';

interface NumericKeypadProps {
  onNumberClick: (number: string) => void;
  onBackspace: () => void;
  onEnter: () => void;
}

export const NumericKeypad: React.FC<NumericKeypadProps> = ({
  onNumberClick,
  onBackspace,
  onEnter,
}) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-pos-primary-surface rounded-lg">
      {numbers.slice(0, 9).map((number) => (
        <button
          key={number}
          onClick={() => onNumberClick(number)}
          className="aspect-square bg-transparent text-pos-text-primary border-2 border-pos-primary-card rounded-md text-xl font-medium hover:bg-pos-primary-card hover:border-pos-accent transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pos-accent"
        >
          {number}
        </button>
      ))}
      
      <button
        onClick={onBackspace}
        className="aspect-square bg-transparent text-pos-text-primary border-2 border-pos-primary-card rounded-md text-lg font-medium hover:bg-pos-primary-card hover:border-pos-accent transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pos-accent"
      >
        ⌫
      </button>
      
      <button
        onClick={() => onNumberClick('0')}
        className="aspect-square bg-transparent text-pos-text-primary border-2 border-pos-primary-card rounded-md text-xl font-medium hover:bg-pos-primary-card hover:border-pos-accent transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pos-accent"
      >
        0
      </button>
      
      <button
        onClick={onEnter}
        className="aspect-square bg-pos-accent text-pos-accent-foreground border-2 border-pos-accent rounded-md text-lg font-semibold hover:bg-pos-accent-hover transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pos-accent"
      >
        ✓
      </button>
    </div>
  );
};
