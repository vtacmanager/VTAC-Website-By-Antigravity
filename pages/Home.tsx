import React, { useState, useEffect, useRef } from 'react';
import {
  SectionWrapper,
  FeatureCard,
  GradientBackground
} from '../components/UI.tsx';
import StickyScrollFeature from '../components/StickyScrollFeature.tsx';
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
  Video,
  Layers
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
      name: 'Lacrosse',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M2 22l10-10" />
          <path d="M12 12c2.5-2.5 6.5-2 8 1s-1 6-4 3" />
          <circle cx="17" cy="9" r="2" />
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
    <div className="w-full py-6 overflow-hidden relative mask-gradient opacity-60 hover:opacity-100 transition-opacity duration-500">
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
    icon: Layers,
    title: '1. ONE UNIFIED PLATFORM',
    desc: 'Replace fragmented tools for scheduling, communication, attendance, live game report and record, and tactics with a single unified system.',
    image: '/images/Section2-1.webp'
  },
  {
    icon: Globe,
    title: '2. REMOTE-READY BY DESIGN',
    desc: 'When weather or conflicts disrupt sessions, VTAC keeps teams aligned through interactive, multiplayer tactical training.',
    image: '/images/Section2-2.webp'
  },
  {
    icon: TrendingUp,
    title: '3. PLAYER DEVELOPMENT AT SCALE',
    desc: 'Automatically build player histories and development records across seasons — not just individual sessions.',
    image: '/images/Section2-3.webp'
  },
  {
    icon: Users,
    title: '4. STRONGER TEAMS, LOWER DROP-OFF',
    desc: 'Engagement drives retention. VTAC helps teams stay connected, aligned, and committed long-term.',
    image: '/images/Section2-4.webp'
  }
];

const managementStages = [
  {
    id: 'problem',
    title: 'The Problem',
    icon: <AlertCircle className="w-6 h-6 md:w-8 md:h-8" />,
    color: 'purple',
    accent: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    desc: 'Teams lose valuable time to administrative work, scatter training data across disconnected tools.',
    images: [
      '/images/Section3-1 1200X900.webp',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1200'
    ],
    details: 'Chaotic workflows lead to a 40% reduction in tactical retention among academy players.',
    tags: ['Fragmented Tools', 'Communication Gaps', 'Manual Tracking']
  },
  {
    id: 'solution',
    title: 'Our Solution',
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
    color: 'orange',
    accent: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    desc: 'VTAC brings club operations and interactive tactical training into one seamless platform.',
    images: [
      '/images/Section3-2 1200X900.webp',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200'
    ],
    details: 'A unified digital home for your club philosophy, accessible anywhere through our patented engine.',
    tags: ['Unified Dashboard', 'Real-time Sync', 'Patented Engine']
  },
  {
    id: 'outcome',
    title: 'The Outcome',
    icon: <Trophy className="w-6 h-6 md:w-8 md:h-8" />,
    color: 'green',
    accent: 'bg-green-500/10 text-green-400 border-green-500/20',
    desc: 'More time for coaching. Clearer tactical understanding. Stronger team performance supported by data.',
    images: [
      'https://images.unsplash.com/photo-1510051644265-934cb9742558?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1526232762682-d2f5f714d23a?auto=format&fit=crop&q=80&w=1200'
    ],
    details: 'Elite performance standards achieved through measurable growth and consistent tactical alignment.',
    tags: ['Measurable Growth', 'Performance Edge', 'Coaching Mastery']
  }
];

