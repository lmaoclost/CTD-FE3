import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Repository from '../pages/Repository';
import UserDetails from '../pages/UserDetails';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import GithubContextProvider from '../contexts/GithubContext';

const RouteList = () => (
  <BrowserRouter>
    <GithubContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
        <Route path="user/:userName" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GithubContextProvider>
  </BrowserRouter>
);

export default RouteList;