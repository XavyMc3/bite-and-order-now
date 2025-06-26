
import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 0,
  max = 99,
}) => {
  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="w-8 h-8 rounded-full bg-pos-accent hover:bg-pos-accent-hover text-pos-accent-foreground font-bold text-lg flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      
      <span className="w-10 text-center text-pos-text-primary font-medium text-base">
        {quantity}
      </span>
      
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="w-8 h-8 rounded-full bg-pos-accent hover:bg-pos-accent-hover text-pos-accent-foreground font-bold text-lg flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};
