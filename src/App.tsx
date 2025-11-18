import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './pages/NavbarPage';
import { PeoplePage } from './contents/PeoplePage';

export const App = () => (
  <div data-cy="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to={'/'} replace />} />

      <Route path="/people">
        <Route index element={<PeoplePage />} />
        <Route path=":slug" element={<PeoplePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);
