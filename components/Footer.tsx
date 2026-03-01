import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
                { name: 'TikTok', icon: <TiktokIcon className="w-5 h-5" />, href: '#' },
                { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
                { name: 'X', icon: <XIcon className="w-5 h-5" />, href: '#' }
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
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (form.elements[0] as HTMLInputElement).value;
                setIsSubmitting(true);
                try {
                  const res = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                  });
                  const data = await res.json();

                  if (!res.ok) {
                    alert(data.error || 'Failed to subscribe. Please try again.');
                  } else {
                    alert(t('subscription.success', 'Thank you for subscribing!'));
                    form.reset();
                  }
                } catch (error) {
                  console.error('Subscription error:', error);
                  alert('Something went wrong. Please try again later.');
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder={t('subscription.placeholder')}
                  className="flex-grow bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-6 text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-4 px-8 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-black uppercase tracking-widest rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                >
                  {isSubmitting ? '...' : t('subscription.button')}
                </button>
              </div>
              <p className="text-[10px] text-slate-500 max-w-sm mt-1">
                {t('subscription.consent', 'By subscribing, you agree to our Privacy Policy and consent to receive marketing emails. You can unsubscribe at any time.')}
              </p>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-black uppercase tracking-[0.3em]">
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <p className="text-white">{t('footer.copyright.name')}</p>
            <p>{t('footer.copyright.patent')}</p>
            <p>{t('footer.copyright.rights')}</p>
          </div>
          <div className="flex space-x-10 mt-8 md:mt-0">
            <Link to="/terms" className="hover:text-white transition-colors">{t('footer.links.terms')}</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.links.privacy')}</Link>
            <Link to="/security" className="hover:text-white transition-colors">{t('footer.links.security')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;