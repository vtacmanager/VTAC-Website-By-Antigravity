
import React from 'react';
import {
  SectionWrapper,
  FeatureCard,
  GradientBackground,
  CTASection
} from '../components/UI.tsx';
import ToolCabinetScrollytelling from '../components/ToolCabinetScrollytelling.tsx';
import {
  Cpu,
  Zap,
  ShieldCheck,
  Database,
  Target,
  Play,
  TrendingUp,
  Calendar,
  Lock,
  MousePointer2,
  BarChart3,
  Network,
  Layers,
  Check
} from 'lucide-react';

const CapabilitySection: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  isReversed?: boolean;
}> = ({ title, subtitle, description, features, image, isReversed }) => (
  <div className={`grid lg:grid-cols-2 gap-16 lg:gap-32 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
    <div className={`space-y-8 ${isReversed ? 'lg:order-2' : ''}`}>
      <div className="space-y-2">
        <span className="text-cyan-400 font-black tracking-[0.3em] uppercase text-xs">{subtitle}</span>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic leading-none">{title}</h3>
      </div>
      <p className="text-xl text-slate-400 font-medium leading-relaxed italic">
        "{description}"
      </p>
      <ul className="grid gap-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-4 text-slate-300 font-bold">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
              <Zap className="w-3.5 h-3.5 text-cyan-400 fill-current" />
            </div>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className={`relative group ${isReversed ? 'lg:order-1' : ''}`}>
      <div className="absolute -inset-4 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-1000"></div>
      <div className="relative aspect-video rounded-[3rem] bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">
        <img src={image} className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
      </div>
    </div>
  </div>
);

const Platform: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* 1. Platform Overview */}
      <header className="relative pt-16 pb-10 overflow-hidden text-center px-6">
        <GradientBackground />
        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <Cpu className="w-3 h-3" />
            <span>Industrial-Grade Sports Engine</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
            THE UNIFIED <br />
            <span className="gradient-text">ECOSYSTEM.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 font-medium max-w-3xl mx-auto leading-tight">
            VTAC Manager isn't just an app; it's a patented infrastructure that powers every phase of the elite training cycle.
          </p>
        </div>
      </header>
      <ToolCabinetScrollytelling />

      {/* 2. TrustSignals (Patented Notice) */}
      <div className="border-y border-white/5 bg-slate-900/40 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-cyan-400 w-8 h-8" />
            <p className="text-sm font-black uppercase tracking-widest text-slate-400">
              Patented Interactive Synchronization Engine <span className="text-white">v3.2</span>
            </p>
          </div>
          <div className="h-px w-20 bg-white/10 hidden md:block"></div>
          <p className="text-xs font-bold text-slate-500 max-w-sm text-center md:text-left">
            Our unique multiplayer tactical training technology is legally protected and engineered for sub-50ms latency.
          </p>
        </div>
      </div>

      {/* 3. How It Works (Phase Lifecycle) */}
      <SectionWrapper id="coaching-flow">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic">The Coaching Flow</h2>
          <p className="text-slate-500 font-black uppercase tracking-widest text-sm">One Platform. End-to-End Excellence.</p>
        </div>

        <div className="space-y-24">
          {/* Phase 1: Before */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-5xl font-black italic tracking-tighter">01. BEFORE TRAINING <br /><span className="text-blue-500 underline decoration-4 underline-offset-8">PREPARATION.</span></h3>
              <p className="text-xl text-slate-400 leading-relaxed font-medium italic">"Victory is determined before the whistle blows."</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                  <h4 className="font-black mb-2 text-white uppercase text-sm">Roster Logistics</h4>
                  <p className="text-slate-500 text-sm">Automated scheduling and player availability tracking.</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                  <h4 className="font-black mb-2 text-white uppercase text-sm">Drill Composer</h4>
                  <p className="text-slate-500 text-sm">Design 2D/3D drills with integrated coaching points.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[4rem] border border-white/10 p-8 shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[3rem] opacity-40" alt="Planning" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-6 rounded-2xl border-white/20">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-400">Drill Status: Ready</p>
              </div>
            </div>
          </div>

          {/* Phase 2: During */}
          <div id="remote-interactive" className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 bg-slate-900 rounded-[4rem] border border-cyan-500/20 p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors"></div>
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[3rem] opacity-40" alt="Live Sync" />
              <div className="absolute bottom-12 left-12 right-12 glass-card p-8 rounded-3xl border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-black uppercase tracking-widest">Live Multiplayer Sync</p>
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800"></div>)}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                <MousePointer2 className="w-8 h-8" />
              </div>
              <h3 className="text-5xl font-black italic tracking-tighter">02. DURING TRAINING <br /><span className="text-cyan-400 underline decoration-4 underline-offset-8">EXECUTION.</span></h3>
              <p className="text-xl text-slate-400 leading-relaxed font-medium italic">"Real-time tactical feedback that sticks."</p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 font-bold">Interactive Board: Players move their own markers on their devices.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 font-bold">Live Annotations: Draw on the board and every player sees it instantly.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Phase 3: After */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/20">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-5xl font-black italic tracking-tighter">03. AFTER TRAINING <br /><span className="text-purple-500 underline decoration-4 underline-offset-8">OPTIMIZATION.</span></h3>
              <p className="text-xl text-slate-400 leading-relaxed font-medium italic">"Closing the loop between practice and performance."</p>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                  <h4 className="font-black text-white mb-2">Automated Player CV</h4>
                  <p className="text-slate-500 text-sm">Every tactical session adds to the player's development profile.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                  <h4 className="font-black text-white mb-2">Performance Reports</h4>
                  <p className="text-slate-500 text-sm">Detailed attendance and tactical engagement metrics for directors.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[4rem] border border-white/10 p-12 shadow-2xl">
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="h-32 w-12 bg-purple-500/20 rounded-t-xl border-t-2 border-purple-500"></div>
                  <div className="h-48 w-12 bg-purple-500/40 rounded-t-xl border-t-2 border-purple-500"></div>
                  <div className="h-24 w-12 bg-purple-500/10 rounded-t-xl border-t-2 border-purple-500"></div>
                  <div className="h-56 w-12 bg-purple-600 rounded-t-xl border-t-2 border-purple-400"></div>
                </div>
                <div className="h-px bg-white/10"></div>
                <p className="text-center text-slate-500 font-black text-xs uppercase tracking-widest">Growth Analytics Enabled</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Core Capabilities */}
      <SectionWrapper className="bg-slate-900/20">
        <div className="mb-16">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none uppercase">Core <br /><span className="gradient-text">Capabilities.</span></h2>
        </div>

        <div className="space-y-20">
          <CapabilitySection
            subtitle="Management"
            title="CLUB & TEAM LOGISTICS"
            description="Enterprise-grade roster management that scales with your organization."
            features={['Multi-squad dashboard', 'Automated parent notifications', 'Health & Injury tracking', 'Centralized database']}
            image="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200"
          />

          <CapabilitySection
            subtitle="Tactics"
            title="INTERACTIVE TRAINING"
            description="Our patented real-time tactical board turns passive observation into active learning."
            features={['Multiplayer positional sync', 'Animated drill library', 'Live session recording', 'Cross-platform support']}
            image="https://images.unsplash.com/photo-1526232762682-d2f5f714d23a?auto=format&fit=crop&q=80&w=1200"
            isReversed
          />

          <CapabilitySection
            subtitle="Insights"
            title="DEVELOPMENT TRACKING"
            description="Transform subjective scouting into objective, data-driven player development."
            features={['Dynamic Player CVs', 'Tactical IQ assessment', 'Attendance heatmaps', 'Scouting API access']}
            image="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=1200"
          />
        </div>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default Platform;
