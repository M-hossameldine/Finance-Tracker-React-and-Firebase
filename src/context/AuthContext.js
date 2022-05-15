import { createContext, useReducer, useEffect } from 'react';
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    // fire a listener to user auth status when the app launches for the first time
    const unsub = projectAuth.onAuthStateChanged((user) => {
      // check if the user is already logged in and get user data
      dispatch({ type: 'AUTH_IS_READY', payload: user });

      // unsubscribe from the listener
      unsub();
    });
  }, []);

  console.log('Auth State', state);

  const contextValue = { ...state, dispatch };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
