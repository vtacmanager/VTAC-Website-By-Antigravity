import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8 mb-24">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <Link to="/" className="flex items-center mb-10 group">
              <span className="text-2xl font-black tracking-tighter text-white">
                VTAC <span className="text-cyan-400 font-black">MANAGER</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-10 text-lg leading-relaxed font-medium">
              {t('footer.slogan')}
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
                { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
                { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#' },
                { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
                { name: 'X', icon: <Twitter className="w-5 h-5" />, href: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass-card border border-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t('footer.product.title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><Link to="/ihub" className="hover:text-cyan-400 transition-colors">{t('footer.product.ihub')}</Link></li>
              <li><Link to="/football#step-1" className="hover:text-cyan-400 transition-colors">{t('footer.product.howItWorks')}</Link></li>
              <li><Link to="/football#step-2" className="hover:text-cyan-400 transition-colors">{t('footer.product.remoteInteractive')}</Link></li>
              <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">{t('footer.product.pricing')}</Link></li>
              <li><Link to="/book-demo" className="hover:text-cyan-400 transition-colors">{t('footer.product.bookDemo')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t('footer.teamSports.title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><Link to="/football" className="hover:text-cyan-400 transition-colors">{t('footer.teamSports.football')}</Link></li>
              <li><span className="text-slate-600 cursor-not-allowed">{t('footer.teamSports.basketball')}</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">{t('footer.teamSports.rugby')}</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">{t('footer.teamSports.americanFootball')}</span></li>
              <li><span className="text-slate-600 text-[10px] uppercase tracking-widest">{t('footer.teamSports.more')}</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t('footer.solutions.title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">{t('footer.solutions.schools')}</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">{t('footer.solutions.academies')}</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">{t('footer.solutions.proClubs')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t('footer.resources.title')}</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              <li><span className="text-slate-600 cursor-not-allowed">{t('footer.resources.news')}</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">{t('footer.resources.blog')}</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">{t('footer.resources.videoTutorials')}</span></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">{t('footer.resources.contact')}</Link></li>
              <li><span className="text-slate-600 cursor-not-allowed">{t('footer.resources.supports')}</span></li>
              <li><span className="text-slate-600 cursor-not-allowed">{t('footer.resources.aboutUs')}</span></li>
            </ul>
          </div>
        </div>
        <div className="mb-24 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter italic">
                {t('subscription.title')}
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed lg:whitespace-nowrap">
                {t('subscription.subtitle')}
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (form.elements[0] as HTMLInputElement).value;
                console.log('Subscribing email to hello@vtacmanager.com:', email);
                alert(t('subscription.success'));
                form.reset();
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                required
                placeholder={t('subscription.placeholder')}
                className="flex-grow bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-6 text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all"
              />
              <button
                type="submit"
                className="py-4 px-8 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black uppercase tracking-widest rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                {t('subscription.button')}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer.links.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.links.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.links.security')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;