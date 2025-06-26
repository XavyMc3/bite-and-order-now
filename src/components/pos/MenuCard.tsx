
import React from 'react';
import { MenuItem } from '../../types/menu';
import { QuantitySelector } from './QuantitySelector';

interface MenuCardProps {
  item: MenuItem;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  quantity,
  onQuantityChange,
  onAddToCart,
}) => {
  return (
    <div className="pos-card p-4 hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-fade-in relative group">
      {item.popular && (
        <div className="absolute top-2 left-2 bg-pos-accent text-pos-accent-foreground px-2 py-1 rounded-full text-xs font-medium z-10">
          Popular
        </div>
      )}
      
      <div className="aspect-[16/10] rounded-md overflow-hidden mb-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-pos-text-primary line-clamp-1">
          {item.name}
        </h3>
        
        <p className="text-sm text-pos-text-muted line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-pos-text-primary">
            ${item.price.toFixed(2)}
          </span>
          
          <div className="flex items-center gap-3">
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={onQuantityChange}
            />
            
            {quantity > 0 && (
              <button
                onClick={onAddToCart}
                className="pos-button-primary px-3 py-1.5 text-sm font-medium hover:scale-105 transition-transform duration-200"
                aria-label={`Add ${item.name} to cart`}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
