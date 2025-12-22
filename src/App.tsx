import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import HomePage from './pages/HomePage';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import HeroEditor from './pages/admin/HeroEditor';
import ProgramsEditor from './pages/admin/ProgramsEditor';
import AboutEditor from './pages/admin/AboutEditor';
import Enrollments from './pages/admin/Enrollments';
import AdminLayout from './components/admin/AdminLayout';
import AuthGuard from './components/admin/AuthGuard';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<Login />} />
          
          {/* Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              <AuthGuard>
                <AdminLayout />
              </AuthGuard>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="hero" element={<HeroEditor />} />
            <Route path="programs" element={<ProgramsEditor />} />
            <Route path="about" element={<AboutEditor />} />
            <Route path="enrollments" element={<Enrollments />} />
          </Route>
          
          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-center" />
      </Router>
    </HelmetProvider>
  );
}
