import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViaCEP from '../pages/ViaCEP';
import BrasilAPICEP from '../pages/BrasilAPICEP';
import NotFound from '../pages/NotFound';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViaCEP />} />
      <Route path="/:cep" element={<ViaCEP />} />
      <Route path="/brasilapi/" element={<BrasilAPICEP />} />
      <Route path="/brasilapi/:cep" element={<BrasilAPICEP />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;