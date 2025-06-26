
import React from 'react';
import { CartItem } from '../../types/order';
import { QuantitySelector } from './QuantitySelector';

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedOrder: () => void;
  customerName?: string;
  onCustomerNameChange?: (name: string) => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  subtotal,
  tax,
  total,
  onQuantityChange,
  onRemoveItem,
  onProceedOrder,
  customerName,
  onCustomerNameChange,
}) => {
  return (
    <div className="bg-pos-primary-surface p-6 rounded-lg h-full flex flex-col">
      {/* Customer Info */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-pos-text-primary mb-3">Customer Info</h3>
        <input
          type="text"
          placeholder="Customer name (optional)"
          value={customerName || ''}
          onChange={(e) => onCustomerNameChange?.(e.target.value)}
          className="w-full p-3 bg-pos-primary-card border border-pos-primary-card rounded-md text-pos-text-primary placeholder-pos-text-muted focus:outline-none focus:ring-2 focus:ring-pos-accent focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Order Items */}
      <div className="flex-1 mb-6">
        <h3 className="text-lg font-semibold text-pos-text-primary mb-4">
          Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
        </h3>
        
        {items.length === 0 ? (
          <div className="text-center py-8 text-pos-text-muted">
            <div className="text-4xl mb-2">🛒</div>
            <p>No items in cart</p>
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-start gap-3 p-3 bg-pos-primary-card rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-pos-text-primary truncate">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-semibold text-pos-text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <QuantitySelector
                      quantity={item.quantity}
                      onQuantityChange={(quantity) => onQuantityChange(item.id, quantity)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Totals */}
      {items.length > 0 && (
        <>
          <div className="border-t border-pos-primary-card pt-4 mb-6 space-y-2">
            <div className="flex justify-between text-pos-text-secondary">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-pos-text-secondary">
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-pos-text-primary border-t border-pos-primary-card pt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onProceedOrder}
            className="w-full pos-button-primary py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
          >
            Proceed to Order
          </button>
        </>
      )}
    </div>
  );
};
