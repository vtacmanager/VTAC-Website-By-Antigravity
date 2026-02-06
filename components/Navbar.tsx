import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileTeamSportOpen, setIsMobileTeamSportOpen] = useState(false);
  const location = useLocation();
  const { user, isLoggedIn, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileTeamSportOpen(false);
  }, [location]);

  const teamSports = [
    { label: 'FOOTBALL/SOCCER', href: '/football', active: true },
    { label: 'BASKET BALL', href: '#', active: false },
    { label: 'AMERICAN FOOTBALL', href: '#', active: false },
    { label: 'RUGBY', href: '#', active: false },
    { label: 'HOCKEY', href: '#', active: false },
    { label: 'LACROSSE', href: '#', active: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <Logo className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-lg md:text-2xl font-black tracking-tighter">VTAC <span className="text-cyan-400">MANAGER</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-10">
            <Link
              to="/platform2"
              className={`text-sm font-black tracking-widest transition-colors ${location.pathname === '/platform2' ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
            >
              iHUB
            </Link>

            <Link
              to="/solutions"
              className={`text-sm font-black uppercase tracking-widest transition-colors ${location.pathname === '/solutions' ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
            >
              Solutions
            </Link>

            {/* TEAM SPORT Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-black uppercase tracking-widest transition-colors ${location.pathname === '/football' ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
              >
                TEAM SPORT
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl min-w-[240px]">
                  {teamSports.map((sport, i) => (
                    sport.active ? (
                      <Link
                        key={i}
                        to={sport.href}
                        className={`block px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${location.pathname === sport.href ? 'text-cyan-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                      >
                        {sport.label}
                      </Link>
                    ) : (
                      <div
                        key={i}
                        className="block px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 cursor-not-allowed select-none"
                      >
                        {sport.label}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/pricing"
              className={`text-sm font-black uppercase tracking-widest transition-colors ${location.pathname === '/pricing' ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center space-x-8 border-l border-white/10 pl-10">
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 text-sm font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                  <User className="w-4 h-4" />
                  <span>Account</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl min-w-[200px]">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Signed in as</p>
                      <p className="text-sm text-white font-medium truncate">{user?.email}</p>
                    </div>
                    <button
                      onClick={logout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-black px-7 py-3 rounded-full font-black text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-white/5 active:scale-95 uppercase"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="px-6 py-8 space-y-6 flex flex-col">
          <Link
            to="/platform2"
            className={`text-lg font-black tracking-widest ${location.pathname === '/platform2' ? 'text-cyan-400' : 'text-slate-300'}`}
          >
            iHUB
          </Link>

          <Link
            to="/solutions"
            className={`text-lg font-black uppercase tracking-widest ${location.pathname === '/solutions' ? 'text-cyan-400' : 'text-slate-300'}`}
          >
            Solutions
          </Link>

          {/* Mobile TEAM SPORT with Toggle */}
          <div className="space-y-4">
            <button
              onClick={() => setIsMobileTeamSportOpen(!isMobileTeamSportOpen)}
              className={`flex items-center justify-between w-full text-lg font-black uppercase tracking-widest ${location.pathname === '/football' ? 'text-cyan-400' : 'text-slate-300'}`}
            >
              TEAM SPORT
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMobileTeamSportOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`space-y-2 pl-4 border-l border-white/10 transition-all duration-300 ${isMobileTeamSportOpen ? 'block' : 'hidden'}`}>
              {teamSports.map((sport, i) => (
                sport.active ? (
                  <Link
                    key={i}
                    to={sport.href}
                    className={`block py-3 text-xs font-black uppercase tracking-[0.2em] ${location.pathname === sport.href ? 'text-cyan-400' : 'text-slate-400'}`}
                  >
                    {sport.label}
                  </Link>
                ) : (
                  <div
                    key={i}
                    className="py-3 text-xs font-black uppercase tracking-[0.2em] text-slate-700"
                  >
                    {sport.label}
                  </div>
                )
              ))}
            </div>
          </div>

          <Link
            to="/pricing"
            className={`text-lg font-black uppercase tracking-widest ${location.pathname === '/pricing' ? 'text-cyan-400' : 'text-slate-300'}`}
          >
            Pricing
          </Link>

          <div className="pt-6 border-t border-white/10">
            {isLoggedIn ? (
              <div className="space-y-4">
                <div className="px-4 py-3 bg-white/5 rounded-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Signed in as</p>
                  <p className="text-sm text-white font-medium">{user?.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center space-x-3 py-4 text-lg font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
                >
                  <LogOut className="w-6 h-6" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link
                  to="/login"
                  className="text-center py-4 text-lg font-black uppercase tracking-widest text-slate-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-black text-center py-4 rounded-2xl font-black text-lg uppercase shadow-xl"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;