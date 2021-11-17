import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main';
import Repository from '../pages/Repository';

const RouteList = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repository" element={<Repository />} />
    </Routes>
  </Router>
);

export default RouteList;