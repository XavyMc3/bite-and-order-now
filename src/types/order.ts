
export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  customerName?: string;
  tableNumber?: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  timestamp: Date;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
