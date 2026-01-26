import React from 'react';

export const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-12 md:py-20 relative overflow-hidden ${className}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      {children}
    </div>
  </section>
);

export const GradientBackground: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/15 blur-[160px] rounded-full animate-pulse"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[140px] rounded-full"></div>
    <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-cyan-400/10 blur-[120px] rounded-full"></div>
  </div>
);

export const FeatureCard: React.FC<{ title: string; description: string; tag?: string; icon?: React.ReactNode }> = ({ title, description, tag, icon }) => (
  <div className="group bg-slate-900/40 p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-3">
    {tag && (
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 bg-blue-400/10 px-4 py-1.5 rounded-full mb-8 inline-block">
        {tag}
      </span>
    )}
    {icon && <div className="text-white bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">{icon}</div>}
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-lg font-medium">{description}</p>
  </div>
);

export const CTASection: React.FC = () => (
  <SectionWrapper className="bg-slate-950">
    <div className="relative bg-slate-900 rounded-[5rem] p-6 md:p-16 text-center border border-white/10 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
      <div className="relative z-10 space-y-16">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] text-white">
          READY FOR THE <br />
          <span className="gradient-text">NEXT LEVEL?</span>
        </h2>
        <p className="text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto font-medium leading-tight">
          Join the elite organizations redefining training standards with VTAC Manager.
        </p>
        <div className="flex flex-col sm:flex-row gap-10 justify-center pt-8">
          <button className="bg-white text-black text-2xl px-20 py-8 rounded-full font-black hover:bg-cyan-400 transition-all shadow-3xl shadow-cyan-400/20 active:scale-95">
            Book a Demo
          </button>
          <button className="glass-card text-white border border-white/20 text-2xl px-20 py-8 rounded-full font-black hover:bg-white/10 transition-all active:scale-95">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  </SectionWrapper>
);