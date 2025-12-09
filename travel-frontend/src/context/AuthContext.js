// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create context
const AuthContext = createContext();

// Custom hook to use auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock login function (replace with real API later)
  const login = async (email, password) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser({ id: 1, name: 'John Doe', email });
      setLoading(false);
    }, 1000);
    return { success: true };
  };

  // Mock register function
  const register = async (userData) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, name: userData.name, email: userData.email });
      setLoading(false);
    }, 1000);
    return { success: true };
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Context value
  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};