import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import CookieBanner from './components/CookieBanner.tsx';
import i18n from './i18n.ts';

// Lazy loading pages for performance optimization
const Home = lazy(() => import('./pages/Home.tsx'));
const Platform = lazy(() => import('./pages/Platform.tsx'));
const IHub = lazy(() => import('./pages/iHub.tsx'));
const Solutions = lazy(() => import('./pages/Solutions.tsx'));
const Football = lazy(() => import('./pages/Football.tsx'));
const Pricing = lazy(() => import('./pages/Pricing.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const Register = lazy(() => import('./pages/Register.tsx'));
const BookDemo = lazy(() => import('./pages/BookDemo.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const Terms = lazy(() => import('./pages/Terms.tsx'));
const Privacy = lazy(() => import('./pages/Privacy.tsx'));
const Security = lazy(() => import('./pages/Security.tsx'));
const Unsubscribe = lazy(() => import('./pages/Unsubscribe.tsx'));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-950">
    <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    const checkIPAndSetLanguage = async () => {
      // Check if we've already done IP detection or user manually changed language
      if (localStorage.getItem('ip_language_checked')) return;

      try {
        const response = await fetch('https://get.geojs.io/v1/ip/country.json');
        const data = await response.json();

        // If user is accessing from Thailand
        if (data.country === 'TH') {
          i18n.changeLanguage('th');
        }
        // If user is from UK
        else if (data.country === 'GB' || data.country === 'UK') {
          i18n.changeLanguage('en-GB');
        }
        // Other countries will fall back to en-US (default)

        // Mark that we have completed IP detection so we don't overwrite manual edits
        localStorage.setItem('ip_language_checked', 'true');
      } catch (error) {
        console.error('Failed to get IP location for language selection:', error);
      }
    };

    checkIPAndSetLanguage();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen relative bg-slate-950 text-white">
          <Navbar />
          <main className="flex-grow pt-20 w-full">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/platform" element={<Platform />} />
                <Route path="/ihub" element={<IHub />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/football" element={<Football />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/book-demo" element={<BookDemo />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/security" element={<Security />} />
                <Route path="/unsubscribe" element={<Unsubscribe />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
