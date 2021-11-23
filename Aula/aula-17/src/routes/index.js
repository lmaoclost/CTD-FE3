import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Repository from '../pages/Repository';
import NotFound from '../pages/NotFound';

const RouteList = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Ir para a Home</Link><br />
      <Link to="/lmaoclost/Aulas_CTD">Link para um repositório existente</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;