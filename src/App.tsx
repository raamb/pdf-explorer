import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { ReaderPage } from './pages';

import { ROUTES } from './constants';

export const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.main} />} />
      <Route path={ROUTES.main} element={<ReaderPage />} />
      <Route path={ROUTES.orders} element={<ReaderPage />} />
      <Route path={ROUTES.customers} element={<ReaderPage />} />
      <Route path={ROUTES.inventory} element={<ReaderPage />} />
    </Routes>
  </Layout>
);