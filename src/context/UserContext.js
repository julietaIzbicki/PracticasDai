import React, { createContext, useState, useContext } from 'react';
const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const updateUser = (updates) => {
    setUser(prevUser => ({ ...prevUser, ...updates }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}