
import React from 'react';
import { Employee } from '../../types/auth';

interface EmployeeSelectorProps {
  employees: Employee[];
  selectedEmployee: Employee | null;
  onEmployeeSelect: (employee: Employee) => void;
}

export const EmployeeSelector: React.FC<EmployeeSelectorProps> = ({
  employees,
  selectedEmployee,
  onEmployeeSelect,
}) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-pos-text-primary mb-4">Select Employee</h3>
      
      <div className="space-y-2">
        {employees.map((employee) => (
          <button
            key={employee.id}
            onClick={() => onEmployeeSelect(employee)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pos-accent ${
              selectedEmployee?.id === employee.id
                ? 'border-pos-accent bg-pos-accent/10 text-pos-text-primary'
                : 'border-pos-primary-card bg-pos-primary-card text-pos-text-secondary hover:border-pos-accent hover:text-pos-text-primary'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-pos-accent flex items-center justify-center text-pos-accent-foreground font-bold text-lg">
                {employee.name.charAt(0)}
              </div>
              
              <div className="text-left">
                <div className="font-medium">{employee.name}</div>
                <div className="text-sm text-pos-text-muted capitalize">{employee.role}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
