import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state

  const loginUser = (userData) => {
    // Logic to set user data after successful login
    setUser(userData);
  };

  const logoutUser = () => {
    // Logic to remove user data after logout
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
