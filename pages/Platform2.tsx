import React, { useState, useEffect, useRef } from 'react';
import { 
  SectionWrapper, 
  GradientBackground, 
  CTASection, 
  FeatureCard 
} from '../components/UI.tsx';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Network, 
  Users, 
  Target, 
  MousePointer2, 
  BarChart3, 
  Clock, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Workflow, 
  Search, 
  ChevronRight, 
  Shield, 
  X, 
  Check, 
  Monitor, 
  LayoutDashboard, 
  Calendar, 
  MessageSquare, 
  ClipboardList, 
  FileText, 
  LineChart,
  Play,
  History,
  Smartphone
} from 'lucide-react';

/**
 * SEO KEYWORDS (For context): 
 * Sports team management software, Interactive tactical training platform, 
 * Player development system, Remote interactive training.
 */

const Platform2: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  // State for Section 2 Timeline
  const [activeStep, setActiveStep] = useState(0);
  const [isStepAutoPlaying, setIsStepAutoPlaying] = useState(true);
  const stepTimerRef = useRef<number | null>(null);

  const pillarItems = [
    { 
      title: "MANAGEMENT", 
      icon: <Layers />, 
      tag: "The Foundation",
      display: {
        items: [
          "🏀 Roster information", 
          "🏀 Team Management", 
          "🏀 Schedule", 
          "🏀 Live Game", 
          "🏀 Result", 
          "🏀 Team Chat"
        ],
        image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1200",
        accent: "from-blue-500 to-cyan-500"
      }
    },
    { 
      title: "TRAINING", 
      icon: <Zap />, 
      tag: "The Engine",
      display: {
        items: [
          "🏉 Interactive, multiplayer tactical sessions", 
          "🏉 Interactive Remote Training", 
          "🏉 Interactive Ai Squad Training", 
          "🏉 Visual, intuitive learning environment"
        ],
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200",
        accent: "from-cyan-400 to-blue-600"
      }
    },
    { 
      title: "DEVELOPMENT", 
      icon: <TrendingUp />, 
      tag: "The Future",
      display: {
        items: [
          "🏒 Auto-generated player CVs", 
          "🏒 Individual development plans", 
          "🏒 Progress reports"
        ],
        image: "https://images.unsplash.com/photo-1510051644265-934cb9742558?auto=format&fit=crop&get=80&w=1200",
        accent: "from-purple-500 to-pink-500"
      }
    },
    { 
      title: "ALL-IN-ONE SOLUTION", 
      icon: <LayoutDashboard />, 
      tag: "TEAM SPORT PLATFORM",
      display: {
        items: [
          "⚽ Built for mobile and web", 
          "⚽ Remote-ready by design", 
          "⚽ Football-first, multi-sport ready"
        ],
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200",
        accent: "from-emerald-500 to-teal-500"
      }
    }
  ];

  // Section 2 Timeline Steps Data
  const timelineSteps = [
    {
      id: "before",
      label: "Before Training or Match",
      navLabel: "Before",
      headline: "Plan. Prepare. Align.",
      body: "Coaches plan sessions, organize schedules, and prepare tactical content in advance. Interactive remote sessions ensure every player understands the plan before stepping onto the pitch.",
      bullets: ["Session & match planning", "Tactical visualization", "Pre-training remote alignment"],
      icon: <Calendar className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1200",
      color: "blue"
    },
    {
      id: "during",
      label: "During Training",
      navLabel: "During",
      headline: "Train Together — Anywhere.",
      body: "Coaches and players interact in real time through a shared tactical environment. Tactics become a two-way conversation — not one-way instruction.",
      bullets: ["Live multiplayer tactical sessions", "Real-time interaction", "Visual, intuitive learning"],
      icon: <MousePointer2 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200",
      color: "cyan",
      isHighlight: true
    },
    {
      id: "after",
      label: "After Training or Match",
      navLabel: "After",
      headline: "Review. Learn. Improve.",
      body: "Every session and match becomes learning data. Players review concepts, coaches track understanding, and development builds over time.",
      bullets: ["Session review & feedback", "Tactical understanding history", "Participation & performance logs"],
      icon: <History className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1510051644265-934cb9742558?auto=format&fit=crop&get=80&w=1200",
      color: "purple"
    },
    {
      id: "remote",
      label: "Remote & Hybrid",
      navLabel: "Remote",
      headline: "Stay Aligned — Even Off the Pitch.",
      body: "When weather, travel, or schedules disrupt in-person training, VTAC keeps teams connected through virtual locker rooms and interactive boards.",
      bullets: ["Virtual tactical sessions", "Hybrid training support", "No disruption to learning"],
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200",
      color: "indigo"
    }
  ];

  // Section 1 Timer
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % pillarItems.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  // Section 2 Step Timer (5 seconds)
  useEffect(() => {
    if (isStepAutoPlaying) {
      stepTimerRef.current = window.setInterval(() => {
        setActiveStep((prev) => (prev + 1) % timelineSteps.length);
      }, 5000);
    }
    return () => {
      if (stepTimerRef.current) clearInterval(stepTimerRef.current);
    };
  }, [isStepAutoPlaying, timelineSteps.length]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const handleSelectStep = (index: number) => {
    setActiveStep(index);
    setIsStepAutoPlaying(false);
  };

  return (
    <div className="bg-slate-950 text-white selection:bg-cyan-500/30">
      {/* 1. Platform Overview: One Connected System */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
        <GradientBackground />
        
        {/* Subtle schematic background element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-500/20 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-6xl flex flex-col items-center">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom-4 duration-1000 mb-12">
            <Cpu className="w-4 h-4" />
            <span>Unified Sports Intelligence Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] text-white uppercase italic">
            THE BRAIN <br />
            <span className="gradient-text">OF THE TEAM.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-400 font-medium max-w-4xl mx-auto leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 mt-12">
            One connected ecosystem unifying <span className="text-white">Management</span>, <span className="text-white">Training</span>, and <span className="text-white">Development</span> into a single, high-performance workflow.
          </p>

          {/* LARGE TV FRAME WINDOW (Rectangular Widescreen) */}
          <div className="mt-16 w-full max-w-5xl relative group px-4 md:px-0 animate-in fade-in zoom-in-95 duration-1000 delay-300">
             {/* Dynamic Glow based on selection */}
             <div className={`absolute -inset-10 md:-inset-20 bg-gradient-to-br ${pillarItems[activeIndex].display.accent} blur-[120px] rounded-full opacity-20 transition-all duration-1000`}></div>
             
             {/* TV Outer Frame - Sharper edges for TV look */}
             <div className="relative p-1 md:p-1.5 bg-slate-800 rounded-lg md:rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] border border-slate-700/50 w-full overflow-hidden z-10">
                {/* TV Bezel */}
                <div className="relative bg-black rounded-sm md:rounded-md overflow-hidden aspect-video border-[4px] md:border-[12px] border-slate-900 shadow-inner">
                   
                   {/* Background Image / Pattern */}
                   <div className="absolute inset-0 overflow-hidden">
                      {pillarItems.map((item, idx) => (
                        <div key={idx} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeIndex === idx ? 'opacity-40 scale-100' : 'opacity-0 scale-110'}`}>
                           <img src={item.display.image} className="w-full h-full object-cover" alt={item.title} />
                           <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-transparent"></div>
                        </div>
                      ))}
                   </div>

                   {/* Dashboard Content */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 md:p-16 text-center">
                      <div className="max-w-4xl w-full">
                        {pillarItems.map((item, idx) => (
                          <div key={idx} className={`transition-all duration-700 ${activeIndex === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95 absolute inset-0 flex flex-col items-center justify-center'}`}>
                            {/* Content List */}
                            <div className="flex flex-col items-center gap-1.5 sm:gap-3 md:gap-5">
                              {item.display.items.map((point, pIdx) => (
                                <div key={pIdx} className="transition-all duration-300 transform">
                                  <span className="text-[9px] xs:text-xs sm:text-base md:text-2xl font-medium leading-tight text-white uppercase tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                                    {point}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* TV Overlay UI */}
                   <div className="absolute top-6 right-8 hidden md:flex items-center gap-6">
                      <div className="flex items-center gap-2 text-white/40">
                        <Activity className="w-4 h-4 text-green-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest">System Live</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40">
                        <Network className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Sync Active</span>
                      </div>
                   </div>
                </div>

                {/* TV Bottom Indicator */}
                <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2">
                   <div className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full transition-all duration-500 ${activeIndex === 0 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]' : activeIndex === 1 ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]' : activeIndex === 2 ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,1)]' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]'}`}></div>
                </div>
             </div>
             
             {/* TV Stand / Reflection Effect */}
             <div className="w-3/5 h-2 bg-gradient-to-b from-slate-700 to-transparent blur-xl mx-auto -mt-1 rounded-full opacity-30"></div>
          </div>

          {/* 4 Smaller Horizontal Cards below TV */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 w-full max-w-6xl px-4 md:px-0 mb-20 relative z-20">
            {pillarItems.map((item, i) => (
              <button 
                key={i} 
                onClick={() => handleSelect(i)}
                className={`group relative flex items-center gap-5 glass-card p-4 md:p-5 rounded-[2rem] border transition-all duration-500 overflow-hidden text-left ${
                  activeIndex === i 
                  ? `border-white/20 bg-white/10 scale-105 shadow-2xl` 
                  : 'border-white/5 opacity-50 hover:opacity-100 hover:border-white/10 hover:bg-white/5'
                }`}
              >
                {/* Active Indicator Line */}
                {activeIndex === i && isAutoPlaying && (
                  <div className="absolute bottom-0 left-4 right-4 h-1 overflow-hidden rounded-full">
                    <div className={`h-full bg-gradient-to-r ${item.display.accent} animate-[progress_4s_linear_infinite]`}></div>
                  </div>
                )}

                <div className={`absolute -right-2 -top-2 w-16 h-16 rounded-full blur-xl transition-all ${activeIndex === i ? 'bg-cyan-500/20' : 'bg-white/5'}`}></div>
                
                {/* Icon on the Left */}
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${activeIndex === i ? item.display.accent : 'from-slate-700 to-slate-800'} rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-all duration-500`}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6 md:w-7 h-7' })}
                </div>
                
                {/* Wording on the Right */}
                <div className="flex flex-col">
                  <h4 className={`text-sm md:text-base font-black italic uppercase tracking-tighter leading-none mb-1 transition-colors ${activeIndex === i ? 'text-white' : 'text-slate-400'}`}>{item.title}</h4>
                  <p className={`font-black uppercase tracking-widest text-[8px] md:text-[9px] opacity-80 leading-none ${activeIndex === i ? 'text-cyan-400' : 'text-slate-500'}`}>{item.tag}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 2. HOW VTAC WORKS — TIMELINE + INTERACTIVE FLOW */}
      <SectionWrapper id="how-it-works" className="bg-slate-900/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full glass-card text-purple-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Workflow className="w-3 h-3" />
              <span>two-way learning experience — not passive instruction</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-6">
              <span className="gradient-text block">How VTAC Manager</span>
              <span className="text-white block">Works</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-lg font-medium">
              From preparation to performance — all in one connected workflow.
            </p>
          </div>

          {/* Content Panel: Split 40 / 60 */}
          <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-center min-h-[400px]">
            {/* Left Panel: Text Content (40%) */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700" key={`text-${activeStep}`}>
              <div className="space-y-4">
                <span className={`inline-block text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400`}>
                  {timelineSteps[activeStep].label}
                </span>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none gradient-text transition-all duration-700">
                  {timelineSteps[activeStep].headline}
                </h3>
              </div>
              
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-cyan-500/50 pl-6 py-1 transition-all duration-700">
                {timelineSteps[activeStep].body}
              </p>

              <div className="grid gap-4">
                {timelineSteps[activeStep].bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 transition-colors">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px] md:text-xs">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Visual Stack (Tablet + Moved Timeline Nav) */}
            <div className="flex flex-col gap-10 w-full animate-in fade-in zoom-in-95 duration-700 delay-150">
              
              {/* TABLET MOCKUP (4:3 Ratio) */}
              <div className="relative group h-full w-full">
                {/* Hardware Frame Styling (Tablet ratio 4:3) */}
                <div className={`absolute -inset-10 bg-${timelineSteps[activeStep].color}-500/10 blur-[100px] rounded-full transition-opacity duration-1000`}></div>
                
                {/* Outer Tablet Shell - Frame padding stays stationary */}
                <div className={`relative p-0.5 md:p-1 bg-slate-800 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.8)] flex flex-col transition-all duration-700 overflow-hidden ${timelineSteps[activeStep].isHighlight ? 'shadow-[0_0_50px_rgba(34,211,238,0.2)]' : ''}`}>
                   {/* Internal Hardware Detailing */}
                   <div className="absolute top-0 left-12 md:left-24 w-8 md:w-12 h-1 bg-slate-700/50 rounded-b-full z-10"></div>
                   <div className="absolute top-0 left-24 md:left-40 w-8 md:w-12 h-1 bg-slate-700/50 rounded-b-full z-10"></div>
                   
                   {/* Screen Container (4:3 Ratio) */}
                   <div className="relative bg-slate-950 rounded-[2.3rem] md:rounded-[3.3rem] overflow-hidden aspect-[4/3] border-[2px] md:border-[5px] border-slate-950 shadow-inner">
                      {/* Screen Camera Notch (Top center) */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/5 rounded-full mt-1 z-30 flex items-center justify-center">
                         <div className="w-1 h-1 bg-blue-500/30 rounded-full"></div>
                      </div>

                      {/* Auto-sliding Loop for Tablet Content */}
                      {timelineSteps.map((step, idx) => (
                        <div 
                          key={`img-${step.id}`}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeStep === idx ? 'opacity-60' : 'opacity-0'}`}
                        >
                           <img 
                             src={step.image} 
                             className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${activeStep === idx ? 'scale-105' : 'scale-100'}`} 
                             alt={step.headline} 
                           />
                        </div>
                      ))}

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Step Specific UI Overlays with Smooth Fading */}
                      {timelineSteps.map((step, idx) => (
                        <div 
                          key={`overlay-${step.id}`} 
                          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${activeStep === idx ? 'opacity-100' : 'opacity-0'}`}
                        >
                           {idx === 0 && (
                              <div className="absolute top-8 right-8 glass-card p-5 rounded-xl border-white/20 animate-in fade-in slide-in-from-top-4 duration-1000">
                                 <div className="flex items-center gap-3">
                                   <Calendar className="w-4 h-4 text-blue-400" />
                                   <p className="text-[9px] font-black uppercase tracking-widest text-blue-400">Tactical Drill Scheduled</p>
                                 </div>
                              </div>
                           )}
                           {idx === 1 && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="glass-card p-8 rounded-[2rem] text-center border-cyan-500/30 scale-100 shadow-[0_0_50px_rgba(34,211,238,0.3)] animate-in zoom-in-90 duration-700">
                                    <div className="flex items-center gap-3 mb-4 justify-center">
                                       <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                                       <span className="text-[10px] font-black uppercase tracking-widest text-white">Live Multiplayer Engine</span>
                                    </div>
                                    <div className="flex -space-x-2.5 justify-center mb-5">
                                       {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 shadow-xl"></div>)}
                                    </div>
                                    <div className="flex items-center gap-2 justify-center text-cyan-400">
                                       <MousePointer2 className="w-4 h-4 animate-bounce" />
                                       <span className="text-[9px] font-black uppercase tracking-widest">Real-time Positional Sync</span>
                                    </div>
                                 </div>
                              </div>
                           )}
                           {idx === 2 && (
                              <div className="absolute bottom-8 left-8 right-8 flex gap-4 animate-in slide-in-from-bottom-8 duration-1000">
                                 <div className="flex-1 h-20 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 flex flex-col justify-end">
                                    <div className="h-full w-full flex items-end gap-1.5">
                                       <div className="h-[40%] flex-1 bg-purple-500/30 rounded-sm"></div>
                                       <div className="h-[70%] flex-1 bg-purple-500/50 rounded-sm"></div>
                                       <div className="h-[90%] flex-1 bg-purple-500/80 rounded-sm"></div>
                                    </div>
                                    <p className="text-[7px] font-black uppercase tracking-widest text-purple-400 mt-2">Tactical Retention Up 40%</p>
                                 </div>
                              </div>
                           )}
                           {idx === 3 && (
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                 <div className="relative">
                                   <div className="absolute inset-0 bg-indigo-500/20 blur-2xl animate-pulse rounded-full"></div>
                                   <div className="relative glass-card p-5 rounded-full border-indigo-500/30 flex items-center gap-3">
                                      <Globe className="w-5 h-5 text-indigo-400 animate-spin-slow" />
                                      <span className="text-[9px] font-black uppercase tracking-widest text-white">Hybrid Cloud Sync</span>
                                   </div>
                                 </div>
                              </div>
                           )}
                        </div>
                      ))}
                   </div>
                   {/* Tablet Bottom Bar (Indicator) */}
                   <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-16 md:w-32 h-1 md:h-1.5 bg-white/10 rounded-full z-40"></div>
                </div>
              </div>

              {/* TIMELINE NAVIGATION (Moved below Tablet) */}
              <div className="relative w-full">
                {/* Background Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 hidden md:block"></div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                  {timelineSteps.map((step, idx) => (
                    <button
                      key={step.id}
                      onClick={() => handleSelectStep(idx)}
                      className={`group relative flex flex-col items-center gap-2 transition-all duration-500 ${activeStep === idx ? 'scale-105' : 'opacity-40 hover:opacity-100'}`}
                    >
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${activeStep === idx ? `bg-${step.color}-500 border-white/50 shadow-[0_0_15px_rgba(34,211,238,0.3)]` : 'bg-slate-900 border-white/5'}`}>
                        {React.cloneElement(step.icon as React.ReactElement, { className: `w-5 h-5 md:w-6 md:h-6 ${activeStep === idx ? 'text-white' : 'text-slate-500'}` })}
                      </div>
                      <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-colors ${activeStep === idx ? `text-${step.color}-400` : 'text-slate-500'}`}>
                        {step.navLabel}
                      </span>
                      {activeStep === idx && isStepAutoPlaying && (
                        <div className={`absolute -bottom-1 w-full h-0.5 overflow-hidden rounded-full`}>
                           <div className={`h-full bg-${step.color}-500 animate-[progress_5s_linear_infinite]`}></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. CORE CAPABILITIES SECTION */}
      <SectionWrapper id="core-capabilities" className="relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <LayoutDashboard className="w-4 h-4" />
            <span>Industrial-Grade Infrastructure</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] mb-6">
            CORE <br />
            <span className="gradient-text">CAPABILITIES.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-black tracking-widest uppercase">
            Everything you need to lead your team to mastery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Pillar 1: Management */}
          <div className="group relative bg-slate-900/40 p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 text-white">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-6 group-hover:text-blue-400 transition-colors">
              Club & Team <br />Logistics
            </h3>
            <p className="text-slate-400 font-bold leading-relaxed mb-8">
              Enterprise-grade roster and operations management that scales with clubs, academies, and multi-team organizations.
            </p>
            <div className="space-y-4 mt-auto">
              {[
                "Multi-squad & multi-role dashboard",
                "Automated parent & staff notifications",
                "Health, availability & injury tracking",
                "Centralized player database"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-xs font-black uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Tactics (Highlighted) */}
          <div className="group relative bg-slate-900/80 p-10 rounded-[3rem] border-2 border-cyan-500 shadow-[0_0_50px_rgba(34,211,238,0.1)] transition-all duration-500 scale-105 z-20 flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-cyan-500/30 whitespace-nowrap">
              Patented Technology
            </div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500 text-white">
              <Zap className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-6 group-hover:text-cyan-400 transition-colors">
              Interactive <br />Tactical Training
            </h3>
            <p className="text-slate-300 font-black leading-relaxed mb-8">
              Our patented real-time tactical board transforms passive observation into active, collaborative learning.
            </p>
            <div className="space-y-4 mt-auto">
              {[
                "Multiplayer real-time positional sync",
                "Animated drill & formation libraries",
                "Live & asynchronous session recording",
                "Seamless cross-platform (mobile & web)"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                    <MousePointer2 className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                  </div>
                  <span className="text-white text-[13px] font-black uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 rounded-[3rem]"></div>
          </div>

          {/* Pillar 3: Insights */}
          <div className="group relative bg-slate-900/40 p-10 rounded-[3rem] border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 text-white">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-6 group-hover:text-purple-400 transition-colors">
              Player Development <br />& Tracking
            </h3>
            <p className="text-slate-400 font-bold leading-relaxed mb-8">
              Turn subjective observations into objective, data-driven player development across seasons.
            </p>
            <div className="space-y-4 mt-auto">
              {[
                "Dynamic player CVs & development profiles",
                "Tactical IQ & assessment engine",
                "Attendance & participation heatmaps",
                "Scouting & data access via API"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-slate-300 text-xs font-black uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Why VTAC: Thought Leadership */}
      <SectionWrapper className="bg-slate-900/30">
        <div className="grid lg:grid-cols-2 gap-24 items-stretch">
          <div className="flex flex-col justify-center space-y-12 py-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-black tracking-tight uppercase italic leading-none pr-8">
                WHY VTAC <br /><span className="gradient-text inline-block">MATTERS NOW</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic border-l-4 border-cyan-500 pl-8">
                Traditional logistics tools are failing modern athletes. We bridge the gap between "Organization" and "Excellence."
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-red-500 font-black uppercase tracking-[0.2em] text-sm">
                  <X className="w-5 h-5" />
                  The Problem: Static Learning
                </div>
                <p className="text-slate-500 font-bold leading-relaxed text-lg">
                  WhatsApp groups, PDF playbooks, and static video reviews lead to a 40% drop in tactical retention. Modern athletes learn by doing, not just watching.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-cyan-400 font-black uppercase tracking-[0.2em] text-sm">
                  <Check className="w-5 h-5" />
                  The Solution: Interactive Mastery
                </div>
                <p className="text-slate-300 font-bold leading-relaxed text-lg">
                  VTAC transforms passive observation into gamified interactivity. By many accounts, players develop spatial awareness 3x faster.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group flex flex-col h-full">
            <div className="absolute -inset-10 bg-cyan-500/10 blur-[120px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-1000"></div>
            <div className="relative h-full min-h-[500px] rounded-[2rem] bg-slate-900 border border-white/10 overflow-hidden shadow-3xl">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[15s]" 
                alt="Tactical Focus" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-slate-950/20 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-16 space-y-6">
                 <h4 className="text-3xl font-black uppercase italic leading-tight">The Future is Interactive.</h4>
                 <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Don't just manage the team. <br />Master the game.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Trust Signals: Patent & Athlete focus */}
      <SectionWrapper className="text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="inline-flex items-center space-x-4 px-6 py-2.5 rounded-full glass-card border-white/10 mx-auto">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400">
              More Than Team Management. <span className="text-white font-black">Real Interactive Training</span>
            </span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] text-white">
            BUILT FOR THE <br />
            <span className="gradient-text">MODERN ATHLETE.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed">
            Our infrastructure is engineered for professional clubs and elite academies who demand zero compromise on tactical integrity and organizational security.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 opacity-30 grayscale transition-all hover:grayscale-0 hover:opacity-100 items-center">
            {['PRO ACADEMY', 'NATIONAL ORG', 'ELITE LEAGUE', 'GLOBAL CLUB'].map((logo, i) => (
              <div key={i} className="text-xl md:text-3xl font-black italic tracking-tighter uppercase border-b border-white/10 pb-4">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. REDESIGNED CTA SECTION */}
      <SectionWrapper id="cta-redesign" className="pb-32 overflow-visible">
        <div className="relative group max-w-7xl mx-auto">
          {/* Immersive Stadium Radial Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none -z-10 group-hover:bg-purple-500/20 transition-colors duration-1000"></div>
          
          {/* Main Container */}
          <div className="relative bg-slate-900/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 border border-white/10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] flex flex-col items-center text-center">
            {/* Animated Grid Background Layer */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white italic uppercase pr-4">
                READY FOR THE <br />
                <span className="gradient-text inline-block pr-10">NEXT LEVEL?</span>
              </h2>
              
              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium leading-tight italic border-x border-white/5 px-8 py-2">
                Join the elite organizations redefining training standards with <span className="text-white font-black">VTAC Manager.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6">
                {/* Primary Button */}
                <button className="group/btn relative overflow-hidden bg-white text-black text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(34,211,238,0.2)] flex items-center justify-center">
                  <span className="relative z-10">Book a Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </button>
                
                {/* Secondary Button */}
                <button className="relative overflow-hidden glass-card text-white border border-white/20 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white/10 transition-all active:scale-95 group/sec flex items-center justify-center">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Trial <ChevronRight className="w-5 h-5 group-hover/sec:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-cyan-500/20 to-transparent blur-3xl opacity-50"></div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Platform2;