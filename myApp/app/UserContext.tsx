// app/UserContext.tsx
import React, { createContext, useContext, useState } from 'react';

export interface UserDetails {
  name: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

interface UserContextType {
  userDetails: UserDetails;
  setUserDetails: (details: UserDetails) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
  });

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
