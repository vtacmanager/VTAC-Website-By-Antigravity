
import React from 'react';
import { SectionWrapper, FeatureCard, CTASection, GradientBackground } from '../components/UI.tsx';
import { Trophy, Users, Monitor, ShieldCheck, Heart, TrendingUp, Check } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* Page Header */}
      <header className="relative pt-16 pb-10 overflow-hidden text-center px-6">
        <GradientBackground />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-purple-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <Trophy className="w-3 h-3" />
            <span>Tailored for Every Stakeholder</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            SOLUTIONS FOR <br />
            <span className="gradient-text">THE ELITE.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto">
            From professional leagues to grassroots academies, we provide the tools to scale your excellence.
          </p>
        </div>
      </header>

      {/* For Clubs */}
      <SectionWrapper className="bg-slate-950">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-sm">Professional Organizations</span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">SCALE YOUR <br />ACADEMY.</h2>
            <p className="text-xl text-slate-400 leading-relaxed">Centralize your curriculum and track performance across all age groups with industrial-grade database tools.</p>
            <ul className="space-y-6">
              {[
                'Standardized tactical curriculum', 
                'Centralized player performance database', 
                'Multi-academy management dashboard', 
                'Automated reporting for stakeholders'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4 text-lg text-slate-300 font-bold">
                  <div className="w-8 h-8 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full"></div>
            <div className="bg-slate-900 rounded-[4rem] border border-white/10 p-4 shadow-2xl overflow-hidden aspect-square">
               <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800" alt="Club Management" className="w-full h-full object-cover rounded-[3rem] opacity-70" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* For Coaches */}
      <SectionWrapper className="bg-slate-900/40">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="bg-slate-950 rounded-[4rem] border border-white/10 p-4 shadow-2xl overflow-hidden aspect-square">
               <img src="https://images.unsplash.com/photo-1526232762682-d2f5f714d23a?auto=format&fit=crop&q=80&w=800" alt="Coach Interface" className="w-full h-full object-cover rounded-[3rem] opacity-70" />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-10">
            <span className="text-purple-500 font-black tracking-[0.3em] uppercase text-sm">Elite Coaches</span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">UNLEASH <br />TACTICAL GENIUS.</h2>
            <p className="text-xl text-slate-400 leading-relaxed">Your philosophy, visualized in real-time. Go from thought to training in seconds.</p>
            <div className="grid grid-cols-1 gap-8">
              <FeatureCard 
                title="Quick Session Launch" 
                description="Go from tactical thought to active session in under 60 seconds with our preset drill engine."
              />
              <FeatureCard 
                title="Interactive Feedback" 
                description="Highlight player mistakes in real-time and let them move themselves into correct positions."
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* For Players/Parents */}
      <SectionWrapper>
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-8">
          <span className="text-cyan-400 font-black tracking-[0.3em] uppercase text-sm">Players & Parents</span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">DEVELOPMENT <br />IN FOCUS.</h2>
          <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">Clear communication, measurable growth, and a transparent path to the next level.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Visual Learning" 
            description="Players learn faster through game-like visual interaction than traditional drills."
            tag="Accelerated"
          />
          <FeatureCard 
            title="Auto Player CV" 
            description="Automatic generation of player profiles showcasing tactical stats and attendance."
            tag="Data-Driven"
          />
          <FeatureCard 
            title="Anytime Access" 
            description="Players can revisit tactical sessions on their phone to study formations on the go."
            tag="Mobile"
          />
        </div>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default Solutions;
