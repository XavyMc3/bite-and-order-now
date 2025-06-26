
import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { CategoryNav } from '../components/pos/CategoryNav';
import { MenuCard } from '../components/pos/MenuCard';
import { OrderSummary } from '../components/pos/OrderSummary';
import { useMenu } from '../hooks/useMenu';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

interface MenuScreenProps {
  onLogout: () => void;
}

export const MenuScreen: React.FC<MenuScreenProps> = ({ onLogout }) => {
  const { categories, items, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useMenu();
  const { items: cartItems, addItem, updateQuantity, removeItem, subtotal, tax, total } = useCart();
  const { employee } = useAuth();
  
  const [customerName, setCustomerName] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (itemId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: quantity,
    }));
  };

  const handleAddToCart = (item: any) => {
    const quantity = quantities[item.id] || 0;
    if (quantity > 0) {
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      });
      setQuantities(prev => ({
        ...prev,
        [item.id]: 0,
      }));
    }
  };

  const handleProceedOrder = () => {
    if (cartItems.length > 0) {
      console.log('Processing order:', {
        items: cartItems,
        customer: customerName,
        totals: { subtotal, tax, total },
        employee: employee?.name,
        timestamp: new Date(),
      });
      
      // Here you would typically send the order to your backend
      alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
      
      // Clear the cart after successful order
      cartItems.forEach(item => removeItem(item.id));
      setCustomerName('');
    }
  };

  return (
    <div className="min-h-screen bg-pos-primary p-4">
      <div className="max-w-[1600px] mx-auto">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onLogout={onLogout}
          employeeName={employee?.name}
        />
        
        <div className="flex gap-6 h-[calc(100vh-120px)]">
          {/* Left Sidebar - Categories */}
          <div className="w-80 bg-pos-primary-surface p-6 rounded-lg overflow-y-auto">
            <CategoryNav
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>
          
          {/* Main Content - Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-2">
              {items.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  quantity={quantities[item.id] || 0}
                  onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
            
            {items.length === 0 && (
              <div className="text-center py-16 text-pos-text-muted">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No items found</h3>
                <p>Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
          
          {/* Right Panel - Order Summary */}
          <div className="w-96">
            <OrderSummary
              items={cartItems}
              subtotal={subtotal}
              tax={tax}
              total={total}
              onQuantityChange={updateQuantity}
              onRemoveItem={removeItem}
              onProceedOrder={handleProceedOrder}
              customerName={customerName}
              onCustomerNameChange={setCustomerName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
