import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UniversitiesPage } from './components/UniversitiesPage';
import { UniversityDetail } from './components/UniversityDetail';
import { FacultiesPage } from './components/FacultiesPage';
import { FacultyDetail } from './components/FacultyDetail';
import { AuthPage } from './components/AuthPage';
import { ProfilePage } from './components/ProfilePage';
import { AdminLoginPage } from './components/AdminLoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ComparePage } from './components/ComparePage';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { UniversitiesProvider } from './context/UniversitiesContext';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <UniversitiesProvider>
            <div className="min-h-screen bg-background">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/universities" element={<UniversitiesPage />} />
                <Route path="/universities/:id" element={<UniversityDetail />} />
                <Route path="/faculties" element={<FacultiesPage />} />
                <Route path="/faculties/:id" element={<FacultyDetail />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/login" element={<AuthPage />} />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/admin-login" element={<AdminLoginPage />} />
                <Route 
                  path="/admin-dashboard" 
                  element={
                    <ProtectedRoute requireAdmin>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster />
          </UniversitiesProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}