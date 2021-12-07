import { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '../reducers/userReducer';

export const GithubContext = createContext();

const GithubContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  return (
    <GithubContext.Provider value={{ users, dispatch }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContextProvider;