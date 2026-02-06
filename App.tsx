
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Platform from './pages/Platform.tsx';
import Platform2 from './pages/Platform2.tsx';
import Solutions from './pages/Solutions.tsx';
import Football from './pages/Football.tsx';
import Pricing from './pages/Pricing.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen relative bg-slate-950 text-white overflow-x-hidden">
          <Navbar />
          <main className="flex-grow pt-20 w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/platform2" element={<Platform2 />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/football" element={<Football />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
