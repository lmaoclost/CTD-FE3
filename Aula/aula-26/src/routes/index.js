import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../pages/Home';
import Repository from '../pages/Repository';
import UserDetails from '../pages/UserDetails';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import GithubContextProvider from '../contexts/GithubContext';

const RouteList = () => (
  <BrowserRouter>
    <HelmetProvider>
      <GithubContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
          <Route path="user/:userName" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GithubContextProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default RouteList;