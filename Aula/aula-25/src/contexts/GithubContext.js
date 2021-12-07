import { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '../reducers/userReducer';

export const GithubContext = createContext();

const GithubContextProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : [];
  });

  const addUser = (user) => dispatch({ type: 'ADD_USER', payload: user });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  return (
    <GithubContext.Provider value={{ users, addUser }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContextProvider;