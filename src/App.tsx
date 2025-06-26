
import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from './pages/LoginScreen';
import { MenuScreen } from './pages/MenuScreen';
import { useAuth } from './hooks/useAuth';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated, logout } = useAuth();
  const [currentScreen, setCurrentScreen] = useState<'login' | 'menu'>('login');

  useEffect(() => {
    setCurrentScreen(isAuthenticated ? 'menu' : 'login');
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    setCurrentScreen('menu');
  };

  const handleLogout = () => {
    logout();
    setCurrentScreen('login');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            currentScreen === 'login' ? (
              <LoginScreen onLoginSuccess={handleLoginSuccess} />
            ) : (
              <MenuScreen onLogout={handleLogout} />
            )
          } 
        />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <LoginScreen onLoginSuccess={handleLoginSuccess} />
            )
          } 
        />
        <Route 
          path="/menu" 
          element={
            isAuthenticated ? (
              <MenuScreen onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
