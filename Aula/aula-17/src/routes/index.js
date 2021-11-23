import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import SearchRepository from '../pages/SearchRepository';
import Repository from '../pages/Repository';
import NotFound from '../pages/NotFound';

const RouteList = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Procurar um usuário github</Link><br />
      <Link to="/lmaoclost/Aulas_CTD">Link para um repositório existente</Link>
    </nav>
    <Routes>
      <Route path="/" element={<SearchRepository />} />
      <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;