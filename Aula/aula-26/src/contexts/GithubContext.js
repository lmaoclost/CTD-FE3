import { createContext, useReducer, useEffect } from 'react';
import { gitReducer } from '../reducers/gitReducer';

export const GithubContext = createContext();

const GithubContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(gitReducer, [], () => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user) => dispatch({ type: 'ADD_USER', payload: user });

  return (
    <GithubContext.Provider value={{ users, addUser }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContextProvider;