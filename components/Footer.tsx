import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-10 group">
              <span className="text-2xl font-black tracking-tighter text-white">
                VTAC <span className="text-slate-500 font-medium">MANAGER</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-10 text-lg leading-relaxed font-medium">
              The world's first unified platform for sports management and interactive tactical mastery.
            </p>
            <div className="flex space-x-6 opacity-30">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(s => (
                <div key={s} className="w-10 h-10 bg-white rounded-lg cursor-pointer hover:bg-cyan-400 transition-colors"></div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><Link to="/platform" className="hover:text-cyan-400 transition-colors">Tactical Engine</Link></li>
              <li><Link to="/platform" className="hover:text-cyan-400 transition-colors">Management Suite</Link></li>
              <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing Plans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Solutions</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">For Academies</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">For Pro Coaches</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">Multi-Sport Orgs</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
          <p>© 2024 VTAC Manager Technologies. Built on Patented Technology.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;