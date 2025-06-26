
export interface Employee {
  id: string;
  name: string;
  role: 'cashier' | 'manager' | 'admin';
  pin: string;
  avatar?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  employee: Employee | null;
  loginTime?: Date;
}
