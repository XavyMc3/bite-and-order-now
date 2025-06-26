
import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { useAuth } from '../hooks/useAuth';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const { employees, login } = useAuth();

  const handleLogin = (employeeId: string, pin: string) => {
    const success = login(employeeId, pin);
    if (success) {
      onLoginSuccess();
    }
    return success;
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Hero Image */}
      <div className="hidden lg:flex lg:flex-1 relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://picsum.photos/800/600?random=restaurant"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        
        {/* Inspirational Quote Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center p-12">
          <div className="text-center text-white">
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-6 leading-relaxed">
              "Great food is all the sweeter when shared with great friends."
            </blockquote>
            <cite className="text-lg text-white/80">— Restaurant Philosophy</cite>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 lg:max-w-xl bg-pos-primary p-8 lg:p-12 flex items-center justify-center">
        <LoginForm
          employees={employees}
          onLogin={handleLogin}
        />
      </div>
    </div>
  );
};
