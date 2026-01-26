
import React from 'react';
import { SectionWrapper, FeatureCard, CTASection, GradientBackground } from '../components/UI.tsx';
import { Target, Zap, TrendingUp, Users, Play, Shield, Monitor } from 'lucide-react';

const Football: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <header className="relative pt-16 pb-10 overflow-hidden text-center px-6">
        <GradientBackground />
        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <Play className="w-3 h-3 fill-blue-400" />
            <span>Football-First Architecture</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
            SMART <br />
            <span className="gradient-text">FOOTBALL.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 font-medium max-w-3xl mx-auto leading-tight">
            Designed specifically for the beautiful game. From grassroots to elite academy systems, VTAC provides the ultimate training edge.
          </p>
          <div className="pt-8">
            <button className="bg-white text-black text-xl px-16 py-6 rounded-full font-black hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-400/20">
              Get Football Demo
            </button>
          </div>
        </div>
      </header>

      {/* Visual Break */}
      <SectionWrapper className="bg-slate-950">
        <div className="relative group max-w-6xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[4rem] blur opacity-20"></div>
          <div className="relative bg-slate-900 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl aspect-video">
             <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200" alt="Football Tactics Dashboard" className="w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-10 rounded-[3rem] text-center border-white/20">
                   <h4 className="text-3xl font-black mb-4">MATCH DAY ENGINE</h4>
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Interactive Set-Piece Planning</p>
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Use Cases */}
      <SectionWrapper className="bg-slate-900/40">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6">OPTIMIZED FOR <br />VICTORY.</h2>
          <p className="text-xl text-slate-400">Every aspect of the platform is tuned for tactical excellence on the pitch.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Set Piece Planning" 
            description="Animated workflows for corners, free kicks, and throw-ins with shared player views."
            tag="Strategic"
          />
          <FeatureCard 
            title="Academy Pathways" 
            description="Track transition from U10 to first team with consistent tactical data across squads."
            tag="Growth"
          />
          <FeatureCard 
            title="Position Mastery" 
            description="Specific positional modules for training everything from goalkeepers to false nines."
            tag="Specialized"
          />
          <FeatureCard 
            title="Remote Match Review" 
            description="Review weekend game clips together on a virtual board with real-time annotations."
            tag="Analysis"
          />
        </div>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default Football;
