
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
  available?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  itemCount: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
