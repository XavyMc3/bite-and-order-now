
import { useState, useCallback } from 'react';
import { AuthState, Employee } from '../types/auth';
import { employees } from '../data/mockData';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    employee: null,
  });

  const login = useCallback((employeeId: string, pin: string) => {
    const employee = employees.find(emp => emp.id === employeeId && emp.pin === pin);
    
    if (employee) {
      setAuthState({
        isAuthenticated: true,
        employee,
        loginTime: new Date(),
      });
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      employee: null,
    });
  }, []);

  return {
    ...authState,
    employees,
    login,
    logout,
  };
};