const coverageItems = [
  {
    id: 'ops',
    title: 'Club & Academy Operations',
    icon: <Settings className="w-10 h-10 md:w-16 md:h-16" />,
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?auto=format&fit=crop&get=80&w=1600',
    features: [
      'Multi-team & role management',
      'Unified scheduling (Train/Match)',
      'Real-time attendance tracking',
      'Centralized team announcements',
      'Coaches, Players & Parents access'
    ]
  },
  {
    id: 'tactics',
    title: 'Interactive Tactical Training Engine',
    icon: <BallIcon className="w-10 h-10 md:w-16 md:h-16" />,
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&get=80&w=1600',
    features: [
      'Multiplayer tactical sessions',
      'Live & Asynchronous access',
      'Intuitive learning environment',
      'Repeatable session templates'
    ]
  },
  {
    id: 'dev',
    title: 'Player Development System',
    icon: <BarChart3 className="w-10 h-10 md:w-16 md:h-16" />,
    color: 'green',
    image: 'https://images.unsplash.com/photo-1510051644265-934cb9742558?auto=format&fit=crop&get=80&w=1600',
    features: [
      'Auto-generated Player CVs',
      'Individual development plans (IDP)',
      'Performance & participation reports',
      'Multi-season learning history'
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
  const [activeEvolutionGlow, setActiveEvolutionGlow] = useState(0); // For Section 4 auto-cycle

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveEvolutionGlow((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // 5 second cycle
    return () => clearInterval(timer);
  }, []);

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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full px-6 sm:px-0">
            <button className="bg-white text-black text-sm md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-full font-black hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-cyan-500/20 uppercase w-full sm:w-auto">
              REQUEST DEMO
            </button>
            <button className="glass-card text-white text-sm md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-full font-black hover:bg-white/10 transition-all border border-white/10 active:scale-95 uppercase w-full sm:w-auto">
              START FREE TRIAL
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-12 w-full max-w-7xl relative group px-2 md:px-6 animate-in fade-in zoom-in-95 duration-1000 delay-500">
          {/* Enhanced Ambient Glow (Section 3 Style) */}
          <div className="absolute -inset-40 bg-cyan-500/30 blur-[180px] opacity-70 group-hover:opacity-90 transition duration-1000 rounded-full animate-pulse"></div>
          <div className="absolute -inset-20 bg-blue-400/20 blur-[100px] opacity-50 group-hover:opacity-70 transition duration-1000 rounded-full"></div>

          {/* THE BIG SCREEN TV FRAME */}
          <div className="relative bg-slate-950 p-[4px] md:p-[8px] rounded-[0.5rem] md:rounded-[1.2rem] border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">

            {/* TV Bezel Detail */}
            <div className="relative bg-black rounded-[0.2rem] md:rounded-[0.8rem] overflow-hidden aspect-video shadow-inner flex flex-col">

              <video
                src="/videos/hero-video-2.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Status Indicator (Bottom Chin area) */}
              <div className="absolute bottom-3 right-6 flex items-center gap-2">
                <span className="text-[8px] font-black text-white/20 tracking-widest uppercase hidden md:block">ULTRA TACTICAL 4K</span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></div>
              </div>

              {/* Subtle Screen Reflection */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30"></div>
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
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.05] uppercase italic">
                <span className="text-white">Why VTAC</span> <br className="hidden md:block" />
                <span className="gradient-text pr-12 inline-block">Manager?</span>
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
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 shrink-0 filter drop-shadow-md" />
                  <div className="space-y-0">
                    <h4 className={`font-black tracking-tight leading-tight uppercase text-base md:text-lg transition-colors ${activeIndex === i ? 'text-cyan-400' : 'text-white'}`}>{item.title}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
            {/* PHONE CONTAINER: SCALE INCREASED TO 280px */}
            <div className="relative group w-full max-w-[320px] lg:max-w-[380px] animate-in fade-in slide-in-from-right-12 duration-1000 transform translate-y-5">
              {/* Background Glow */}
              <div className="absolute -inset-10 bg-cyan-500/20 blur-[30px] md:blur-[60px] rounded-full opacity-50 transition-all duration-1000 group-hover:opacity-80"></div>

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
                        <img src={item.image} className="w-full h-full object-cover opacity-80 transition-transform duration-[15000ms]" alt={item.title} loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                        {/* Message Overlay on Phone Screen */}
                        <div className={`absolute inset-0 flex items-center justify-center p-6 text-center transition-all duration-700 delay-300 ${activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                          <p className="text-white font-bold text-xs md:text-sm leading-relaxed drop-shadow-lg uppercase tracking-wider bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
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
                          <item.icon className="w-5 h-5 font-black leading-none filter drop-shadow-md" />
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

      {/* 3. More Than Management (Sticky Scroll) */}
      <StickyScrollFeature
        title={
          <div className="text-center space-y-6 max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] border border-white/10">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
              <span>Built for How Teams Train Today</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.05] uppercase text-center py-4 italic">
              <span className="text-white block">More Than</span>
              <span className="gradient-text block">Management</span>
            </h2>
          </div>
        }
        items={managementStages.map(stage => ({
          id: stage.id,
          title: stage.title,
          description: stage.desc,
          images: stage.images,
          icon: stage.icon,
          color: stage.color,
          tags: stage.tags
        }))}
      />

      {/* 4. Problem & Solution (The Comparison) */}
      <SectionWrapper className="relative overflow-hidden py-32 md:py-48">
        {/* Dynamic Background Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 blur-[40px] md:blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[40px] md:blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full glass-card text-white/40 text-[10px] font-black uppercase tracking-[0.4em] border border-white/5 mb-8">
              <span>System Evolution</span>
            </div>
            <h2 className="font-black tracking-tighter uppercase flex flex-col items-center leading-none">
              <div className="relative group/evo">
                {/* Backlight / Breathing Fire Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-[60px] md:blur-[100px] opacity-60 group-hover:opacity-100 transition duration-1000 scale-125 animate-[breathe_6s_ease-in-out_infinite]"></div>
                <span className="text-6xl md:text-[10rem] text-white/20 select-none relative z-10 tracking-tight">EVOLUTION</span>
              </div>

              <div className="relative mt-4 md:-mt-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center z-20 w-full">
                <div className="text-center md:text-right md:pr-6">
                  <span className="text-4xl md:text-8xl text-white relative z-10 font-black italic px-4">OLD MESS</span>
                </div>

                <div className="flex items-center justify-center py-4 md:py-0">
                  <div className="hidden md:block h-px w-8 md:w-12 bg-white/10"></div>
                  <span className="text-2xl md:text-4xl text-cyan-500 font-black italic z-20 px-4 md:px-6">VS</span>
                  <div className="hidden md:block h-px w-8 md:w-12 bg-white/10"></div>
                </div>

                <div className="text-center md:text-left md:pl-6">
                  <span className="text-4xl md:text-8xl gradient-text relative z-10 font-black italic pl-4 pr-16 py-2 inline-block">VTAC FLOW</span>
                </div>
              </div>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 lg:items-stretch gap-8 md:gap-12 max-w-7xl mx-auto px-4 md:px-0">
            {/* The Old Way */}
            <div className={`relative group min-h-full transition-all duration-1000 ${activeEvolutionGlow === 0 ? 'scale-[1.02]' : 'scale-100'}`}>
              <div className={`absolute -inset-1 bg-gradient-to-b from-red-500/20 to-transparent blur-xl transition-opacity duration-1000 ${activeEvolutionGlow === 0 ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}></div>
              <div className={`relative h-full bg-[#1a1a1a]/40 backdrop-blur-3xl p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border transition-all duration-1000 ${activeEvolutionGlow === 0 ? 'border-red-500/20 bg-[#1a1a1a]/60' : 'border-white/5 bg-[#1a1a1a]/40'} group-hover:bg-[#1a1a1a]/60 flex flex-col`}>
                <div className="flex justify-between items-end mb-12">
                  <div className="space-y-2">
                    <span className="text-red-500/60 text-[10px] font-black uppercase tracking-widest">Legacy System</span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white/90 whitespace-nowrap">The Fragmented Mess</h3>
                  </div>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 shadow-lg shadow-red-500/10 animate-pulse z-30 shrink-0">
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="grid gap-6">
                  {[
                    { title: 'Information Silos', desc: 'Critical instructions buried in messy WhatsApp groups.' },
                    { title: 'Manual Tracking', desc: 'Coaches wasting hours on paper spreadsheets.' },
                    { title: 'Static Methods', desc: 'Tactical plans delivered in outdated, static PDFs.' },
                    { title: 'Zero Feedback', desc: 'No real-time insight into player understanding.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 group/item hover:bg-red-500/[0.03] transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                      <div className="space-y-1">
                        <span className="text-white/80 font-black uppercase text-sm tracking-tight">{item.title}</span>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The VTAC Way */}
            <div className={`relative group min-h-full transition-all duration-1000 ${activeEvolutionGlow === 1 ? 'scale-[1.02]' : 'scale-100'}`}>
              <div className={`absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl transition-opacity duration-1000 ${activeEvolutionGlow === 1 ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}></div>
              <div className={`relative h-full bg-[#1a1a1a]/40 backdrop-blur-3xl p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border transition-all duration-1000 ${activeEvolutionGlow === 1 ? 'border-cyan-500/40 bg-[#1a1a1a]/60' : 'border-cyan-500/20 bg-[#1a1a1a]/40'} group-hover:bg-[#1a1a1a]/60 flex flex-col`}>
                <div className="flex justify-between items-end mb-12">
                  <div className="space-y-2">
                    <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest">Unified Future</span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white whitespace-nowrap">VTAC Unified Flow</h3>
                  </div>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 z-30 shrink-0">
                    <Check className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="grid gap-6">
                  {[
                    { title: 'Centralized Hub', desc: 'One single, secure dashboard for all communications.' },
                    { title: 'Auto-Automation', desc: 'Real-time attendance and player performance tracking.' },
                    { title: 'Interactive Tactical', desc: 'Multi-player interactive board sessions on any device.' },
                    { title: 'Live Sync', desc: 'Our patented engine keeps every player in sync, live.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-cyan-500/[0.05] border border-cyan-500/10 group/item hover:bg-cyan-500/[0.08] transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover/item:scale-150 transition-transform"></div>
                      <div className="space-y-1">
                        <span className="text-white font-black uppercase text-sm tracking-tight">{item.title}</span>
                        <p className="text-slate-300 text-sm font-bold leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            <span className="text-4xl md:text-7xl text-white">WHAT</span>
            <div className="relative overflow-visible">
              <span className="text-4xl md:text-7xl gradient-text whitespace-nowrap px-12 block py-0">VTAC MANAGER</span>
            </div>
            <span className="text-4xl md:text-7xl text-white">COVERS</span>
          </h2>
        </div>

        <div className="max-w-[105rem] mx-auto relative px-6 group/laptop">
          {/* Immersive Ambient Glow behind Laptop - Dynamic Color Sync */}
          <div className={`absolute -inset-32 bg-${coverageItems[selectedCoverage].color}-500/20 blur-[60px] md:blur-[180px] rounded-full transition-all duration-1000 opacity-50 group-hover/laptop:opacity-80 animate-[breathe_8s_ease-in-out_infinite]`}></div>
          <div className={`absolute -inset-16 bg-${coverageItems[selectedCoverage].color}-400/10 blur-[40px] md:blur-[100px] rounded-full transition-all duration-1000 opacity-30 group-hover/laptop:opacity-50`}></div>

          <div className="relative mx-auto w-full transition-all duration-700 perspective-[3000px]">
            {/* THE LAPTOP LID (SCREEN) - Extra narrow to emphasize base length */}
            <div className="relative max-w-[85%] mx-auto p-[1px] bg-gradient-to-b from-slate-400 via-slate-600 to-slate-900 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden transform border-t border-white/20 z-10">

              {/* Inner Metallic Frame */}
              <div className="relative p-2 md:p-3 bg-slate-950 rounded-t-[2.3rem] md:rounded-t-[3.2rem] overflow-hidden">

                {/* MACBOOK NOTCH */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-64 h-6 md:h-8 bg-black rounded-b-2xl z-40 flex items-center justify-center border-x border-b border-white/5">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1a1c1e] shadow-inner flex items-center justify-center">
                    <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-blue-500/40 blur-[1px]"></div>
                  </div>
                </div>

                {/* THE ACTUAL SCREEN CONTENT */}
                <div className="relative bg-black rounded-t-[1.8rem] md:rounded-t-[2.5rem] overflow-hidden aspect-[16/10] md:aspect-[16/9.5] border-[1px] border-white/5 shadow-2xl">
                  {coverageItems.map((item, idx) => (
                    <div key={item.id} className={`absolute inset-0 transition-all duration-1000 ease-out ${selectedCoverage === idx ? 'opacity-100' : 'opacity-0'}`}>
                      <img src={item.image} className="w-full h-full object-cover opacity-60 transition-transform duration-[20000ms] scale-110 group-hover/laptop:scale-125" alt={item.title} loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/20 to-transparent"></div>

                      <div className="absolute top-8 md:top-14 left-8 md:left-16 max-w-xl text-left z-20">
                        <div className={`space-y-2 md:space-y-3 transition-all duration-1000 transform ${selectedCoverage === idx ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                          <h4 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
                            {item.title}
                          </h4>
                          <div className="space-y-1.5 md:space-y-2 mt-3 md:mt-4">
                            {item.features.map((feature, fIdx) => (
                              <p key={fIdx} className="text-[10px] md:text-base text-slate-100 font-bold drop-shadow-md flex items-center gap-3">
                                <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-${item.color}-500 shadow-[0_0_15px_rgba(var(--${item.color}-500),0.8)] shrink-0`}></span>
                                {feature}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Screen Navigation Badges - Section 3 Style with Persistent Glow */}
                      <div className="absolute inset-x-0 bottom-4 md:bottom-6 px-6 md:px-24 z-30">
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                          {coverageItems.map((navItem, navIdx) => (
                            <button
                              key={navItem.id}
                              onClick={(e) => { e.stopPropagation(); handleManualSelect5(navIdx); }}
                              className={`group/nav relative p-2.5 md:p-5 rounded-[0.8rem] md:rounded-[1.5rem] border transition-all duration-500 flex flex-col items-center justify-center text-center backdrop-blur-xl ${selectedCoverage === navIdx
                                ? `bg-${navItem.color}-500/10 border-${navItem.color}-500/50 shadow-[0_0_40px_rgba(0,0,0,0.4)] scale-[1.05]`
                                : `bg-${navItem.color}-500/5 border-${navItem.color}-500/10 opacity-70 hover:opacity-100 hover:bg-${navItem.color}-500/10`
                                }`}
                            >
                              {/* Breathing Ambient Glow (Behind active only) */}
                              {selectedCoverage === navIdx && (
                                <div className={`absolute -inset-2 bg-${navItem.color}-500/20 blur-2xl rounded-full animate-pulse pointer-events-none`}></div>
                              )}

                              <div className={`relative z-10 w-7 h-7 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-1 md:mb-2.5 transition-all duration-500 ${selectedCoverage === navIdx ? `bg-${navItem.color}-500 text-white shadow-[0_0_25px_rgba(0,0,0,0.3)]` : 'bg-white/5 text-slate-400'}`}>
                                {React.cloneElement(navItem.icon as React.ReactElement<any>, { className: 'w-3.5 h-3.5 md:w-6 md:h-6' })}
                              </div>
                              <h5 className={`relative z-10 text-[7px] md:text-[13px] font-black uppercase tracking-widest italic leading-none transition-colors ${selectedCoverage === navIdx ? `text-${navItem.color}-400` : 'text-slate-500'}`}>
                                {navItem.title}
                              </h5>
                              {selectedCoverage === navIdx && isAutoPlayingSection5 && (
                                <div className="absolute inset-0 rounded-[0.8rem] md:rounded-[1.5rem] border border-white/20 animate-[ping_3s_ease-in-out_infinite] pointer-events-none opacity-20"></div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Glass Reflection */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30 z-20"></div>
                </div>
              </div>
            </div>

            {/* THE LAPTOP BASE (CHASSIS) - Thinner, Wider, and Curved */}
            <div className="relative w-full h-4 md:h-7 bg-slate-800 shadow-[0_40px_120px_rgba(0,0,0,1)] border-x border-b border-white/10 flex flex-col items-center -mt-[1px] z-20 rounded-b-[2rem] md:rounded-b-[4rem]"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #475569, #1e293b, #0f172a)'
              }}>

              {/* Metallic Lip Detail */}
              <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent absolute top-0"></div>

              {/* Sleeker Thumb Scoop Cutout */}
              <div className="absolute top-0 w-32 md:w-60 h-2 md:h-3 bg-gradient-to-b from-black/60 to-black/20 rounded-b-2xl border-x border-b border-white/10 shadow-inner flex items-center justify-center">
                <div className="w-1/4 h-[1px] bg-white/10"></div>
              </div>

              {/* Subtle Highlight on Bottom Curve */}
              <div className="absolute bottom-1 w-1/2 h-[1px] bg-white/5 blur-[0.5px]"></div>
            </div>

            {/* Massive Floor Shadow */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-black/60 blur-[60px] rounded-full -z-10"></div>
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
                            <div className="w-4 h-4 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-slate-200 opacity-100">
                              <Check className="w-2 h-2" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center text-red-500/70">
                              <X className="w-2 h-2" />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-2 md:p-6 text-center">
                        <div className="flex justify-center">
                          {row.video ? (
                            <div className="w-4 h-4 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-slate-200 opacity-100">
                              <Check className="w-2 h-2" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center text-red-500/70">
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
            <div className="absolute -inset-10 bg-cyan-500/10 blur-[30px] md:blur-[100px] rounded-full opacity-40 group-hover:opacity-70 transition-all duration-1000"></div>

            <div className="relative w-full max-w-[540px] aspect-[0.7/1] lg:aspect-auto lg:h-full bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] p-1.5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-slate-700/50 flex flex-col group-hover:border-cyan-500/30 transition-all duration-700">

              {/* Refined iPad Side Button */}
              <div className="absolute top-20 -right-[2px] flex flex-col z-50">
                <div className="w-[3px] h-10 bg-slate-600 rounded-l-sm border-l border-white/10 shadow-inner"></div>
              </div>

              <div className="relative flex-grow bg-slate-950 rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden border-[1px] border-slate-900 shadow-inner">
                {/* Minimal Tablet Sensor */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500/20 z-40"></div>

                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  {comparisonRows.map((row, i) => (
                    <div key={i} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeCompareIdx === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                      <img
                        src={row.img}
                        className="w-full h-full object-cover opacity-60 transition-transform duration-[30000ms] ease-linear"
                        alt={row.feature}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-30 p-8 pb-12 space-y-10 flex flex-col items-center">
                  <div className="min-h-[48px] flex items-center justify-center px-4 w-full">
                    <h4 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter text-cyan-400 text-center animate-in fade-in slide-in-from-bottom-2 duration-700 leading-tight drop-shadow-2xl">
                      {comparisonRows[activeCompareIdx].feature}
                    </h4>
                  </div>

                  <div className="flex items-center gap-6 justify-center">
                    {comparisonRows.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleManualCompare(i)}
                        className={`relative w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-700 ${activeCompareIdx === i ? 'bg-cyan-400 scale-150 shadow-[0_0_20px_rgba(34,211,238,1)]' : 'bg-white/20 hover:bg-white/50'}`}
                      >
                        {activeCompareIdx === i && (
                          <span className="absolute -inset-2 rounded-full border border-cyan-400/50 animate-ping"></span>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="w-40 h-1.5 bg-white/10 rounded-full mt-6 group-hover:bg-cyan-500/40 transition-all duration-700"></div>
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

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes breathe {
          0%, 100% { opacity: 0.4; transform: scale(1.2); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
      `}} />
    </div>
  );
};

export default Home;