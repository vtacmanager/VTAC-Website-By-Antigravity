import React, { useState, useEffect, useRef } from 'react';
import { 
  SectionWrapper, 
  FeatureCard, 
  GradientBackground
} from '../components/UI.tsx';
import { 
  Check, 
  X, 
  Zap, 
  Shield, 
  Layout, 
  Users, 
  Smartphone, 
  Globe, 
  ArrowRight, 
  MousePointer2, 
  Lock, 
  Trophy, 
  Activity, 
  Target, 
  Flag, 
  Clock, 
  Workflow, 
  TrendingUp, 
  AlertCircle, 
  Sparkles, 
  Lightbulb, 
  ChevronRight, 
  Monitor, 
  Tablet as TabletIcon,
  Settings,
  Dribbble as BallIcon,
  BarChart3,
  Video
} from 'lucide-react';

// Sport Icons for Bullet Points
const SportIcons = {
  Football: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20M7 7l10 10M7 17L17 7" />
    </svg>
  ),
  Basketball: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20M2 12a15.3 15.3 0 0 1 20 0" />
      <path d="M7 3.3a14 14 0 0 1 0 17.4M17 3.3a14 14 0 0 0 0 17.4" />
    </svg>
  ),
  AmFootball: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
      <path d="M2.5 12h19M12 2v20M5 5l14 14M19 5L5 19" />
      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
};

