
import React, { useState } from 'react';
import { Employee } from '../../types/auth';
import { EmployeeSelector } from './EmployeeSelector';
import { NumericKeypad } from './NumericKeypad';

interface LoginFormProps {
  employees: Employee[];
  onLogin: (employeeId: string, pin: string) => boolean;
  isLoading?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  employees,
  onLogin,
  isLoading = false,
}) => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleNumberClick = (number: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + number);
      setError('');
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
    setError('');
  };

  const handleEnter = () => {
    if (selectedEmployee && pin.length === 4) {
      const success = onLogin(selectedEmployee.id, pin);
      if (!success) {
        setError('Invalid PIN. Please try again.');
        setPin('');
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key >= '0' && event.key <= '9') {
      handleNumberClick(event.key);
    } else if (event.key === 'Backspace') {
      handleBackspace();
    } else if (event.key === 'Enter') {
      handleEnter();
    }
  };

  return (
    <div className="w-full max-w-md space-y-8" onKeyDown={handleKeyPress} tabIndex={0}>
      {/* Logo */}
      <div className="text-center">
        <div className="text-6xl mb-4">🍽️</div>
        <h1 className="text-3xl font-bold text-pos-text-primary mb-2">RestaurantPOS</h1>
        <p className="text-pos-text-muted">Employee Authentication</p>
      </div>

      {/* Employee Selection */}
      <EmployeeSelector
        employees={employees}
        selectedEmployee={selectedEmployee}
        onEmployeeSelect={setSelectedEmployee}
      />

      {/* PIN Input */}
      {selectedEmployee && (
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-pos-text-primary mb-4">
              Enter PIN for {selectedEmployee.name}
            </h3>
            
            <div className="flex justify-center gap-2 mb-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 ${
                    index < pin.length
                      ? 'bg-pos-accent border-pos-accent'
                      : 'border-pos-primary-card'
                  }`}
                />
              ))}
            </div>
            
            {error && (
              <div className="text-red-400 text-sm mb-4">{error}</div>
            )}
          </div>

          <NumericKeypad
            onNumberClick={handleNumberClick}
            onBackspace={handleBackspace}
            onEnter={handleEnter}
          />

          <button
            onClick={handleEnter}
            disabled={!selectedEmployee || pin.length !== 4 || isLoading}
            className="w-full pos-button-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200 disabled:hover:scale-100"
          >
            {isLoading ? 'Starting Shift...' : 'Start Shift'}
          </button>
        </div>
      )}
    </div>
  );
};
