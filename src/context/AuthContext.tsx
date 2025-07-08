'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, getSessionUser, isUserLoggedIn } from '@/utils/session';

interface AuthContextType {
  user: User | null;
  loggedIn: boolean;
  registered: boolean;
  setUser: (user: User | null) => void;
  setLoggedIn: (value: boolean) => void;
  setRegistered: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const storedUser = getSessionUser();
    setUser(storedUser);
    setLoggedIn(isUserLoggedIn());
    setRegistered(!!storedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loggedIn, registered, setUser, setLoggedIn, setRegistered }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


