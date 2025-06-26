
import { MenuItem, MenuCategory, Employee } from '../types';

export const menuCategories: MenuCategory[] = [
  { id: 'breakfast', name: 'Breakfast', icon: '🍳', itemCount: 8 },
  { id: 'fastfood', name: 'Fast Food', icon: '🍔', itemCount: 12 },
  { id: 'seafood', name: 'Seafood', icon: '🦐', itemCount: 6 },
  { id: 'dessert', name: 'Dessert', icon: '🍰', itemCount: 10 },
  { id: 'drinks', name: 'Drinks', icon: '🥤', itemCount: 15 },
];

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: '1',
    name: 'Classic Pancakes',
    description: 'Fluffy pancakes served with maple syrup and butter',
    price: 12.99,
    category: 'breakfast',
    image: 'https://picsum.photos/300/200?random=1',
    popular: true,
  },
  {
    id: '2',
    name: 'Eggs Benedict',
    description: 'Poached eggs on English muffins with hollandaise sauce',
    price: 15.99,
    category: 'breakfast',
    image: 'https://picsum.photos/300/200?random=2',
  },
  {
    id: '3',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with cherry tomatoes',
    price: 11.99,
    category: 'breakfast',
    image: 'https://picsum.photos/300/200?random=3',
    popular: true,
  },
  {
    id: '4',
    name: 'French Toast',
    description: 'Thick-cut brioche with cinnamon and powdered sugar',
    price: 13.99,
    category: 'breakfast',
    image: 'https://picsum.photos/300/200?random=4',
  },

  // Fast Food
  {
    id: '5',
    name: 'Classic Cheeseburger',
    description: 'Beef patty with cheese, lettuce, tomato, and special sauce',
    price: 14.99,
    category: 'fastfood',
    image: 'https://picsum.photos/300/200?random=5',
    popular: true,
  },
  {
    id: '6',
    name: 'Chicken Wings',
    description: 'Crispy wings with your choice of sauce',
    price: 16.99,
    category: 'fastfood',
    image: 'https://picsum.photos/300/200?random=6',
  },
  {
    id: '7',
    name: 'Fish & Chips',
    description: 'Beer-battered fish with crispy fries and tartar sauce',
    price: 18.99,
    category: 'fastfood',
    image: 'https://picsum.photos/300/200?random=7',
  },
  {
    id: '8',
    name: 'BBQ Pulled Pork',
    description: 'Slow-cooked pork with BBQ sauce on brioche bun',
    price: 17.99,
    category: 'fastfood',
    image: 'https://picsum.photos/300/200?random=8',
  },

  // Seafood
  {
    id: '9',
    name: 'Grilled Salmon',
    description: 'Atlantic salmon with lemon herb seasoning',
    price: 24.99,
    category: 'seafood',
    image: 'https://picsum.photos/300/200?random=9',
    popular: true,
  },
  {
    id: '10',
    name: 'Shrimp Scampi',
    description: 'Garlic butter shrimp over linguine pasta',
    price: 22.99,
    category: 'seafood',
    image: 'https://picsum.photos/300/200?random=10',
  },
  {
    id: '11',
    name: 'Lobster Roll',
    description: 'Fresh lobster salad on a toasted roll',
    price: 28.99,
    category: 'seafood',
    image: 'https://picsum.photos/300/200?random=11',
  },

  // Desserts
  {
    id: '12',
    name: 'Chocolate Cake',
    description: 'Rich chocolate layer cake with fudge frosting',
    price: 8.99,
    category: 'dessert',
    image: 'https://picsum.photos/300/200?random=12',
    popular: true,
  },
  {
    id: '13',
    name: 'Cheesecake',
    description: 'New York style cheesecake with berry compote',
    price: 9.99,
    category: 'dessert',
    image: 'https://picsum.photos/300/200?random=13',
  },
  {
    id: '14',
    name: 'Apple Pie',
    description: 'Classic apple pie with vanilla ice cream',
    price: 7.99,
    category: 'dessert',
    image: 'https://picsum.photos/300/200?random=14',
  },

  // Drinks
  {
    id: '15',
    name: 'Fresh Lemonade',
    description: 'Freshly squeezed lemon juice with mint',
    price: 4.99,
    category: 'drinks',
    image: 'https://picsum.photos/300/200?random=15',
  },
  {
    id: '16',
    name: 'Iced Coffee',
    description: 'Cold brew coffee with your choice of milk',
    price: 5.99,
    category: 'drinks',
    image: 'https://picsum.photos/300/200?random=16',
    popular: true,
  },
  {
    id: '17',
    name: 'Smoothie Bowl',
    description: 'Acai smoothie with granola and fresh fruit',
    price: 11.99,
    category: 'drinks',
    image: 'https://picsum.photos/300/200?random=17',
  },
];

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'manager',
    pin: '1234',
    avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=sarah',
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'cashier',
    pin: '5678',
    avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=mike',
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'cashier',
    pin: '9012',
    avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=emily',
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    role: 'admin',
    pin: '3456',
    avatar: 'https://api.dicebear.com/7.x/avatars/svg?seed=alex',
  },
];