const SportsMarquee: React.FC = () => {
  const sports = [
    { 
      name: 'Football', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20M7 7l10 10M7 17L17 7" />
        </svg>
      )
    },
    { 
      name: 'Basketball', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20M2 12a15.3 15.3 0 0 1 20 0" />
          <path d="M7 3.3a14 14 0 0 1 0 17.4M17 3.3a14 14 0 0 0 0 17.4" />
        </svg>
      )
    },
    { 
      name: 'Rugby', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 2C7 2 2 7 2 12s5 10 10 10 10-5 10-10S17 2 12 2z" transform="rotate(-45 12 12) scale(1.1, 0.7)" />
          <path d="M12 8v8M9 12h6" transform="rotate(-45 12 12)" />
        </svg>
      )
    },
    { 
      name: 'Am. Football', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M2.5 12h19M12 2v20M5 5l14 14M19 5L5 19" />
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.1" />
        </svg>
      )
    },
    { 
      name: 'Hockey', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <ellipse cx="12" cy="15" rx="8" ry="3" />
          <path d="M4 15v-3c0-1.7 3.6-3 8-3s8 1.3 8 3v3" />
          <ellipse cx="12" cy="12" rx="8" ry="3" />
        </svg>
      )
    },
    { 
      name: 'Volleyball', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2c4 4 4 16 0 20M2 12c4 4 16 4 20 0M5.5 5.5l13 13M18.5 5.5l-13 13" />
        </svg>
      )
    },
    { 
      name: 'Baseball', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a12 12 0 0 0-8 18M12 2a12 12 0 0 1 8 18" />
          <path d="M6 10l1-1M5 13l1-1M6 16l1-1M17 10l1-1M18 13l1-1M17 16l1-1" />
        </svg>
      )
    },
    { 
      name: 'Tennis', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2v20M5 5l14 14M19 5L5 19" />
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.1" />
        </svg>
      )
    },
  ];

  const doubledSports = [...sports, ...sports];

  return (
    <div className="w-full py-6 overflow-hidden relative mask-gradient opacity-20 hover:opacity-40 transition-opacity duration-500">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {doubledSports.map((sport, index) => (
          <div key={index} className="flex items-center space-x-4 mx-12">
            <span className="text-slate-400">{sport.icon}</span>
            <span className="text-slate-500 font-black uppercase tracking-[0.4em] text-sm">
              {sport.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const manifestoItems = [
  { 
    icon: "🧩", 
    title: '1. ONE UNIFIED PLATFORM', 
    desc: 'Replace fragmented tools for scheduling, communication, attendance, live game report and record, and tactics with a single unified system.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    icon: "🌍", 
    title: '2. REMOTE-READY BY DESIGN', 
    desc: 'When weather or conflicts disrupt sessions, VTAC keeps teams aligned through interactive, multiplayer tactical training.',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    icon: "📈", 
    title: '3. PLAYER DEVELOPMENT AT SCALE', 
    desc: 'Automatically build player histories and development records across seasons — not just individual sessions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    icon: "🔗", 
    title: '4. STRONGER TEAMS, LOWER DROP-OFF', 
    desc: 'Engagement drives retention. VTAC helps teams stay connected, aligned, and committed long-term.',
    image: 'https://images.unsplash.com/photo-1526232762682-d2f5f714d23a?auto=format&fit=crop&q=80&w=1200'
  }
];

const managementStages = [
  {
    id: 'problem',
    title: 'The Problem',
    icon: <AlertCircle className="w-6 h-6 md:w-8 md:h-8" />,
    color: 'red',
    accent: 'bg-red-500/10 text-red-500 border-red-500/20',
    desc: 'Teams lose valuable time to administrative work, scatter training data across disconnected tools.',
    image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1600',
    details: 'Chaotic workflows lead to a 40% reduction in tactical retention among academy players.',
    tags: ['Fragmented Tools', 'Communication Gaps', 'Manual Tracking']
  },
  {
    id: 'solution',
    title: 'Our Solution',
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
    color: 'cyan',
    accent: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    desc: 'VTAC brings club operations and interactive tactical training into one seamless platform.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1600',
    details: 'A unified digital home for your club philosophy, accessible anywhere through our patented engine.',
    tags: ['Unified Dashboard', 'Real-time Sync', 'Patented Engine']
  },
  {
    id: 'outcome',
    title: 'The Outcome',
    icon: <Trophy className="w-6 h-6 md:w-8 md:h-8" />,
    color: 'purple',
    accent: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    desc: 'More time for coaching. Clearer tactical understanding. Stronger team performance supported by data.',
    image: 'https://images.unsplash.com/photo-1510051644265-934cb9742558?auto=format&fit=crop&get=80&w=1600',
    details: 'Elite performance standards achieved through measurable growth and consistent tactical alignment.',
    tags: ['Measurable Growth', 'Performance Edge', 'Coaching Mastery']
  }
];

const coverageItems = [
  {
    id: 'ops',
    title: 'Club & Academy Operations',
    icon: <Settings className="w-10 h-10 md:w-16 md:h-16" />,
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?auto=format&fit=crop&get=80&w=1600',
    features: [
      'Multiteam and multi-role management',
      'Training, match, and event scheduling',
      'Attendance and availability tracking',
      'Central announcements and communication',
      'Clear access for coaches, players, and parents'
    ]
  },
  {
    id: 'tactics',
    title: 'Interactive Tactical Training Engine',
    icon: <BallIcon className="w-10 h-10 md:w-16 md:h-16" />,
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&get=80&w=1600',
    features: [
      'Interactive, multiplayer tactical sessions',
      'Live or asynchronous access',
      'Visual, intuitive learning environment',
      'Session templates for repeatable training'
    ]
  },
  {
    id: 'dev',
    title: 'Player Development System',
    icon: <BarChart3 className="w-10 h-10 md:w-16 md:h-16" />,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1510051644265-934cb9742558?auto=format&fit=crop&get=80&w=1600',
    features: [
      'Auto-generated player CVs',
      'Individual development plans',
      'Progress and participation reports',
      'Tactical learning history across seasons'
    ]
  }
];

const comparisonRows = [
  { 
    feature: 'Unified Roster & Attendance', 
    vtac: true, 
    organizer: true, 
    video: false,
    img: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    feature: 'Interactive Remote Tactical Board', 
    vtac: true, 
    organizer: false, 
    video: false,
    img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    feature: 'Multiplayer Remote Real-time Training', 
    vtac: true, 
    organizer: false, 
    video: false,
    img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    feature: 'Dynamic Player Development CV', 
    vtac: true, 
    organizer: false, 
    video: true,
    img: 'https://images.unsplash.com/photo-1510051644265-934cb9742558?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    feature: 'Unified Communication', 
    vtac: true, 
    organizer: true, 
    video: false,
    img: 'https://images.unsplash.com/photo-1526232762682-d2f5f714d23a?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    feature: 'Video Analysis Suite', 
    vtac: true, 
    organizer: false, 
    video: true,
    img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    feature: 'All-in-One Solution', 
    vtac: true, 
    organizer: false, 
    video: false,
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' 
  }
];

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedStage, setSelectedStage] = useState(1);
  const [selectedCoverage, setSelectedCoverage] = useState(0);
  const [activeCompareIdx, setActiveCompareIdx] = useState(0);
  
  const [isAutoPlayingSection2, setIsAutoPlayingSection2] = useState(true);
  const [isAutoPlayingSection3, setIsAutoPlayingSection3] = useState(true);
  const [isAutoPlayingSection5, setIsAutoPlayingSection5] = useState(true);
  const [isAutoPlayingCompare, setIsAutoPlayingCompare] = useState(true);

  const autoPlayTimer2Ref = useRef<number | null>(null);
  const autoPlayTimer3Ref = useRef<number | null>(null);
  const autoPlayTimer5Ref = useRef<number | null>(null);
  const autoPlayCompareRef = useRef<number | null>(null);

  useEffect(() => {
    if (isAutoPlayingSection2) {
      autoPlayTimer2Ref.current = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % manifestoItems.length);
      }, 4000);
    }
    return () => {
      if (autoPlayTimer2Ref.current) clearInterval(autoPlayTimer2Ref.current);
    };
  }, [isAutoPlayingSection2]);

  useEffect(() => {
    if (isAutoPlayingSection3) {
      autoPlayTimer3Ref.current = window.setInterval(() => {
        setSelectedStage((prev) => (prev + 1) % managementStages.length);
      }, 4500);
    }
    return () => {
      if (autoPlayTimer3Ref.current) clearInterval(autoPlayTimer3Ref.current);
    };
  }, [isAutoPlayingSection3]);

  useEffect(() => {
    if (isAutoPlayingSection5) {
      autoPlayTimer5Ref.current = window.setInterval(() => {
        setSelectedCoverage((prev) => (prev + 1) % coverageItems.length);
      }, 4000);
    }
    return () => {
      if (autoPlayTimer5Ref.current) clearInterval(autoPlayTimer5Ref.current);
    };
  }, [isAutoPlayingSection5]);

  useEffect(() => {
    if (isAutoPlayingCompare) {
      autoPlayCompareRef.current = window.setInterval(() => {
        setActiveCompareIdx((prev) => (prev + 1) % comparisonRows.length);
      }, 4000);
    }
    return () => {
      if (autoPlayCompareRef.current) clearInterval(autoPlayCompareRef.current);
    };
  }, [isAutoPlayingCompare]);

  const handleManualSelect2 = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlayingSection2(false);
  };

  const handleManualSelect3 = (index: number) => {
    setSelectedStage(index);
    setIsAutoPlayingSection3(false);
  };

  const handleManualSelect5 = (index: number) => {
    setSelectedCoverage(index);
    setIsAutoPlayingSection5(false);
  };

  const handleManualCompare = (index: number) => {
    setActiveCompareIdx(index);
    setIsAutoPlayingCompare(false);
  };

  return (
    <div className="bg-slate-950 text-white selection:bg-cyan-500/30">
      {/* 1. Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-12 pb-6">
        <GradientBackground />
        <div className="relative z-10 max-w-6xl space-y-12">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>TEAM MANAGEMENT + INTERACTIVE REMOTE TACTICAL TRAINING</span>
          </div>
          <h1 className="font-black tracking-tighter text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 uppercase py-4">
            <span className="text-6xl md:text-[8rem] block leading-[0.9] mb-1">ONE PLATFORM</span>
            <span className="gradient-text text-3xl md:text-[4.5rem] block tracking-tight leading-[0.9]">SMARTER TEAM TRAINING</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-400 max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            VTAC Manager is an all-in-one platform for modern team sports. Train, manage, and develop <br className="hidden md:block" />
            your team through interactive remote tactical sessions — accessible on mobile and web — <br className="hidden md:block" />
            so coaches, players, and staff can stay connected anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <button className="bg-white text-black text-xl px-14 py-6 rounded-full font-black hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-cyan-500/20 uppercase">
              REQUEST DEMO
            </button>
            <button className="glass-card text-white text-xl px-14 py-6 rounded-full font-black hover:bg-white/10 transition-all border border-white/10 active:scale-95 uppercase">
              START FREE TRIAL
            </button>
          </div>
        </div>
        <div className="mt-12 w-full max-w-7xl relative group px-6 animate-in fade-in zoom-in-95 duration-1000 delay-500">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[4rem] blur-[60px] opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-slate-900/80 rounded-[3rem] border border-white/10 overflow-hidden aspect-video shadow-2xl">
            <div className="absolute -top-[7px] left-20 w-12 h-[8px] bg-slate-700 rounded-t-[4px] border-x border-t border-white/20 z-50 shadow-[0_-3px_5px_rgba(0,0,0,0.8)] transition-transform group-hover:-translate-y-[1px]"></div>
            <div className="absolute -top-[7px] left-36 w-12 h-[8px] bg-slate-700 rounded-t-[4px] border-x border-t border-white/20 z-50 shadow-[0_-3px_5px_rgba(0,0,0,0.8)] transition-transform group-hover:-translate-y-[1px]"></div>
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20" alt="Elite Stadium" />
            <div className="absolute inset-0 flex items-center justify-center p-10">
               <div className="glass-card p-12 rounded-[3rem] border-white/20 text-center space-y-6 max-w-md transform group-hover:scale-105 transition-transform duration-700">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl rotate-3">
                    <Layout className="text-white w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight italic uppercase italic">VTAC LIVE DASHBOARD</h3>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Real-time synchronization active</p>
               </div>
            </div>
          </div>
        </div>
        <SportsMarquee />
      </header>

      {/* 2. WhyVTAC (Manifesto) */}
      <SectionWrapper id="why-vtac" className="bg-slate-900/20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div className="space-y-10 flex flex-col">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full glass-card text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>THE END OF TOOLS FRAGMENTATION</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.05] uppercase">
                <span className="text-white">Why VTAC</span> <br className="hidden md:block" />
                <span className="gradient-text">Manager?</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-slate-300 font-bold leading-relaxed italic border-l-4 border-cyan-500 pl-6 py-2">
              Built from the ground up to solve the real challenges faced by modern teams.
            </p>
            <div className="grid gap-4 md:gap-4 mt-8 flex-grow">
              {manifestoItems.map((item, i) => (
                <button 
                  key={i} 
                  onClick={() => handleManualSelect2(i)} 
                  className={`group flex flex-col sm:flex-row items-center justify-center text-center gap-4 py-2 md:py-4 px-8 md:px-12 rounded-3xl border transition-all duration-500 ${activeIndex === i ? 'bg-gradient-to-r from-slate-800 to-purple-600/30 border-cyan-500/50 shadow-lg shadow-cyan-500/10 scale-[1.02] opacity-100' : 'bg-gradient-to-r from-slate-900 to-purple-900/20 border-white/5 opacity-60 hover:opacity-100 hover:border-white/20'}`}
                >
                  <span className="text-2xl md:text-3xl shrink-0 filter drop-shadow-md">{item.icon}</span>
                  <div className="space-y-0">
                    <h4 className={`font-black tracking-tight leading-tight uppercase text-base md:text-lg transition-colors ${activeIndex === i ? 'text-cyan-400' : 'text-white'}`}>{item.title}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
            {/* PHONE CONTAINER: SCALE INCREASED TO 280px */}
            <div className="relative group w-full max-w-[280px] animate-in fade-in slide-in-from-right-12 duration-1000">
               {/* Background Glow */}
               <div className="absolute -inset-10 bg-cyan-500/20 blur-[60px] rounded-full opacity-50 transition-all duration-1000 group-hover:opacity-80"></div>
               
               {/* Volume Buttons (Right Side) */}
               <div className="absolute -right-[3px] top-32 w-[4px] h-12 bg-slate-600 rounded-r-md z-0 shadow-[1px_0_2px_rgba(0,0,0,0.5)]"></div>
               <div className="absolute -right-[3px] top-48 w-[4px] h-12 bg-slate-600 rounded-r-md z-0 shadow-[1px_0_2px_rgba(0,0,0,0.5)]"></div>
               
               {/* REFINED FRAME: p-[5px] for "a bit thicker" look while remaining sleek */}
               <div className="relative p-[5px] bg-slate-700 rounded-[3rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-slate-600/50 w-full overflow-hidden z-10">
                  <div className="relative bg-slate-950 rounded-[2.7rem] overflow-hidden aspect-[9/19] shadow-inner">
                    {/* SCALED NOTCH */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-30 flex items-center justify-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
                       <div className="w-8 h-1 bg-white/5 rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 w-full h-full">
                      {manifestoItems.map((item, i) => (
                        <div key={i} className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${activeIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                          <img src={item.image} className="w-full h-full object-cover opacity-40 transition-transform duration-[15000ms]" alt={item.title} />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                          {/* Message Overlay on Phone Screen */}
                          <div className={`absolute inset-0 flex items-center justify-center p-6 text-center transition-all duration-700 delay-300 ${activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                             <p className="text-white font-bold text-[10px] leading-relaxed drop-shadow-lg uppercase tracking-wider bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                               {item.desc}
                             </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-6 left-2 right-2 z-40">
                       <div className="flex justify-between items-center bg-black/40 backdrop-blur-3xl px-2 py-2 rounded-2xl border border-white/10 relative">
                          <div className="absolute inset-y-1 bg-cyan-500/20 rounded-xl border border-cyan-500/30 transition-all duration-500 ease-out" style={{ left: `${activeIndex * 25}%`, marginLeft: '2px', marginRight: '2px', width: 'calc(25% - 4px)' }}></div>
                          {manifestoItems.map((item, i) => (
                            <button key={i} onClick={() => handleManualSelect2(i)} className={`relative z-10 flex-1 flex flex-col items-center justify-center py-3 rounded-md transition-all duration-500 ${activeIndex === i ? 'text-cyan-400' : 'text-slate-500'}`}>
                              {/* Increased Icon Size from 14px to 18px */}
                              <span className="text-[18px] font-black leading-none filter drop-shadow-md">{item.icon}</span>
                              {/* Removed numbers 01-04 as requested */}
                            </button>
                          ))}
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. More Than Management (Tablet) */}
      <SectionWrapper id="evolution" className="bg-slate-950">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse"></div>
            <span>Built for How Teams Train Today</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic text-center mx-auto">
            <span className="text-white block">More Than</span>
            <span className="gradient-text block">Management</span>
          </h2>
        </div>
        <div className="relative group max-w-7xl mx-auto px-2 md:px-0">
          <div className={`absolute -inset-x-20 -inset-y-10 bg-${managementStages[selectedStage].color}-500/10 blur-[150px] rounded-full transition-all duration-1000`}></div>
          <div className="relative p-1 md:p-3 bg-slate-800 rounded-[2rem] md:rounded-[4rem] shadow-[0_0_120px_rgba(0,0,0,0.7)] border border-slate-700 w-full transition-all duration-500">
             <div className="absolute -top-[3px] left-12 md:left-28 w-10 md:w-14 h-[4px] bg-slate-700 rounded-t-[2px] border-x border-t border-white/20 z-50 shadow-[0_-2px_3px_rgba(0,0,0,0.8)] transition-transform group-hover:-translate-y-[1px]"></div>
             <div className="absolute -top-[3px] left-24 md:left-44 w-10 md:w-14 h-[4px] bg-slate-700 rounded-t-[2px] border-x border-t border-white/20 z-50 shadow-[0_-2px_3px_rgba(0,0,0,0.8)] transition-transform group-hover:-translate-y-[1px]"></div>
             <div className="relative bg-slate-950 rounded-[1.8rem] md:rounded-[3.2rem] overflow-hidden aspect-[3/4] md:aspect-[16/10] border-[10px] md:border-[24px] border-slate-950 shadow-inner">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500/30 rounded-full mt-2 md:mt-3 z-30"></div>
                <div className="absolute inset-0 w-full h-full">
                  {managementStages.map((stage, idx) => (
                    <div key={stage.id} className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${selectedStage === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                      <img src={stage.image} className="w-full h-full object-cover opacity-60 transition-transform duration-[20000ms]" alt={stage.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                      <div className="absolute inset-0 p-4 md:p-12 flex flex-col">
                        <div className="mt-auto grid grid-cols-3 gap-2 md:gap-8 pb-2 md:pb-4">
                          {managementStages.map((navStage, navIdx) => (
                            <button key={navStage.id} onClick={() => handleManualSelect3(navIdx)} className={`group/btn relative text-left p-3 md:p-8 rounded-[1.2rem] md:rounded-[2rem] border transition-all duration-700 flex flex-col items-center md:items-start ${selectedStage === navIdx ? `bg-white/10 backdrop-blur-xl border-${navStage.color}-500/50 scale-[1.05]` : 'bg-black/40 border-white/5 hover:bg-white/5'}`}>
                              <div className={`w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 transition-transform duration-500 ${selectedStage === navIdx ? `bg-${navStage.color}-500 text-white shadow-xl` : 'bg-white/10 text-slate-400'}`}>
                                {React.cloneElement(navStage.icon as React.ReactElement<any>, { className: 'w-4 h-4 md:w-8 md:h-8' })}
                              </div>
                              <h5 className={`text-[10px] md:text-xl font-black mb-1 md:mb-2 uppercase tracking-tight italic transition-colors text-center md:text-left ${selectedStage === navIdx ? 'text-white' : 'text-slate-500'}`}>{navStage.title}</h5>
                              <p className={`hidden md:block text-xs font-bold leading-relaxed transition-colors line-clamp-2 ${selectedStage === navIdx ? 'text-slate-300' : 'text-slate-600'}`}>{navStage.desc}</p>
                              {selectedStage === navIdx && isAutoPlayingSection3 && (
                                <div className="absolute bottom-0 left-2 md:left-8 right-2 md:right-8 h-0.5 overflow-hidden rounded-full">
                                   <div className={`h-full bg-${navStage.color}-500 animate-[progress_4.5s_linear_infinite]`}></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-1.5 md:bottom-3 left-1/2 -translate-x-1/2 w-20 md:w-40 h-1 md:h-1.5 bg-white/10 rounded-full z-40"></div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Problem & Solution */}
      <SectionWrapper className="relative">
        <div className="text-center mb-16">
          <h2 className="font-black tracking-tighter uppercase flex flex-col items-center gap-2 md:gap-4 leading-none">
            <span className="text-5xl md:text-8xl text-white">OLD MESS</span>
            <span className="text-2xl md:text-4xl text-red-500">VS</span>
            <span className="text-5xl md:text-8xl gradient-text">VTAC FLOW</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900/40 p-12 rounded-[4rem] border border-red-500/10 space-y-10 group hover:bg-red-500/5 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform"><X className="w-8 h-8" /></div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter">The Fragmented Mess</h3>
            <ul className="space-y-6 text-slate-500 font-medium">
              {['Messy WhatsApp groups for comms', 'Spreadsheets for attendance', 'Static PDFs for tactical plans', 'No real-time player feedback'].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),0_0_10px_rgba(239,68,68,0.3)] shrink-0 border border-red-500/20"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900/40 p-12 rounded-[4rem] border border-cyan-500/20 space-y-10 group hover:bg-cyan-500/5 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter">VTAC Unified Flow</h3>
            <ul className="space-y-6 text-slate-300 font-bold">
              {[
                'Single dashboard for all comms',
                'Real-time automated attendance',
                'Interactive board sessions',
                'Patented instant synchronization'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),0_0_10px_rgba(34,211,238,0.3)] shrink-0 border border-cyan-500/20"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. What VTAC Manager Covers (NOTEBOOK DESIGN) */}
      <SectionWrapper id="coverage" className="bg-slate-950 overflow-visible">
        <div className="text-center mb-10 overflow-visible">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
            <span>Everything You Need to Run a High-Performance Team</span>
          </div>
          <h2 className="font-black uppercase flex flex-col items-center italic overflow-visible leading-[0.78] md:leading-[0.72] tracking-tighter">
            <span className="text-5xl md:text-8xl text-white">WHAT</span>
            <div className="relative overflow-visible">
              <span className="text-5xl md:text-8xl gradient-text whitespace-nowrap px-12 block py-0">VTAC MANAGER</span>
            </div>
            <span className="text-5xl md:text-8xl text-white">COVERS</span>
          </h2>
        </div>

        <div className="max-w-[105rem] mx-auto relative px-6">
           <div className={`absolute -inset-x-20 -inset-y-10 bg-${coverageItems[selectedCoverage].color}-500/5 blur-[120px] rounded-full transition-all duration-1000`}></div>
           
           <div className="relative mx-auto w-full transition-all duration-700">
              <div className="relative p-0.5 bg-slate-800 rounded-t-[2.5rem] md:rounded-t-[4rem] border-x border-t border-slate-700 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden transform scale-[1.05]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 md:w-60 h-4 md:h-5 bg-slate-950 rounded-b-xl z-30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500/20 rounded-full border border-blue-400/10 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                 </div>
                 
                 <div className="relative bg-black rounded-t-[2rem] md:rounded-t-[3.5rem] overflow-hidden aspect-[3.2/5] sm:aspect-[16/10] border-[2px] md:border-[3px] border-slate-950">
                    {coverageItems.map((item, idx) => (
                      <div key={item.id} className={`absolute inset-0 transition-all duration-1000 ease-out ${selectedCoverage === idx ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={item.image} className="w-full h-full object-cover opacity-50 transition-transform duration-[15000ms] scale-110" alt={item.title} />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-transparent opacity-80"></div>
                        
                        <div className="absolute top-8 md:top-16 left-6 md:left-20 max-w-2xl text-left z-20 pr-6">
                           <div className={`space-y-4 transition-all duration-1000 transform ${selectedCoverage === idx ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                              <h4 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-tight drop-shadow-2xl">
                                {item.title}
                              </h4>
                              <div className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                                {item.features.map((feature, fIdx) => (
                                  <p key={fIdx} className="text-[13px] md:text-2xl text-slate-100 font-bold drop-shadow-md leading-tight md:leading-relaxed flex items-start gap-3 md:gap-4">
                                    <span className="shrink-0 mt-1">
                                      {selectedCoverage === 0 && "⚽"}
                                      {selectedCoverage === 1 && "🏀"}
                                      {selectedCoverage === 2 && "🏈"}
                                    </span> 
                                    {feature}
                                  </p>
                                ))}
                              </div>
                           </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-4 md:bottom-10 px-4 md:px-32 z-30">
                          <div className="grid grid-cols-3 gap-2 md:gap-10">
                            {coverageItems.map((navItem, navIdx) => (
                              <button 
                                key={navItem.id} 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleManualSelect5(navIdx);
                                }}
                                className={`group/nav relative p-2 md:p-8 rounded-[1rem] md:rounded-[2rem] border transition-all duration-500 flex flex-col items-center justify-center text-center ${
                                  selectedCoverage === navIdx 
                                  ? `bg-white/10 backdrop-blur-xl border-${navItem.color}-500/50 scale-[1.05] shadow-2xl` 
                                  : 'bg-black/60 backdrop-blur-md border-white/5 opacity-50 hover:opacity-100'
                                }`}
                              >
                                <div className={`w-6 h-6 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-1 md:mb-3 transition-transform duration-500 ${selectedCoverage === navIdx ? `bg-${navItem.color}-500 text-white shadow-xl scale-110` : 'bg-white/5 text-slate-400'}`}>
                                  {React.cloneElement(navItem.icon as React.ReactElement<any>, { className: 'w-3 h-3 md:w-8 md:h-8' })}
                                </div>
                                <h5 className={`text-[6px] md:text-[14px] font-black uppercase tracking-tighter italic leading-none transition-colors ${selectedCoverage === navIdx ? 'text-white' : 'text-slate-500'}`}>
                                  {navItem.title}
                                </h5>
                                {selectedCoverage === navIdx && isAutoPlayingSection5 && (
                                  <div className="absolute bottom-0 left-2 right-2 h-0.5 overflow-hidden rounded-full">
                                    <div className={`h-full bg-${navItem.color}-500 animate-[progress_4s_linear_infinite]`}></div>
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative w-full h-4 md:h-6 bg-slate-800 shadow-[0_30px_70px_rgba(0,0,0,0.8)] border-x border-b border-slate-700/50 flex flex-col items-center transform scale-[1.05]" 
                   style={{ 
                     clipPath: 'polygon(0% 0%, 100% 0%, 130% 100%, -30% 100%)', 
                     backgroundImage: 'linear-gradient(to bottom, #1e293b, #0f172a)' 
                   }}>
                 <div className="absolute top-0 w-32 md:w-56 h-1.5 md:h-2 bg-slate-950/40 rounded-b-2xl border-x border-b border-white/5 shadow-inner"></div>
              </div>
           </div>
        </div>
      </SectionWrapper>

      {/* 6. Feature Summary */}
      <SectionWrapper className="bg-slate-900/30">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] border border-white/10">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
            <span className="uppercase">YOUR TEAM TRAINS SMARTER, PLAYS BETTER, AND GROWS TOGETHER — ON AND OFF THE PITCH</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-center leading-[0.85]">
            <span className="text-white block">More Than</span>
            <span className="gradient-text block">TRAINING</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Users className="w-8 h-8" />}
            title="Logistics Suite"
            tag="Management"
            description="Manage rosters, attendance, and player health profiles with enterprise-grade security."
          />
          <FeatureCard 
            icon={<MousePointer2 className="w-8 h-8" />}
            title="Tactical Sync"
            tag="Interactive"
            description="Patented multiplayer technology allowing real-time positional movement for players."
          />
          <FeatureCard 
            icon={<Smartphone className="w-8 h-8" />}
            title="Logistics"
            tag="Remote"
            description="Host tactical sessions from a tablet or phone. Remote training has never been this effective."
          />
          <FeatureCard 
            icon={<Target className="w-8 h-8" />}
            title="Growth Engine"
            tag="Player CV"
            description="Build long-term histories for player understanding and performance across every season."
          />
        </div>
      </SectionWrapper>

      {/* 7. Comparison Section */}
      <SectionWrapper>
        <div className="flex flex-col items-center mb-10 space-y-4">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] border border-white/10">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
            <span>Why We are Different</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-center leading-none">
            <span className="gradient-text pr-4">Compare the Edge</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          <div className="lg:col-span-7 rounded-[2rem] border border-white/10 bg-slate-900/40 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-full">
            <div className="w-full flex-grow">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 md:p-8 text-slate-400 uppercase tracking-[0.2em] text-[8px] md:text-[11px] font-black w-[45%]">
                      Advantage
                    </th>
                    <th className="p-2 md:p-6 text-center bg-cyan-500/5 w-[18%]">
                      <div className="flex flex-col items-center">
                        <span className="gradient-text font-black text-[7px] md:text-sm italic tracking-tighter uppercase leading-none">VTAC</span>
                      </div>
                    </th>
                    <th className="p-2 md:p-6 text-center text-slate-500 font-black text-[7px] md:text-[10px] italic tracking-tighter uppercase opacity-60 w-[18%]">
                      ORG
                    </th>
                    <th className="p-2 md:p-6 text-center text-slate-500 font-black text-[7px] md:text-[10px] italic tracking-tighter uppercase opacity-60 w-[18%]">
                      VIDEO
                    </th>
                  </tr>
                </thead>
                <tbody className="font-bold text-slate-300">
                  {comparisonRows.map((row, i) => (
                    <tr 
                      key={i} 
                      onClick={() => handleManualCompare(i)}
                      className={`group border-b border-white/5 cursor-pointer transition-all duration-300 ${activeCompareIdx === i ? 'bg-white/[0.05]' : 'hover:bg-white/[0.02]'}`}
                    >
                      <td className={`p-4 md:p-8 font-bold italic text-[9px] md:text-sm whitespace-normal leading-tight transition-colors ${activeCompareIdx === i ? 'text-cyan-400' : 'text-slate-300'}`}>
                        {row.feature}
                      </td>
                      <td className="p-2 md:p-6 text-center bg-cyan-500/[0.02] transition-colors">
                        <div className="flex justify-center">
                          <div className={`w-4 h-4 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_10px_rgba(34,211,238,0.3)] flex items-center justify-center text-white transition-transform ${activeCompareIdx === i ? 'scale-110 shadow-cyan-400/50' : ''}`}>
                            <Check className="w-2 h-2 md:w-4 md:h-4" strokeWidth={3} />
                          </div>
                        </div>
                      </td>
                      <td className="p-2 md:p-6 text-center">
                        <div className="flex justify-center">
                          {row.organizer ? (
                            <div className="w-4 h-4 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-500 opacity-60">
                              <Check className="w-2 h-2" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-red-500/10 bg-red-500/5 flex items-center justify-center text-red-500/30">
                              <X className="w-2 h-2" />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-2 md:p-6 text-center">
                        <div className="flex justify-center">
                          {row.video ? (
                            <div className="w-4 h-4 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-500 opacity-60">
                              <Check className="w-2 h-2" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-red-500/10 bg-red-500/5 flex items-center justify-center text-red-500/30">
                              <X className="w-2 h-2" />
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5 relative group flex justify-center items-center h-full min-h-[500px] lg:min-h-0">
            <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full opacity-40 group-hover:opacity-70 transition-all duration-1000"></div>
            
            <div className="relative w-full max-w-[360px] aspect-[9/14] lg:h-full bg-slate-800 rounded-[3.5rem] p-1 shadow-[0_0_120px_rgba(0,0,0,0.7)] border border-slate-700/50 flex flex-col group-hover:border-cyan-500/30 transition-all duration-700">
               
               <div className="absolute top-24 -right-[2px] flex flex-col gap-4 z-50">
                  <div className="w-[4px] h-12 bg-slate-600 rounded-l-md border-l border-white/10 shadow-[inset_1px_0_1px_rgba(0,0,0,0.4)] transition-transform group-hover:translate-x-[0.5px]"></div>
                  <div className="w-[4px] h-12 bg-slate-600 rounded-l-md border-l border-white/10 shadow-[inset_1px_0_1px_rgba(0,0,0,0.4)] transition-transform group-hover:translate-x-[0.5px]"></div>
               </div>

               <div className="relative flex-grow bg-slate-950 rounded-[3.2rem] overflow-hidden border-[2px] border-slate-950 shadow-inner">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-b-xl z-40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 mr-3 shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                    <div className="w-8 h-1.5 bg-white/5 rounded-full"></div>
                  </div>

                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    {comparisonRows.map((row, i) => (
                      <div key={i} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeCompareIdx === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                        <img 
                          src={row.img} 
                          className="w-full h-full object-cover opacity-60 transition-transform duration-[30000ms] ease-linear" 
                          alt={row.feature} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-30 p-6 pb-10 space-y-8 flex flex-col items-center">
                    <div className="min-h-[48px] flex items-center justify-center px-4 w-full">
                      <h4 className="text-sm md:text-xl font-black italic uppercase tracking-tighter text-cyan-400 text-center animate-in fade-in slide-in-from-bottom-2 duration-700 leading-tight drop-shadow-2xl">
                        {comparisonRows[activeCompareIdx].feature}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-4 justify-center">
                      {comparisonRows.map((_, i) => (
                        <button 
                          key={i}
                          onClick={() => handleManualCompare(i)}
                          className={`relative w-2.5 h-2.5 rounded-full transition-all duration-700 ${activeCompareIdx === i ? 'bg-cyan-400 scale-150 shadow-[0_0_20px_rgba(34,211,238,1)]' : 'bg-white/20 hover:bg-white/50'}`}
                        >
                          {activeCompareIdx === i && (
                            <span className="absolute -inset-2 rounded-full border border-cyan-400/50 animate-ping"></span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="w-32 h-1 bg-white/10 rounded-full mt-4 group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 8. REDESIGNED CTA SECTION - COPIED FROM PLATFORM2 SECTION 6 */}
      <SectionWrapper id="cta-home" className="pb-32 overflow-visible">
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
                <button className="group/btn relative overflow-hidden bg-white text-black text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(34,211,238,0.2)] flex items-center justify-center min-w-[200px]">
                  <span className="relative z-10">Book a Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </button>
                
                {/* Secondary Button */}
                <button className="relative overflow-hidden glass-card text-white border border-white/20 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white/10 transition-all active:scale-95 group/sec flex items-center justify-center min-w-[200px]">
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

export default Home;