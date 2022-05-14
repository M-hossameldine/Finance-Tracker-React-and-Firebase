import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
  const autCtx = useContext(AuthContext);

  if (!autCtx) {
    throw new Error('useAuthContext must be used inside AuthContextProvider');
  }

  return autCtx;
};
