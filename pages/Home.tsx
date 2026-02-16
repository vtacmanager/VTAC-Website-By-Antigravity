import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  Gamepad2,
  BarChart3,
  Video,
  Layers,
  Play,
  Pause,
  Volume2,
  VolumeX
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

/* MOVED TO COMPONENT BODY TO USE HOOK */

/* MOVED TO COMPONENT BODY TO USE HOOK */

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const manifestoItems = [
    {
      icon: Layers,
      title: t('home.manifesto.items.item1.title'),
      desc: t('home.manifesto.items.item1.desc'),
      image: '/images/Section2-1.webp'
    },
    {
      icon: Globe,
      title: t('home.manifesto.items.item2.title'),
      desc: t('home.manifesto.items.item2.desc'),
      image: '/images/Section2-2.webp'
    },
    {
      icon: TrendingUp,
      title: t('home.manifesto.items.item3.title'),
      desc: t('home.manifesto.items.item3.desc'),
      image: '/images/Section2-3.webp'
    },
    {
      icon: Users,
      title: t('home.manifesto.items.item4.title'),
      desc: t('home.manifesto.items.item4.desc'),
      image: '/images/Section2-4.webp'
    }
  ];

  const managementStages = [
    {
      id: 'problem',
      title: t('home.management.stages.problem.title'),
      ipadTitle: t('home.management.stages.problem.ipadTitle'),
      icon: <AlertCircle className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'purple',
      accent: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      desc: t('home.management.stages.problem.desc'),
      images: ['/images/Section3-1.1.webp', '/images/Section3-1.2.webp', '/images/Section3-1.3.webp'],
      details: t('home.management.stages.problem.details'),
      tags: t('home.management.stages.problem.tags', { returnObjects: true }) as string[]
    },
    {
      id: 'solution',
      title: t('home.management.stages.solution.title'),
      ipadTitle: t('home.management.stages.solution.ipadTitle'),
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'orange',
      accent: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      desc: t('home.management.stages.solution.desc'),
      images: ['/images/Section3-2.1.webp', '/images/Section3-2.2.webp', '/images/Section3-2.3.webp'],
      details: t('home.management.stages.solution.details'),
      tags: t('home.management.stages.solution.tags', { returnObjects: true }) as string[]
    },
    {
      id: 'outcome',
      title: t('home.management.stages.outcome.title'),
      ipadTitle: t('home.management.stages.outcome.ipadTitle'),
      icon: <Trophy className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'green',
      accent: 'bg-green-500/10 text-green-400 border-green-500/20',
      desc: t('home.management.stages.outcome.desc'),
      images: ['/images/Section3-3.1.webp', '/images/Section3-3.2.webp', '/images/Section3-3.3.webp'],
      details: t('home.management.stages.outcome.details'),
      tags: t('home.management.stages.outcome.tags', { returnObjects: true }) as string[]
    }
  ];

  const coverageItems = [
    {
      id: 'ops',
      title: t('home.coverage.items.ops.title'),
      description: t('home.coverage.items.ops.desc'),
      icon: <Settings className="w-10 h-10 md:w-16 md:h-16" />,
      color: 'purple',
      image: '/images/Section5.1.webp',
      features: t('home.coverage.items.ops.features', { returnObjects: true }) as string[]
    },
    {
      id: 'tactics',
      title: t('home.coverage.items.tactics.title'),
      description: t('home.coverage.items.tactics.desc'),
      icon: <Gamepad2 className="w-10 h-10 md:w-16 md:h-16" />,
      color: 'orange',
      image: '/images/Section5.2.webp',
      features: t('home.coverage.items.tactics.features', { returnObjects: true }) as string[]
    },
    {
      id: 'dev',
      title: t('home.coverage.items.dev.title'),
      description: t('home.coverage.items.dev.desc'),
      icon: <BarChart3 className="w-10 h-10 md:w-16 md:h-16" />,
      color: 'green',
      image: '/images/Section5.3.webp',
      features: t('home.coverage.items.dev.features', { returnObjects: true }) as string[]
    }
  ];

  const comparisonRows = [
    { feature: t('home.comparison.table.rows.0.feature'), vtac: true, organizer: true, video: false, img: '/images/Section7.1.webp' },
    { feature: t('home.comparison.table.rows.1.feature'), vtac: true, organizer: false, video: false, img: '/images/Section7.2.webp' },
    { feature: t('home.comparison.table.rows.2.feature'), vtac: true, organizer: false, video: false, img: '/images/Section7.3.webp' },
    { feature: t('home.comparison.table.rows.3.feature'), vtac: true, organizer: false, video: true, img: '/images/Section7.4.webp' },
    { feature: t('home.comparison.table.rows.4.feature'), vtac: true, organizer: true, video: false, img: '/images/Section7.5.webp' },
    { feature: t('home.comparison.table.rows.5.feature'), vtac: true, organizer: false, video: true, img: '/images/Section7.6.webp' },
    { feature: t('home.comparison.table.rows.6.feature'), vtac: true, organizer: false, video: false, img: '/images/Section7.7.webp' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedStage, setSelectedStage] = useState(1);
  const [selectedCoverage, setSelectedCoverage] = useState(0);
  const [activeCompareIdx, setActiveCompareIdx] = useState(0);
  const [activeEvolutionGlow, setActiveEvolutionGlow] = useState(0); // For Section 4 auto-cycle

  const [isAutoPlayingSection2, setIsAutoPlayingSection2] = useState(true);
  const [isAutoPlayingSection3, setIsAutoPlayingSection3] = useState(true);
  const [isAutoPlayingSection5, setIsAutoPlayingSection5] = useState(true);
  const [isAutoPlayingCompare, setIsAutoPlayingCompare] = useState(true);

  const [isInViewSection2, setIsInViewSection2] = useState(false);
  const [isInViewSection4, setIsInViewSection4] = useState(false);
  const [isInViewSection5, setIsInViewSection5] = useState(false);
  const [isInViewCompare, setIsInViewCompare] = useState(false);

  const section2Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const section5Ref = useRef<HTMLElement>(null);
  const compareRef = useRef<HTMLElement>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const autoPlayTimer2Ref = useRef<number | null>(null);
  const autoPlayTimer3Ref = useRef<number | null>(null);
  const autoPlayTimer5Ref = useRef<number | null>(null);
  const autoPlayCompareRef = useRef<number | null>(null);

  // Intersection Observers for Auto-Play
  useEffect(() => {
    const observerOptions = { threshold: 0.05, rootMargin: '0px 0px -10% 0px' };

    const obs2 = new IntersectionObserver(([ent]) => setIsInViewSection2(ent.isIntersecting), observerOptions);
    const obs4 = new IntersectionObserver(([ent]) => setIsInViewSection4(ent.isIntersecting), observerOptions);
    const obs5 = new IntersectionObserver(([ent]) => setIsInViewSection5(ent.isIntersecting), observerOptions);
    const obsComp = new IntersectionObserver(([ent]) => setIsInViewCompare(ent.isIntersecting), observerOptions);

    if (section2Ref.current) obs2.observe(section2Ref.current);
    if (section4Ref.current) obs4.observe(section4Ref.current);
    if (section5Ref.current) obs5.observe(section5Ref.current);
    if (compareRef.current) obsComp.observe(compareRef.current);

    return () => {
      obs2.disconnect();
      obs4.disconnect();
      obs5.disconnect();
      obsComp.disconnect();
    };
  }, [section2Ref.current, section4Ref.current, section5Ref.current, compareRef.current]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    if (isAutoPlayingSection2 && isInViewSection2) {
      autoPlayTimer2Ref.current = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % manifestoItems.length);
      }, 4000);
    }
    return () => {
      if (autoPlayTimer2Ref.current) clearInterval(autoPlayTimer2Ref.current);
    };
  }, [isAutoPlayingSection2, isInViewSection2]);

  useEffect(() => {
    if (isAutoPlayingSection5 && isInViewSection5) {
      autoPlayTimer5Ref.current = window.setInterval(() => {
        setSelectedCoverage((prev) => (prev + 1) % coverageItems.length);
      }, 7000);
    }
    return () => {
      if (autoPlayTimer5Ref.current) clearInterval(autoPlayTimer5Ref.current);
    };
  }, [isAutoPlayingSection5, isInViewSection5]);

  useEffect(() => {
    if (isAutoPlayingCompare && isInViewCompare) {
      autoPlayCompareRef.current = window.setInterval(() => {
        setActiveCompareIdx((prev) => (prev + 1) % comparisonRows.length);
      }, 4000);
    }
    return () => {
      if (autoPlayCompareRef.current) clearInterval(autoPlayCompareRef.current);
    };
  }, [isAutoPlayingCompare, isInViewCompare]);

  useEffect(() => {
    if (!isInViewSection4) return;
    const timer = setInterval(() => {
      setActiveEvolutionGlow((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // 5 second cycle
    return () => clearInterval(timer);
  }, [isInViewSection4]);

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
        <div className="relative z-10 max-w-6xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] animate-in fade-in slide-in-from-bottom-4 duration-1000 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            {/* Conditional branding for Thai language to adjust font sizes */}
            {t('home.hero.badge').includes('Multiplayer') ? (
              <span>
                <span className="text-sm md:text-base">ระบบบริหารจัดการทีม + การฝึกซ้อมแผนการเล่น </span>
                <span className="text-[0.6rem] md:text-xs font-bold">MULTIPLAYER</span>
                <span className="text-sm md:text-base"> รายแรกของโลก</span>
              </span>
            ) : (
              <span>{t('home.hero.badge')}</span>
            )}
          </div>
          <h1 className="font-black tracking-tighter text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 uppercase py-4">
            <span className="text-6xl md:text-[8rem] block leading-[0.9] relative z-10">{t('home.hero.title.line1')}</span>
            {t('home.hero.title.line2') && (
              <span className={`gradient-text block tracking-tighter relative z-20 ${i18n.language.startsWith('th') ? 'text-4xl md:text-[5.5rem] lg:text-[8rem] -mt-4 leading-normal py-4 whitespace-nowrap' : 'text-4xl md:text-[6.5rem] leading-[0.9]'}`}>{t('home.hero.title.line2')}</span>
            )}
            {t('home.hero.title.line3') && (
              <div className="relative inline-block overflow-visible w-full">
                {/* Animated Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 bg-orange-500/30 blur-[40px] rounded-full animate-[breathe-glow_4s_ease-in-out_infinite] pointer-events-none"></div>
                <span className={`relative block tracking-tight leading-[0.9] italic px-4 overflow-visible ${i18n.language.startsWith('th') ? 'text-2xl md:text-[3.5rem]' : 'text-3xl md:text-[5rem]'}`} style={{
                  color: '#fb923c',
                  filter: 'drop-shadow(0 0 25px rgba(251, 146, 60, 0.8)) drop-shadow(0 0 50px rgba(251, 146, 60, 0.4))'
                }}>{t('home.hero.title.line3')}</span>
              </div>
            )}
          </h1>
          <p className={`text-lg md:text-xl font-medium text-white uppercase max-w-6xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 whitespace-pre-line ${i18n.language.startsWith('th') ? '-mt-1' : 'mt-16'}`}>
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full px-6 sm:px-0 mt-8">
            <Link
              to="/book-demo"
              className="group relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#cbd5e1] to-[#94a3b8] border border-white/40 text-slate-900 text-sm md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-full font-black hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase w-full sm:w-auto flex items-center justify-center font-sans tracking-tight transition-all duration-300"
            >
              {/* Metallic Gloss Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform pointer-events-none"></div>
              <span className="relative z-10">{t('home.hero.requestDemo')}</span>
            </Link>
            <button className="glass-card text-white text-sm md:text-xl px-8 md:px-14 py-4 md:py-6 rounded-full font-black hover:bg-white/10 transition-all border border-white/10 active:scale-95 uppercase w-full sm:w-auto">
              {t('home.hero.startTrial')}
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-12 w-full max-w-7xl relative group px-2 md:px-6 animate-in fade-in zoom-in-95 duration-1000 delay-500">
          {/* Enhanced Ambient Glow (Section 3 Style) */}
          <div className="absolute -inset-40 bg-cyan-500/30 blur-[180px] opacity-70 group-hover:opacity-90 transition duration-1000 rounded-full animate-pulse"></div>
          <div className="absolute -inset-20 bg-blue-400/20 blur-[100px] opacity-50 group-hover:opacity-70 transition duration-1000 rounded-full"></div>

          {/* THE BIG SCREEN TV FRAME */}
          <div className="relative bg-slate-950 p-[4px] md:p-[8px] rounded-[0.5rem] md:rounded-[1.2rem] border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">

            {/* TV Bezel Detail */}
            <div className="relative bg-black rounded-[0.2rem] md:rounded-[0.8rem] overflow-hidden aspect-video shadow-inner flex flex-col">

              <video
                ref={videoRef}
                src="/videos/hero-video-2-Compress.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />

              {/* Video Controls (Bottom Left) */}
              <div className="absolute bottom-4 left-6 z-40 flex gap-3">
                <button
                  onClick={toggleVideo}
                  className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 hover:bg-black/60 hover:text-white transition-all active:scale-95 group"
                  aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                >
                  {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 hover:bg-black/60 hover:text-white transition-all active:scale-95 group"
                  aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Status Indicator (Bottom Chin area) */}
              <div className="absolute bottom-3 right-6 flex items-center gap-2">
                <span className="text-[8px] font-black text-white/20 tracking-widest uppercase hidden md:block">{t('home.hero.ultraTactical')}</span>
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
      <SectionWrapper ref={section2Ref} id="why-vtac" className="bg-slate-900/20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div className="space-y-10 flex flex-col">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span>{t('home.manifesto.badge')}</span>
              </div>
              <h2 className={`text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase flex flex-col overflow-visible ${i18n.language.startsWith('th') ? 'leading-tight' : 'leading-[0.9]'}`}>
                <span className="text-white block py-2 italic overflow-visible">{t('home.manifesto.title.closing')}</span>
                <span
                  className={`gradient-text block italic overflow-visible ${i18n.language.startsWith('th') ? 'py-6 -mt-8' : 'py-2 -mt-4 md:-mt-6'}`}
                  style={{
                    paddingRight: '120px',
                    paddingBottom: '40px',
                    marginRight: '-120px',
                    marginBottom: '-40px',
                    WebkitBoxDecorationBreak: 'clone',
                    boxDecorationBreak: 'clone'
                  }}
                >
                  {t('home.manifesto.title.theGap')}&nbsp;&nbsp;&nbsp;
                </span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-slate-300 font-bold leading-relaxed italic border-l-4 border-cyan-500 pl-6 py-2">
              {t('home.manifesto.description')}
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
                    <h4 className={`font-black tracking-tight leading-tight uppercase text-base md:text-lg transition-colors whitespace-pre-line ${activeIndex === i ? 'text-cyan-400' : 'text-white'}`}>{item.title}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
            {/* PHONE CONTAINER: Centered and sized for small mobile */}
            <div className="relative group w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] animate-in fade-in slide-in-from-bottom-10 duration-1000 transform translate-y-5">
              {/* Background Glow */}
              <div className="absolute -inset-10 bg-cyan-500/20 blur-[30px] md:blur-[60px] rounded-full opacity-50 transition-all duration-1000 group-hover:opacity-80"></div>

              {/* Volume Buttons (Right Side) - Silver Aluminum Finish */}
              <div className="absolute -right-[3px] top-32 w-[4px] h-12 bg-slate-400 rounded-r-md z-0 shadow-[1px_0_1px_rgba(0,0,0,0.3)]"></div>
              <div className="absolute -right-[3px] top-48 w-[4px] h-12 bg-slate-400 rounded-r-md z-0 shadow-[1px_0_1px_rgba(0,0,0,0.3)]"></div>

              {/* REFINED FRAME: Silver Aluminum Aesthetic */}
              <div className="relative p-[5px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/20 w-full overflow-hidden z-10">
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
                          <p className="text-white font-bold text-xs md:text-sm leading-relaxed drop-shadow-lg uppercase tracking-wider bg-gradient-to-br from-blue-500/20 via-white/10 to-purple-500/20 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/50">
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
          <div className="text-center space-y-6 max-w-4xl mx-auto px-6 overflow-visible">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>{t('home.management.badge')}</span>
            </div>
            <h2 className={`text-3xl xs:text-4xl md:text-8xl font-black tracking-tighter uppercase text-center flex flex-col items-center py-4 italic ${i18n.language.startsWith('th') ? 'leading-[1.3]' : 'leading-[1.05]'}`}>
              <span className={`text-white block overflow-visible ${i18n.language.startsWith('th') ? 'py-4 px-2 whitespace-nowrap' : 'px-4'}`}>{t('home.management.title.beyond')}</span>
              <span className={`gradient-text block overflow-visible whitespace-pre-line ${i18n.language.startsWith('th') ? 'py-4 px-2 -mt-8' : 'px-4 md:pr-8'}`}>{t('home.management.title.management')}</span>
            </h2>
          </div>
        }
        items={managementStages.map(stage => ({
          id: stage.id,
          title: stage.title,
          ipadTitle: stage.ipadTitle,
          description: stage.desc,
          details: stage.details,
          images: stage.images,
          icon: stage.icon,
          color: stage.color,
          tags: stage.tags
        }))}
      />

      {/* 4. Problem & Solution (The Comparison) */}
      <SectionWrapper ref={section4Ref} className="relative pt-12 pb-24 md:pt-20 md:pb-40">
        {/* Dynamic Background Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 blur-[40px] md:blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[40px] md:blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] animate-ping"></div>
              <span>{t('home.evolution.badge')}</span>
            </div>
            <h2 className={`text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase text-center italic whitespace-pre-line overflow-visible ${i18n.language === 'th' ? 'leading-[1.15]' : 'leading-[0.9]'}`}>
              <span className="text-white block py-2 overflow-visible">{t('home.evolution.title.fromChaos')}</span>
              <span className={`gradient-text block overflow-visible px-4 ${i18n.language === 'th' ? 'py-4 -mt-2' : 'py-2 -mt-4 md:-mt-6'}`}>{t('home.evolution.title.toClarity')}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 lg:items-stretch gap-8 md:gap-12 max-w-7xl mx-auto px-0 md:px-0 mt-16">
            {/* The Old Way */}
            <div className={`relative group min-h-full transition-all duration-1000 ${activeEvolutionGlow === 0 ? 'scale-[1.02]' : 'scale-100'}`}>
              <div className={`absolute -inset-1 bg-gradient-to-b from-red-500/20 to-transparent blur-xl transition-opacity duration-1000 ${activeEvolutionGlow === 0 ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}></div>
              <div className={`relative h-full bg-[#1a1a1a]/40 backdrop-blur-3xl p-4 md:p-14 rounded-3xl md:rounded-[4rem] border transition-all duration-1000 ${activeEvolutionGlow === 0 ? 'border-red-500/20 bg-[#1a1a1a]/60' : 'border-white/5 bg-[#1a1a1a]/40'} group-hover:bg-[#1a1a1a]/60 flex flex-col`}>
                <div className="flex justify-between items-start mb-10 gap-4">
                  <div className="space-y-1">
                    <span className="text-red-500/60 text-base font-black uppercase tracking-widest leading-none">{t('home.evolution.legacy.badge')}</span>
                    <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-white/90">{t('home.evolution.legacy.title')}</h3>
                  </div>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 shadow-lg shadow-red-500/10 animate-pulse z-30 shrink-0">
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="grid gap-6">
                  {(t('home.evolution.legacy.items', { returnObjects: true }) as Array<{ title: string; desc: string }>).map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 md:p-6 rounded-3xl bg-white/[0.02] border border-white/5 group/item hover:bg-red-500/[0.03] transition-colors">
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
              <div className={`relative h-full bg-[#1a1a1a]/40 backdrop-blur-3xl p-4 md:p-14 rounded-3xl md:rounded-[4rem] border transition-all duration-1000 ${activeEvolutionGlow === 1 ? 'border-cyan-500/40 bg-[#1a1a1a]/60' : 'border-cyan-500/20 bg-[#1a1a1a]/40'} group-hover:bg-[#1a1a1a]/60 flex flex-col`}>
                <div className="flex justify-between items-start mb-10 gap-4">
                  <div className="space-y-1">
                    <span className="text-cyan-400 text-base font-black uppercase tracking-widest leading-none">{t('home.evolution.vtac.badge')}</span>
                    <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-white">{t('home.evolution.vtac.title')}</h3>
                  </div>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 z-30 shrink-0">
                    <Check className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="grid gap-6">
                  {(t('home.evolution.vtac.items', { returnObjects: true }) as Array<{ title: string; desc: string }>).map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 md:p-6 rounded-3xl bg-cyan-500/[0.05] border border-cyan-500/10 group/item hover:bg-cyan-500/[0.08] transition-colors">
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
      <SectionWrapper ref={section5Ref} id="coverage" className="bg-slate-950 pt-12 pb-24 md:pt-20 md:pb-40">
        <div className="text-center space-y-6 max-w-4xl mx-auto px-6 overflow-visible">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
            <span>{t('home.coverage.badge')}</span>
          </div>
          <h2 className={`font-black uppercase flex flex-col items-center italic overflow-visible tracking-tighter ${i18n.language.startsWith('th') ? 'leading-[1.15]' : 'leading-[1.05]'}`}>
            <span className={`text-3xl xs:text-4xl ${i18n.language.startsWith('th') ? 'md:text-7xl' : 'md:text-8xl'} text-white block ${i18n.language.startsWith('th') ? 'py-4 px-2' : ''}`}>{t('home.coverage.title.what')}</span>
            <div className="relative overflow-visible">
              <span className={`text-3xl xs:text-4xl ${i18n.language.startsWith('th') ? 'md:text-7xl' : 'md:text-8xl'} gradient-text block px-12 ${i18n.language.startsWith('th') ? 'py-6 -mt-10 md:-mt-8 whitespace-nowrap md:whitespace-normal text-center' : 'py-0 whitespace-nowrap'}`}>{t('home.coverage.title.vtacManager')}</span>
            </div>
            <span className={`text-3xl xs:text-4xl ${i18n.language.startsWith('th') ? 'md:text-7xl' : 'md:text-8xl'} text-white block ${i18n.language.startsWith('th') ? 'py-4 px-2 -mt-10 md:-mt-8 whitespace-nowrap md:whitespace-normal text-center' : ''}`}>{t('home.coverage.title.covers')}</span>
          </h2>
        </div>

        <div className="max-w-[105rem] mx-auto relative px-6 group/laptop mt-20">
          {/* Immersive Ambient Glow behind Laptop - Dynamic Color Sync */}
          <div className={`absolute -inset-32 bg-${coverageItems[selectedCoverage].color}-500/20 blur-[60px] md:blur-[180px] rounded-full transition-all duration-1000 opacity-50 group-hover/laptop:opacity-80 animate-[breathe_8s_ease-in-out_infinite]`}></div>
          <div className={`absolute -inset-16 bg-${coverageItems[selectedCoverage].color}-400/10 blur-[40px] md:blur-[100px] rounded-full transition-all duration-1000 opacity-30 group-hover/laptop:opacity-50`}></div>

          <div className="relative mx-auto w-full transition-all duration-700 perspective-[3000px]">
            {/* THE LAPTOP LID (SCREEN) - Wider on mobile for better readability */}
            <div className="relative w-full md:max-w-[85%] mx-auto p-[1px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 rounded-t-[1.5rem] md:rounded-t-[1rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden transform border-t border-white/20 z-10">

              {/* Inner Metallic Frame */}
              <div className="relative p-1.5 md:p-3 bg-slate-950 rounded-t-[1.3rem] md:rounded-t-[0.9rem] overflow-hidden">

                {/* MACBOOK NOTCH */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-64 h-4 md:h-8 bg-black rounded-b-2xl z-40 flex items-center justify-center border-x border-b border-white/5">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1a1c1e] shadow-inner flex items-center justify-center">
                    <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-blue-500/40 blur-[1px]"></div>
                  </div>
                </div>

                {/* THE ACTUAL SCREEN CONTENT - More vertical on mobile (3:4 or 1:1) to fit text */}
                <div className="relative bg-black rounded-t-[1.1rem] md:rounded-t-[0.6rem] overflow-hidden aspect-[3/4.5] md:aspect-[16/10] lg:aspect-[16/9.5] border-[1px] border-white/5 shadow-2xl transition-colors duration-700">
                  {coverageItems.map((item, idx) => (
                    <div key={item.id} className={`absolute inset-0 transition-all duration-1000 ease-out ${selectedCoverage === idx ? 'opacity-100' : 'opacity-0'}`}>
                      <img
                        src={item.image}
                        className={`w-full h-full object-cover opacity-90 transition-transform duration-[10000ms] ease-out ${selectedCoverage === idx ? 'scale-110' : 'scale-100'}`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent"></div>

                      <div className="absolute top-6 md:top-12 lg:top-16 left-6 md:left-12 lg:left-20 right-6 md:right-0 max-w-4xl text-left z-20">
                        <div className={`space-y-2 md:space-y-3 transition-all duration-1000 transform ${selectedCoverage === idx ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                          <h4 className="text-xl md:text-2xl lg:text-3xl font-black italic uppercase tracking-tighter text-white leading-[0.9] drop-shadow-2xl pr-4">
                            {item.title}
                          </h4>
                          <p className="text-white/90 text-[10px] md:text-sm lg:text-base font-semibold mb-2 md:mb-4 drop-shadow-md max-w-3xl leading-tight mt-1 md:mt-2">
                            {item.description}
                          </p>
                          <div className="space-y-1 md:space-y-1 mt-2 md:mt-2 lg:mt-3">
                            {item.features.map((feature, fIdx) => (
                              <p key={fIdx} className="text-[9px] md:text-[12px] lg:text-[14px] text-slate-100 font-bold drop-shadow-md flex items-center gap-2">
                                <span className={`w-1 h-1 md:w-1.2 md:h-1.2 rounded-full bg-${item.color}-500 shadow-[0_0_15px_rgba(var(--${item.color}-500),0.8)] shrink-0`}></span>
                                {feature}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}

                  {/* Screen Navigation Badges - Section 3 Style with Persistent Glow (MOVED OUTSIDE LOOP FOR PERSISTENCE) */}
                  <div className="absolute inset-x-0 bottom-3 md:bottom-4 lg:bottom-6 px-4 md:px-8 lg:px-24 z-30">
                    <div className="grid grid-cols-3 gap-3 md:gap-3 lg:gap-4">
                      {coverageItems.map((navItem, navIdx) => (
                        <button
                          key={navItem.id}
                          onClick={(e) => { e.stopPropagation(); handleManualSelect5(navIdx); }}
                          className={`group/nav relative p-2 md:p-3 lg:p-5 rounded-[0.8rem] md:rounded-[1rem] lg:rounded-[1.5rem] border transition-all duration-500 flex flex-col items-center justify-center text-center ${selectedCoverage === navIdx
                            ? `bg-transparent ${navItem.color === 'purple' ? 'border-purple-500/60' : navItem.color === 'orange' ? 'border-orange-500/60' : 'border-green-500/60'} shadow-[0_0_40px_rgba(0,0,0,0.3)] scale-[1.05]`
                            : `bg-white/0 border-white/10 opacity-60 hover:opacity-100 hover:bg-white/5`
                            }`}
                        >
                          {/* Breathing Ambient Glow (Behind active only) */}
                          {selectedCoverage === navIdx && (
                            <div className={`absolute -inset-2 bg-${navItem.color}-500/20 blur-2xl rounded-full animate-pulse pointer-events-none`}></div>
                          )}

                          <div className={`relative z-10 w-6 h-6 md:w-8 lg:w-12 md:h-8 lg:h-12 rounded-lg flex items-center justify-center mb-1 md:mb-1.5 transition-all duration-500 ${selectedCoverage === navIdx ? `bg-${navItem.color}-500 text-white shadow-[0_0_25px_rgba(0,0,0,0.5)] drop-shadow-lg` : 'bg-white/5 text-slate-400'}`}>
                            {React.cloneElement(navItem.icon as React.ReactElement<any>, { className: 'w-3 h-3 md:w-4 lg:w-6 md:h-4 lg:h-6' })}
                          </div>
                          <h5 className={`relative z-10 text-[7px] md:text-[9px] lg:text-[13px] font-black uppercase tracking-widest italic leading-none transition-colors ${selectedCoverage === navIdx ? `text-${navItem.color}-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]` : 'text-slate-500'}`}>
                            {navItem.title}
                          </h5>
                          {selectedCoverage === navIdx && isAutoPlayingSection5 && (
                            <div className="absolute inset-0 rounded-[0.8rem] md:rounded-[1rem] lg:rounded-[1.5rem] border border-white/20 animate-[ping_3s_ease-in-out_infinite] pointer-events-none opacity-20"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Glass Reflection */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30 z-20"></div>
                </div>
              </div>
            </div>

            {/* THE LAPTOP BASE (CHASSIS) - Thinner, Wider, and Curved - Silver Aluminum */}
            <div className="relative w-full h-4 md:h-7 bg-slate-800 shadow-[0_40px_120px_rgba(0,0,0,1)] border-x border-b border-white/10 flex flex-col items-center -mt-[1px] z-20 rounded-b-[2rem] md:rounded-b-[4rem]"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #f1f5f9, #94a3b8, #475569)'
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
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></div>
            <span className="uppercase">{t('home.features.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-center leading-tight overflow-visible">
            <span className="text-white block py-2">{t('home.features.title.moreThan')}</span>
            <span className="gradient-text block -mt-6 py-4 px-4 overflow-visible whitespace-pre-line leading-[1.1]">{t('home.features.title.training')}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(t('home.features.cards', { returnObjects: true }) as Array<{ title: string; tag: string; desc: string }>).map((card, i) => (
            <FeatureCard
              key={i}
              icon={
                i === 0 ? <Users className="w-8 h-8" /> :
                  i === 1 ? <div className="relative w-8 h-8"><Gamepad2 className="w-6 h-6 absolute top-0 left-0 z-10" /><Gamepad2 className="w-6 h-6 absolute bottom-0 right-0 opacity-50" /></div> :
                    i === 2 ? <Smartphone className="w-8 h-8" /> :
                      <Target className="w-8 h-8" />
              }
              title={card.title}
              tag={card.tag}
              description={card.desc}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* 7. Comparison Section */}
      <SectionWrapper ref={compareRef}>
        <div className="flex flex-col items-center mb-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"></div>
            <span>{t('home.comparison.badge')}</span>
          </div>
          <h2 className={`text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-center overflow-visible ${i18n.language === 'th' ? 'leading-[1.15]' : 'leading-[0.9]'}`}>
            <span className="text-white block whitespace-pre-line overflow-visible py-2">{t('home.comparison.title.line1')}</span>
            <span className={`gradient-text block whitespace-pre-line overflow-visible px-4 ${i18n.language === 'th' ? '-mt-5 md:-mt-2 py-4' : '-mt-4 py-2'}`}>{t('home.comparison.title.line2')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          <div className="lg:col-span-7 rounded-[2rem] border border-white/10 bg-slate-900/40 backdrop-blur-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-full">
            <div className="w-full flex-grow">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 md:p-8 text-slate-400 uppercase tracking-[0.2em] text-[10px] md:text-sm font-black w-[45%]">
                      {t('home.comparison.table.headers.advantage')}
                    </th>
                    <th className="p-2 md:p-6 text-center bg-cyan-500/5 w-[18%]">
                      <div className="flex flex-col items-center">
                        <span className="gradient-text font-black text-[7px] md:text-sm italic tracking-tighter uppercase leading-none">{t('home.comparison.table.headers.vtac')}</span>
                      </div>
                    </th>
                    <th className="p-2 md:p-6 text-center text-slate-500 font-black text-[9px] md:text-xs italic tracking-tighter uppercase opacity-60 w-[18%]">
                      {t('home.comparison.table.headers.org')}
                    </th>
                    <th className="p-2 md:p-6 text-center text-slate-500 font-black text-[9px] md:text-xs italic tracking-tighter uppercase opacity-60 w-[18%]">
                      {t('home.comparison.table.headers.video')}
                    </th>
                  </tr>
                </thead>
                <tbody className="font-bold text-slate-300">
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      onClick={() => handleManualCompare(i)}
                      className={`group border-b border-white/5 cursor-pointer transition-all duration-500 relative ${activeCompareIdx === i ? 'bg-white/[0.08]' : 'hover:bg-white/[0.02]'}`}
                    >
                      <td className={`p-4 md:p-8 font-bold italic text-[9px] md:text-sm whitespace-normal leading-tight transition-all duration-500 ${activeCompareIdx === i ? 'text-cyan-400 pl-6 md:pl-10' : 'text-slate-300'}`}>
                        {activeCompareIdx === i && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-cyan-500 shadow-[2px_0_10px_rgba(6,182,212,0.5)]"></div>
                        )}
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
            {/* Multi-layered Ambient Background Glow - Shifted Top-Right */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/20 blur-[100px] rounded-full opacity-40 group-hover:opacity-70 transition-all duration-1000"></div>
            <div className="absolute -top-10 -right-10 w-[300px] h-[300px] bg-blue-500/30 blur-[60px] rounded-full opacity-30 group-hover:opacity-60 transition-all duration-1000 animate-[breathe_8s_infinite]"></div>
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/40 blur-[40px] rounded-full opacity-20 group-hover:opacity-50 transition-all duration-1000"></div>

            <div className="relative w-full max-w-[540px] aspect-[0.7/1] lg:aspect-auto lg:h-full bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 rounded-[2rem] md:rounded-[2.5rem] p-1.5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/20 flex flex-col group-hover:border-cyan-500/30 transition-colors duration-700 backface-visibility-hidden transform-gpu translate-z-0">

              {/* Refined iPad Side Button - Silver Finish */}
              <div className="absolute top-20 -right-[2px] flex flex-col z-50">
                <div className="w-[3px] h-10 bg-slate-400 rounded-l-sm border-l border-white/10 shadow-inner"></div>
              </div>

              <div className="relative flex-grow bg-slate-950 rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden border-[1px] border-slate-900 shadow-inner backface-visibility-hidden">
                {/* Minimal Tablet Sensor */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500/20 z-40"></div>

                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  {comparisonRows.map((row, i) => (
                    <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-opacity ${activeCompareIdx === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                      <img
                        src={row.img}
                        className={`w-full h-full object-cover opacity-60 transition-transform duration-1000 ${activeCompareIdx === i ? 'animate-[ken-burns_20s_ease-out_forwards]' : 'scale-100'}`}
                        style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                        alt={row.feature}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                    </div>
                  ))}
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                    <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 animate-[shine_10s_infinite] opacity-30"></div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-30 p-8 pb-12 space-y-10 flex flex-col items-center">
                  <div className="min-h-[48px] flex items-center justify-center px-4 w-full">
                    <h4 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter text-cyan-400 text-center animate-in fade-in slide-in-from-bottom-2 duration-700 leading-tight drop-shadow-2xl pr-3">
                      {comparisonRows[activeCompareIdx].feature}&nbsp;
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
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] text-white italic uppercase pr-4 overflow-visible">
                {t('home.cta.title.line1')} <br />
                <span className="gradient-text inline-block pr-10 py-4 overflow-visible">{t('home.cta.title.line2')}</span>
              </h2>

              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium leading-tight italic border-x border-white/5 px-8 py-2 whitespace-pre-line">
                {t('home.cta.subtitle')} <span className="not-italic inline-block font-black ml-1"><span className="text-white">VTAC</span> <span className="text-cyan-400">MANAGER</span></span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6">
                {/* Primary Button */}
                <Link
                  to="/book-demo"
                  className="group relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#cbd5e1] to-[#94a3b8] border border-white/40 text-slate-900 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] flex items-center justify-center min-w-[200px]"
                >
                  {/* Metallic Gloss Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform pointer-events-none"></div>
                  <span className="relative z-10">{t('home.cta.button')}</span>
                </Link>

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
        @keyframes breathe-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(12deg); }
          20%, 100% { transform: translateX(200%) skewX(12deg); }
        }
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}} />
    </div>
  );
};

export default Home;