import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { EditModeProvider } from './contexts/EditModeContext';
import Navigation from './components/rockroom/Navigation';
import Hero from './components/rockroom/Hero';
import About from './components/rockroom/About';
import Programs from './components/rockroom/Programs';
import EnrollSection from './components/rockroom/EnrollSection';
import Contact from './components/rockroom/Contact';
import Footer from './components/rockroom/Footer';
import { AdminToolbar } from './components/admin/AdminToolbar';
import { Toaster } from './components/ui/sonner';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminEnrollments from './pages/AdminEnrollments';
import AdminUsers from './pages/AdminUsers';
import AdminSettings from './pages/AdminSettings';
import RockFuDemo from './pages/RockFuDemo';
import CommercialStoryboard from './pages/CommercialStoryboard';

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <EnrollSection />
        <Contact />
      </main>
      <Footer />
      <AdminToolbar />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <EditModeProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rock-fu" element={<RockFuDemo />} />
              <Route path="/commercial-storyboard" element={<CommercialStoryboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/enrollments" element={<AdminEnrollments />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
            </Routes>
            <Toaster position="top-center" />
          </EditModeProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
