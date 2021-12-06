import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Repository from '../pages/Repository';
import UserDetails from '../pages/UserDetails';
import NotFound from '../pages/NotFound';
import UserContextProvider from '../contexts/UserContext';

const RouteList = () => (
  <BrowserRouter>
    <UserContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
        <Route path="user" element={<UserDetails />} />
        <Route path="user/:userName" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContextProvider>
  </BrowserRouter>
);

export default RouteList;