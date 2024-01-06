// components/YourContextProvider.js
'use client'
import React from 'react';
import createContext from './createContext';
import { useSession } from 'next-auth/react';
const YourContextProvider = ({ children }) => {
  const { data: session } = useSession();
  const role = session?.user?.role
  const Name = session?.user?.name
  
  return (
    <createContext.Provider value={{ role, Name }}>
      {children}
    </createContext.Provider>
  );
};

export default YourContextProvider;
