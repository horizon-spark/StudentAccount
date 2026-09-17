import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout/Layout.jsx';
import Login from '@/pages/Login/Login.jsx';
import Dashboard from '@/pages/Dashboard/Dashboard.jsx';
import NotFound from '@/pages/NotFound/NotFound.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import General from '@/pages/General/General.jsx';
import Education from '@/pages/Education/Education.jsx';
import Portfolio from '@/pages/Portfolio/Portfolio.jsx';
import Office from '@/pages/Office/Office.jsx';
import Links from '@/pages/Links/Links.jsx';
import Contacts from '@/pages/Contacts/Contacts.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="general" element={<General />} />
          <Route path="education" element={<Education />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="office" element={<Office />} />
          <Route path="links" element={<Links />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
