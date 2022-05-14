import { createContext, useReducer } from 'react';

const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  const contextValue = { ...state, dispatch };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
