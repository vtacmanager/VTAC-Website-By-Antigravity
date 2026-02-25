import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Added import
import { Link } from 'react-router-dom';
import { SectionWrapper, CTASection, GradientBackground } from '../components/UI.tsx';
import {
  Trophy,
  Users,
  Target,
  Zap,
  Smartphone,
  Wifi,
  Monitor,
  Layers,
  Activity,
  Video,
  Scan,
  Gamepad2,
  Globe,
  Clock,
  TrendingUp,
  ChevronRight,
  Calendar,
  Settings, // For Standards
  LayoutTemplate, // For Blueprints
  PenTool, // For Command Lines
  Bot, // For AI Squad
  BarChart, // For Analytics
  Cloud, // For Cloud Logging
  Radio, // For Broadcast/Feed
  IdCard, // For Scout Card
  Database, // For Data CV
  Briefcase, // For Portfolio
  BrainCircuit,
  LayoutDashboard,
  Pause,
  Play,
  Volume2,
  VolumeX
} from 'lucide-react';

const StepBadge = ({ children, color = 'red' }: { children: React.ReactNode, color?: 'red' | 'purple' | 'orange' | 'blue' | 'pink' | 'green' }) => {
  let borderColor = 'border-red-500';
  let shadowColor = 'shadow-[0_0_15px_rgba(239,68,68,0.6)]';
  let textColor = 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,1)]';

  if (color === 'purple') {
    borderColor = 'border-purple-500';
    shadowColor = 'shadow-[0_0_15px_rgba(168,85,247,0.6)]';
    textColor = 'text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]';
  } else if (color === 'orange') {
    borderColor = 'border-orange-500';
    shadowColor = 'shadow-[0_0_15px_rgba(249,115,22,0.6)]';
    textColor = 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,1)]';
  } else if (color === 'blue') {
    borderColor = 'border-blue-500';
    shadowColor = 'shadow-[0_0_15px_rgba(59,130,246,0.6)]';
    textColor = 'text-blue-400';
  } else if (color === 'pink') {
    borderColor = 'border-pink-500';
    shadowColor = 'shadow-[0_0_15px_rgba(236,72,153,0.6)]';
    textColor = 'text-pink-400';
  } else if (color === 'green') {
    borderColor = 'border-green-500';
    shadowColor = 'shadow-[0_0_15px_rgba(34,197,94,0.6)]';
    textColor = 'text-green-400';
  }

  return (
    <div className={`inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card ${textColor} text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border ${borderColor} ${shadowColor} animate-pulse`}>
      {children}
    </div>
  );
};

const StepSectionHeader = ({ badge, title, subtitle, step, stepColor = 'red', badgeColor = 'red', titleSize = "text-4xl md:text-7xl" }: { badge: string, title: React.ReactNode, subtitle: string, step: string, stepColor?: 'red' | 'purple' | 'orange' | 'blue' | 'pink' | 'green', badgeColor?: 'red' | 'purple' | 'orange' | 'blue' | 'pink' | 'green', titleSize?: string }) => {
  const { i18n } = useTranslation();
  let stepTextColor = 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]';
  if (stepColor === 'purple') {
    stepTextColor = 'text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]';
  } else if (stepColor === 'orange') {
    stepTextColor = 'text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]';
  } else if (stepColor === 'blue') {
    stepTextColor = 'text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]';
  } else if (stepColor === 'pink') {
    stepTextColor = 'text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]';
  } else if (stepColor === 'green') {
    stepTextColor = 'text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]';
  }
  return (
    <div className="text-center mb-16">
      <div className="mb-12">
        <StepBadge color={badgeColor}>
          <span className={`${stepTextColor} mr-2 animate-pulse`}>{step}</span>
          <span>{badge}</span>
        </StepBadge>
      </div>
      <h2 className={`${titleSize} font-black tracking-tighter uppercase italic text-white flex flex-col items-center ${i18n.language === 'th' ? 'leading-[1.15]' : 'leading-[0.9]'}`}>
        {title}
      </h2>
      <p className="text-lg md:text-xl font-medium text-slate-400 uppercase leading-relaxed max-w-6xl mx-auto !mt-12 whitespace-pre-line">
        {subtitle}
      </p>
    </div>
  );
};

const FeatureCard = ({ title, description, image, icon: Icon, color = 'green', withGlow = false }: { title: string, description: string, image?: string, icon?: React.ElementType, color?: 'green' | 'orange' | 'blue' | 'pink' | 'purple' | 'red', withGlow?: boolean }) => {
  let hoverBorderClass = 'hover:border-green-500/50';
  let iconColorClass = 'text-green-400';
  let titleHoverClass = 'group-hover:text-green-400';
  let hoverShadowClass = 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]';

  let containerTransform = 'hover:-translate-y-2';
  let imageClass = 'opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700';

  if (color === 'green') {
    hoverBorderClass = 'hover:border-green-500/50';
    iconColorClass = 'text-green-400';
    titleHoverClass = 'group-hover:text-green-400';
    hoverShadowClass = 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]';
  } else if (color === 'orange') {
    hoverBorderClass = 'hover:border-orange-500/50';
    iconColorClass = 'text-orange-400';
    titleHoverClass = 'group-hover:text-orange-400';
    hoverShadowClass = 'hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]';
  } else if (color === 'blue') {
    hoverBorderClass = 'hover:border-blue-500/50';
    iconColorClass = 'text-blue-400';
    titleHoverClass = 'group-hover:text-blue-400';
    hoverShadowClass = 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]';
  } else if (color === 'pink') {
    hoverBorderClass = 'hover:border-pink-500/50';
    iconColorClass = 'text-pink-400';
    titleHoverClass = 'group-hover:text-pink-400';
    hoverShadowClass = 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]';
  } else if (color === 'purple') {
    hoverBorderClass = 'hover:border-purple-500/50';
    iconColorClass = 'text-purple-400';
    titleHoverClass = 'group-hover:text-purple-400';
    hoverShadowClass = 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]';
  } else if (color === 'red') {
    hoverBorderClass = 'hover:border-red-500/50';
    iconColorClass = 'text-red-400';
    titleHoverClass = 'group-hover:text-red-400';
    hoverShadowClass = 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]';
  }

  return (
    <div className={`group relative bg-slate-900 border border-white/5 rounded-[2rem] overflow-hidden ${hoverBorderClass} ${hoverShadowClass} transition-all duration-500 ${containerTransform} h-full flex flex-col`}>
      {/* Image Area */}
      <div className={`${image ? 'h-48 md:h-64' : 'h-32'} bg-slate-800 relative overflow-hidden transition-all duration-500`}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
        {image ? (
          <img src={image} alt={title} className={`w-full h-full object-cover ${imageClass}`} />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-10">
            {Icon && <Icon className="w-16 h-16 text-white" />}
          </div>
        )}
        {/* Floating Icon */}
        <div className={`absolute bottom-4 left-4 z-20 w-12 h-12 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center ${iconColorClass} shadow-lg group-hover:scale-110 transition-transform`}>
          {Icon ? <Icon className="w-6 h-6" /> : <Activity className="w-6 h-6" />}
        </div>
      </div>

      {/* Content */}
      <div className={`${image ? 'p-8' : 'p-6'} relative z-20 flex-1`}>
        <h3 className={`text-xl font-black uppercase italic text-white mb-3 ${titleHoverClass} transition-colors`}>{title}</h3>
        <p className="text-slate-400 text-sm font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Football: React.FC = () => {
  const { t, i18n } = useTranslation(); // Initialize hook

  // Update SEO Metadata for this specific Landing Page
  useEffect(() => {
    document.title = "VTAC MANAGER | Football & Team Sports Management Software";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Advanced football team management, tactics, and interactive training platform. Empower your coaches and players with VTAC MANAGER for modern sports.');
    }
    // Optional: Reset title when unmounting if you want, but since it's a SPA it's fine or you can handle it globally.
  }, []);

  /* State for Section 2 Slideshow */
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Traffic Light Logic for Section 4 (Now Virtual Experience)
  const [activeTrafficLight, setActiveTrafficLight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Video Controls for Section 3.5
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [isRemoteVideoPlaying, setIsRemoteVideoPlaying] = useState(true);
  const [isRemoteVideoMuted, setIsRemoteVideoMuted] = useState(true);

  const toggleRemoteVideo = () => {
    if (remoteVideoRef.current) {
      if (isRemoteVideoPlaying) {
        remoteVideoRef.current.pause();
      } else {
        remoteVideoRef.current.play();
      }
      setIsRemoteVideoPlaying(!isRemoteVideoPlaying);
    }
  };

  const toggleRemoteMute = () => {
    if (remoteVideoRef.current) {
      remoteVideoRef.current.muted = !remoteVideoRef.current.muted;
      setIsRemoteVideoMuted(remoteVideoRef.current.muted);
    }
  };

  // Video Controls for Section 6 (Tactical Synergy)
  const section6VideoRef = useRef<HTMLVideoElement>(null);
  const [isSection6Playing, setIsSection6Playing] = useState(true);
  const [isSection6Muted, setIsSection6Muted] = useState(true);

  const toggleSection6Video = () => {
    if (section6VideoRef.current) {
      if (isSection6Playing) {
        section6VideoRef.current.pause();
      } else {
        section6VideoRef.current.play();
      }
      setIsSection6Playing(!isSection6Playing);
    }
  };

  const toggleSection6Mute = () => {
    if (section6VideoRef.current) {
      section6VideoRef.current.muted = !section6VideoRef.current.muted;
      setIsSection6Muted(section6VideoRef.current.muted);
    }
  };

  // Video Controls for Section 1 (Hero)
  const section1VideoRef = useRef<HTMLVideoElement>(null);
  const [isSection1Playing, setIsSection1Playing] = useState(true);
  const [isSection1Muted, setIsSection1Muted] = useState(true);

  const toggleSection1Video = () => {
    if (section1VideoRef.current) {
      if (isSection1Playing) {
        section1VideoRef.current.pause();
      } else {
        section1VideoRef.current.play();
      }
      setIsSection1Playing(!isSection1Playing);
    }
  };

  const toggleSection1Mute = () => {
    if (section1VideoRef.current) {
      section1VideoRef.current.muted = !section1VideoRef.current.muted;
      setIsSection1Muted(section1VideoRef.current.muted);
    }
  };

  useEffect(() => {
    if (isHovering) return; // Pause automatic rotation when hovering

    let timeout: number;
    if (activeTrafficLight === 0) {
      // RED: 2 Seconds
      timeout = window.setTimeout(() => setActiveTrafficLight(1), 2000);
    } else if (activeTrafficLight === 1) {
      // YELLOW: 2 Seconds
      timeout = window.setTimeout(() => setActiveTrafficLight(2), 2000);
    } else if (activeTrafficLight === 2) {
      // GREEN: 5 Seconds ("Go" state)
      timeout = window.setTimeout(() => setActiveTrafficLight(0), 5000);
    }
    return () => window.clearTimeout(timeout);
  }, [activeTrafficLight, isHovering]);



  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* 1. HERO SECTION (Reused) */}
      <header className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden px-6">
        <GradientBackground />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)] mb-12">
            <Globe className="w-3 h-3 md:w-4 md:h-4" />
            <span>{t('football.hero.badge')}</span>
          </div>

          <h1 className={`text-5xl font-black tracking-tighter uppercase italic overflow-visible ${i18n.language.startsWith('th') ? 'max-md:leading-[1.4] leading-[1.15] md:text-7xl lg:text-8xl' : 'leading-[0.9] md:text-8xl'
            }`}>
            <span
              className={`text-white block overflow-visible ${i18n.language.startsWith('th') ? 'py-4 px-4' : 'py-2 md:py-0'}`}
              style={{
                paddingRight: i18n.language.startsWith('th') ? '160px' : '120px',
                marginRight: i18n.language.startsWith('th') ? '-160px' : '-120px',
                WebkitBoxDecorationBreak: 'clone',
                boxDecorationBreak: 'clone'
              }}
            >
              {t('football.hero.title.line1')}
            </span>
            {t('football.hero.title.line2') && (
              <span
                className={`gradient-text block overflow-visible px-4 ${i18n.language.startsWith('th') ? 'py-4 -mt-8' : 'py-2 -mt-4'
                  }`}
                style={{
                  backgroundImage: 'linear-gradient(135deg, #15803d 0%, #22c55e 50%, #4ade80 100%)',
                  paddingRight: i18n.language.startsWith('th') ? '160px' : '120px',
                  marginRight: i18n.language.startsWith('th') ? '-160px' : '-120px',
                  WebkitBoxDecorationBreak: 'clone',
                  boxDecorationBreak: 'clone'
                }}
              >
                {t('football.hero.title.line2')}
              </span>
            )}
            {t('football.hero.title.line3') && (
              <span
                className={`gradient-text block overflow-visible px-4 ${i18n.language.startsWith('th') ? 'py-4 -mt-8' : 'py-2 -mt-4'
                  }`}
                style={{
                  backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)',
                  paddingRight: i18n.language.startsWith('th') ? '160px' : '120px',
                  marginRight: i18n.language.startsWith('th') ? '-160px' : '-120px',
                  WebkitBoxDecorationBreak: 'clone',
                  boxDecorationBreak: 'clone'
                }}
              >
                {t('football.hero.title.line3')}
              </span>
            )}
          </h1>

          <p className="text-lg md:text-xl font-medium text-slate-400 uppercase leading-relaxed whitespace-pre-line max-w-4xl mx-auto border-l-4 border-green-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0 mt-12">
            {t('football.hero.subtitle')}
          </p>
        </div>

        {/* Full Width Background Container (Similar to Section 6) */}
        <div className="relative mt-20 w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-black h-[50vw] md:h-[60vh] max-h-[800px] group z-20">

          {/* Constrained Aspect Ratio Container: Locks BG and Video together */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto aspect-video flex items-center justify-center">
            <img
              src="/images/Football S1-BG.webp"
              alt="Hero Wide Background"
              className="w-full h-full object-cover"
            />

            {/* iMac Video Overlay - Position Locked relative to Image */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-video bg-black overflow-hidden group/video1">
              <video
                ref={section1VideoRef}
                src="/videos/Football S1_Hero Section_720-Compress.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Control Overlay - Bottom Center */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 opacity-0 group-hover/video1:opacity-100 transition-opacity duration-300 z-20">
                <button
                  onClick={toggleSection1Video}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white"
                >
                  {isSection1Playing ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={toggleSection1Mute}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white"
                >
                  {isSection1Muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
          {/* Top & Bottom Fade Overlay - Reduced */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#020617_0%,transparent_20%,transparent_80%,#020617_100%)] pointer-events-none z-20"></div>
        </div>
      </header >

      {/* STEP NAVIGATION BAR */}
      < div className="py-6 bg-slate-950 border-y border-white/5 relative lg:sticky lg:top-0 z-40 backdrop-blur-md bg-slate-950/80" >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3 md:gap-6">
          <button onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })} className="group flex flex-col md:flex-row items-center gap-2 md:gap-3 px-6 py-3 rounded-2xl bg-slate-900/50 border border-green-500/30 hover:border-green-500 hover:bg-green-500/10 transition-all cursor-pointer hover:scale-105 active:scale-95">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-black uppercase tracking-widest text-green-500 group-hover:text-green-400">STEP 01</span>
            </div>
            <span className="hidden md:block w-px h-4 bg-white/10 group-hover:bg-green-500/50 transition-colors"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase text-green-500/80 group-hover:text-white transition-colors">{t('football.stepsNav.step1')}</span>
          </button>

          <button onClick={() => document.getElementById('step-2')?.scrollIntoView({ behavior: 'smooth' })} className="group flex flex-col md:flex-row items-center gap-2 md:gap-3 px-6 py-3 rounded-2xl bg-slate-900/50 border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all cursor-pointer hover:scale-105 active:scale-95">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-xs font-black uppercase tracking-widest text-purple-500 group-hover:text-purple-400">STEP 02</span>
            </div>
            <span className="hidden md:block w-px h-4 bg-white/10 group-hover:bg-purple-500/50 transition-colors"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase text-purple-500/80 group-hover:text-white transition-colors">{t('football.stepsNav.step2')}</span>
          </button>

          <button onClick={() => document.getElementById('step-3')?.scrollIntoView({ behavior: 'smooth' })} className="group flex flex-col md:flex-row items-center gap-2 md:gap-3 px-6 py-3 rounded-2xl bg-slate-900/50 border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/10 transition-all cursor-pointer hover:scale-105 active:scale-95">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-xs font-black uppercase tracking-widest text-orange-500 group-hover:text-orange-400">STEP 03</span>
            </div>
            <span className="hidden md:block w-px h-4 bg-white/10 group-hover:bg-orange-500/50 transition-colors"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase text-orange-500/80 group-hover:text-white transition-colors">{t('football.stepsNav.step3')}</span>
          </button>

          <button onClick={() => document.getElementById('step-4')?.scrollIntoView({ behavior: 'smooth' })} className="group flex flex-col md:flex-row items-center gap-2 md:gap-3 px-6 py-3 rounded-2xl bg-slate-900/50 border border-red-500/30 hover:border-red-500 hover:bg-red-500/10 transition-all cursor-pointer hover:scale-105 active:scale-95">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs font-black uppercase tracking-widest text-red-500 group-hover:text-red-400">STEP 04</span>
            </div>
            <span className="hidden md:block w-px h-4 bg-white/10 group-hover:bg-red-500/50 transition-colors"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase text-red-500/80 group-hover:text-white transition-colors">{t('football.stepsNav.step4')}</span>
          </button>
        </div>
      </div >

      {/* 2. STEP 01 | ORGANIZE & SCHEDULE (New) */}
      < SectionWrapper id="step-1" className="bg-slate-900/10" >
        <StepSectionHeader
          step={t('football.step1.step')}
          badge={t('football.step1.badge')}
          title={
            <>
              {t('football.step1.title.line1')} <br />
              <span className={`gradient-text box-decoration-clone pr-4 overflow-visible ${i18n.language.startsWith('th') ? 'py-4 -mt-4 md:-mt-2 px-4' : ''}`} style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>
                {t('football.step1.title.line2')} <br />
                {t('football.step1.title.line3')}
              </span>
            </>
          }
          subtitle={t('football.step1.subtitle')}
          badgeColor="green"
          titleSize="text-4xl md:text-8xl"
        />

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Background Glow for Middle Card */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/20 blur-[150px] rounded-full pointer-events-none"></div>
          <FeatureCard
            title={t('football.step1.cards.card1.title')}
            description={t('football.step1.cards.card1.desc')}
            image="/images/Football S2.1.UnifiedSquadHierarc.webp"
            icon={Layers}
            color="green"
          />
          <FeatureCard
            title={t('football.step1.cards.card2.title')}
            description={t('football.step1.cards.card2.desc')}
            image="/images/Football S2.2.SynchronizedMatchdayHub.webp"
            icon={Calendar}
            color="green"
          />
          <FeatureCard
            title={t('football.step1.cards.card3.title')}
            description={t('football.step1.cards.card3.desc')}
            image="/images/Football S2.3.PerformanceReadines.webp"
            icon={Activity}
            color="green"
          />
        </div>
      </SectionWrapper >

      {/* 3. [THE SOLUTION] REMOTE RESILIENCE (Reused Section 3) */}
      <SectionWrapper id="section-3" className="bg-slate-950 relative overflow-hidden" >
        {/* Background Gradients */}
        < div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" ></div >
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        {/* White Glow behind Top-Left of Left Image */}
        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Visual Side */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <div className="absolute inset-0">
              <img src="/images/FootballS3.1.webp" alt="Remote Resilience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

          </div>

          <div className="space-y-10 relative z-10">
            <div>
              <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse mb-12">
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                <span>{t('football.section3.badge')}</span>
              </div>
              <h2 className={`text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-white flex flex-col ${i18n.language.startsWith('th') ? 'leading-[1.15]' : 'leading-[0.9]'}`}>
                <span>{t('football.section3.title.line1')}</span>
                <span className={`gradient-text inline-block box-decoration-clone pr-4 overflow-visible ${i18n.language.startsWith('th') ? 'py-4 -mt-2 md:-mt-2 px-4 -ml-4' : ''}`} style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>{t('football.section3.title.line2')}</span>
              </h2>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase text-white mb-2">{t('football.section3.features.feat1.title')}</h4>
                  <p className="text-slate-400 leading-relaxed">
                    {t('football.section3.features.feat1.desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <Smartphone className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase text-white mb-2">{t('football.section3.features.feat2.title')}</h4>
                  <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                    {t('football.section3.features.feat2.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper >

      {/* 3.5 Full Screen BG / Video Container - Locked Ratio (Like iHub) */}
      < div className="relative w-full h-screen overflow-hidden bg-black" >

        {/* Constrained Aspect Ratio Container: Locks BG and Video together */}
        < div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto aspect-video flex items-center justify-center" >

          {/* Background Image - Acts as the anchor */}
          < img
            src="/images/Football S3 BG for REMOTE RESILIENCE.webp"
            alt="Remote Resilience Background"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Overlay for depth */}
          < div className="absolute inset-0 bg-black/20 pointer-events-none" ></div >

          {/* TV Screen Video Overlay (Position Locked Relative to Image) */}
          < div className="absolute top-[49.1%] left-[50.26%] -translate-x-1/2 -translate-y-1/2 w-[38.39%] aspect-[1.837] bg-black overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group" >
            <video
              ref={remoteVideoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/remote-resilience-Compress.mp4" type="video/mp4" />
            </video>

            {/* Shine/Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>

            {/* Video Controls (Bottom Center) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={toggleRemoteVideo}
                className="p-1 md:p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-green-500 hover:border-green-500 transition-all active:scale-95"
                title={isRemoteVideoPlaying ? "Pause" : "Play"}
              >
                {isRemoteVideoPlaying ? <Pause className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" /> : <Play className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />}
              </button>
              <button
                onClick={toggleRemoteMute}
                className="p-1 md:p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-blue-500 hover:border-blue-500 transition-all active:scale-95"
                title={isRemoteVideoMuted ? "Unmute" : "Mute"}
              >
                {isRemoteVideoMuted ? <VolumeX className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" /> : <Volume2 className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" />}
              </button>
            </div>
          </div >
        </div >
      </div >


      {/* 4. [THE WOW FACTOR] VIRTUAL EXPERIENCE (Reused Section 4) */}
      < div className="py-24 bg-slate-900 relative overflow-hidden" >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse mb-12">
              <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
              <span>{t('football.section4.badge')}</span>
            </div>
            <h2 className={`text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-white flex flex-col items-center ${i18n.language.startsWith('th') ? 'leading-[1.15]' : 'leading-[0.8]'}`}>
              <span className={`overflow-visible ${i18n.language.startsWith('th') ? '' : 'px-4'}`}>{t('football.section4.title.line1')}</span>
              <span className={`bg-clip-text text-transparent inline-block box-decoration-clone overflow-visible ${i18n.language.startsWith('th') ? 'py-4 -mt-2 px-4 -ml-4' : 'px-4'}`} style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>{t('football.section4.title.line2')}</span>
            </h2>
            <p className="text-lg md:text-xl font-medium text-slate-400 uppercase leading-relaxed max-w-6xl mx-auto mt-12 whitespace-pre-line">
              {t('football.section4.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" onMouseLeave={() => setIsHovering(false)}>
            {/* TRAFFIC LIGHT LOGIC REUSED */}
            {/* Step 1: Scan (RED) */}
            <div
              onMouseEnter={() => { setIsHovering(true); setActiveTrafficLight(0); }}
              className={`group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-700 backdrop-blur-sm ${activeTrafficLight === 0 ? 'bg-slate-900/60 scale-105 opacity-100 z-10' : 'bg-slate-900/20 scale-95 opacity-50 z-0'}`}
              style={{
                borderColor: activeTrafficLight === 0 ? '#ef444480' : 'rgba(255,255,255,0.05)',
                boxShadow: activeTrafficLight === 0 ? '0 0 50px -10px #ef444450' : 'none'
              }}
            >
              {activeTrafficLight === 0 && (
                <>
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 h-[3px] w-2/3 rounded-full bg-red-500 shadow-[0_0_15px_#ef4444]"></div>
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 pointer-events-none -mr-10 -mt-10 bg-red-500"></div>
                </>
              )}
              <div className="relative z-10 w-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl font-black transition-colors duration-500 ${activeTrafficLight === 0 ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-600'}`}>1</div>
                <div className={`w-full aspect-[4/3] h-auto rounded-2xl mb-6 flex items-center justify-center border transition-colors duration-500 relative overflow-hidden ${activeTrafficLight === 0 ? 'bg-black/50 border-red-500/30' : 'bg-black/20 border-white/5'}`}>
                  <img src="/images/Football-Section4.1.webp" alt="Instant Connect" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                </div>
                <h3 className={`text-2xl font-black uppercase italic mb-2 transition-colors duration-500 ${activeTrafficLight === 0 ? 'text-white' : 'text-slate-500'}`}>{t('football.section4.cards.card1.title')}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">{t('football.section4.cards.card1.tag')}</p>
                <p className="text-slate-400">{t('football.section4.cards.card1.desc')}</p>
                <div className={`mt-6 flex gap-1 transition-opacity duration-500 ${activeTrafficLight === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse delay-75"></div>
                  <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse delay-150"></div>
                </div>
              </div>
            </div>

            {/* Step 2: Control (YELLOW) */}
            <div
              onMouseEnter={() => { setIsHovering(true); setActiveTrafficLight(1); }}
              className={`group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-700 backdrop-blur-sm ${activeTrafficLight === 1 ? 'bg-slate-900/60 scale-105 opacity-100 z-10' : 'bg-slate-900/20 scale-95 opacity-50 z-0'}`}
              style={{
                borderColor: activeTrafficLight === 1 ? '#eab30880' : 'rgba(255,255,255,0.05)',
                boxShadow: activeTrafficLight === 1 ? '0 0 50px -10px #eab30850' : 'none'
              }}
            >
              {activeTrafficLight === 1 && (
                <>
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 h-[3px] w-2/3 rounded-full bg-yellow-500 shadow-[0_0_15px_#eab308]"></div>
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 pointer-events-none -mr-10 -mt-10 bg-yellow-500"></div>
                </>
              )}
              <div className="relative z-10 w-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl font-black transition-colors duration-500 ${activeTrafficLight === 1 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-800 text-slate-600'}`}>2</div>
                <div className={`w-full aspect-[4/3] h-auto rounded-2xl mb-6 flex items-center justify-center border transition-colors duration-500 relative overflow-hidden ${activeTrafficLight === 1 ? 'bg-black/50 border-yellow-500/30' : 'bg-black/20 border-white/5'}`}>
                  <img src="/images/Football-Section4.2.webp" alt="Remote Joy Control" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                </div>
                <h3 className={`text-2xl font-black uppercase italic mb-2 transition-colors duration-500 ${activeTrafficLight === 1 ? 'text-white' : 'text-slate-500'}`}>{t('football.section4.cards.card2.title')}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">{t('football.section4.cards.card2.tag')}</p>
                <p className="text-slate-400">{t('football.section4.cards.card2.desc')}</p>
                <div className={`mt-6 flex gap-1 transition-opacity duration-500 ${activeTrafficLight === 1 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
                  <div className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse delay-150"></div>
                </div>
              </div>
            </div>

            {/* Step 3: Sync (GREEN) */}
            <div
              onMouseEnter={() => { setIsHovering(true); setActiveTrafficLight(2); }}
              className={`group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-700 backdrop-blur-sm ${activeTrafficLight === 2 ? 'bg-slate-900/60 scale-105 opacity-100 z-10' : 'bg-slate-900/20 scale-95 opacity-50 z-0'}`}
              style={{
                borderColor: activeTrafficLight === 2 ? '#22c55e80' : 'rgba(255,255,255,0.05)',
                boxShadow: activeTrafficLight === 2 ? '0 0 50px -10px #22c55e50' : 'none'
              }}
            >
              {activeTrafficLight === 2 && (
                <>
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 h-[3px] w-2/3 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e]"></div>
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 pointer-events-none -mr-10 -mt-10 bg-green-500"></div>
                </>
              )}
              <div className="relative z-10 w-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl font-black transition-colors duration-500 ${activeTrafficLight === 2 ? 'bg-green-500/20 text-green-400' : 'bg-slate-800 text-slate-600'}`}>3</div>
                <div className={`w-full aspect-[4/3] h-auto rounded-2xl mb-6 flex items-center justify-center border transition-colors duration-500 relative overflow-hidden ${activeTrafficLight === 2 ? 'bg-black/50 border-green-500/30' : 'bg-black/20 border-white/5'}`}>
                  <img src="/images/Football-Section4.3.webp" alt="Multiplayer Sync" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                </div>
                <h3 className={`text-2xl font-black uppercase italic mb-2 transition-colors duration-500 ${activeTrafficLight === 2 ? 'text-white' : 'text-slate-500'}`}>{t('football.section4.cards.card3.title')}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">{t('football.section4.cards.card3.tag')}</p>
                <p className="text-slate-400">{t('football.section4.cards.card3.desc')}</p>
                <div className={`mt-6 flex gap-1 transition-opacity duration-500 ${activeTrafficLight === 2 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-75"></div>
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. STEP 02 | PRE & POST-MATCH (New) */}
        <SectionWrapper id="step-2" className="bg-slate-900/30 border-y border-white/5" >
          <StepSectionHeader
            step={t('football.step2.step')}
            badge={t('football.step2.badge')}
            title={
              <>
                {t('football.step2.title.line1')} <br />
                <span className={`bg-clip-text text-transparent box-decoration-clone pr-4 overflow-visible ${i18n.language.startsWith('th') ? 'py-3 -mt-2' : ''}`} style={{ backgroundImage: 'linear-gradient(135deg, #a855f7 0%, #a855f7 33%, #a855f7 66%, #ffffff 100%)' }}>
                  {t('football.step2.title.line2')}
                </span>
              </>
            }
            subtitle={t('football.step2.subtitle')}
            badgeColor="purple"
            titleSize="text-4xl md:text-8xl"
          />

          {/* Core Features: 3 Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all group hover:-translate-y-2 duration-500">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl font-black text-white/20 group-hover:text-purple-400 transition-colors">01</span>
                <Video className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 group-hover:text-purple-400 transition-colors">{t('football.step2.cards.card1.title')}</h3>
              <p className="text-slate-400">{t('football.step2.cards.card1.desc')}</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all group hover:-translate-y-2 duration-500">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl font-black text-white/20 group-hover:text-purple-400 transition-colors">02</span>
                <Wifi className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 group-hover:text-purple-400 transition-colors">{t('football.step2.cards.card2.title')}</h3>
              <p className="text-slate-400">{t('football.step2.cards.card2.desc')}</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all group hover:-translate-y-2 duration-500">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl font-black text-white/20 group-hover:text-purple-400 transition-colors">03</span>
                <Bot className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-2 group-hover:text-purple-400 transition-colors">{t('football.step2.cards.card3.title')}</h3>
              <p className="text-slate-400">{t('football.step2.cards.card3.desc')}</p>
            </div>
          </div>

          {/* Feature Grid: 7 Items - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {/* Item 1: Large - The Digital War Room */}
            <div className="lg:col-span-2 lg:row-span-2 group relative bg-slate-800 rounded-3xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img src="/images/Football S5.3.TheDigitalWarRoom.webp" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="The Digital War Room" />
              <div className="absolute bottom-6 left-6 z-20 max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-green-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-sm md:text-base font-black uppercase tracking-widest text-green-400">{t('football.step2.grid.item1.badge')}</span>
                </div>
                <h3 className="text-slate-300 text-base font-normal whitespace-pre-line">{t('football.step2.grid.item1.title')}</h3>
                <p className="text-base text-slate-300 font-normal leading-relaxed whitespace-pre-line">{t('football.step2.grid.item1.desc')}</p>
              </div>
            </div>

            {/* Item 2 - Custom Match Standards */}
            <div className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between hover:border-green-500/30 transition-all">
              <div className="absolute inset-0 bg-black/60 z-0" />
              <img src="/images/Football S5.1.CustomMatchStadards.webp" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 group-hover:scale-105 transition-transform duration-700" alt="Custom Match Standards" />
              <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-green-400 mb-4 border border-white/10 relative z-10">
                <Settings className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h4 className="text-lg font-black uppercase italic text-white mb-1">{t('football.step2.grid.item2.title')}</h4>
                <p className="text-base text-slate-300 font-normal whitespace-pre-line">{t('football.step2.grid.item2.desc')}</p>
              </div>
            </div>

            {/* Item 3 - Strategic Blueprints */}
            <div className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between hover:border-green-500/30 transition-all">
              <div className="absolute inset-0 bg-black/60 z-0" />
              <img src="/images/Football S5.2.StrategicBlueprints.webp" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 group-hover:scale-105 transition-transform duration-700" alt="Strategic Blueprints" />
              <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-blue-400 mb-4 border border-white/10 relative z-10">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h4 className="text-lg font-black uppercase italic text-white mb-1">{t('football.step2.grid.item3.title')}</h4>
                <p className="text-base text-slate-300 font-normal whitespace-pre-line">{t('football.step2.grid.item3.desc')}</p>
              </div>
            </div>

            {/* Item 4 - Visual Command Lines */}
            <div className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between hover:border-green-500/30 transition-all">
              <div className="absolute inset-0 bg-black/60 z-0" />
              <img src="/images/Football S5.4.VisualCommandLines.webp" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 group-hover:scale-105 transition-transform duration-700" alt="Visual Command Lines" />
              <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-purple-400 mb-4 border border-white/10 relative z-10">
                <PenTool className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h4 className="text-lg font-black uppercase italic text-white mb-1">{t('football.step2.grid.item4.title')}</h4>
                <p className="text-base text-slate-300 font-normal whitespace-pre-line">{t('football.step2.grid.item4.desc')}</p>
              </div>
            </div>

            {/* Item 5 - Augmented Video Insight */}
            <div className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between hover:border-green-500/30 transition-all">
              <div className="absolute inset-0 bg-black/60 z-0" />
              <img src="/images/Football S5.5.AugmentedVideoIn.webp" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 group-hover:scale-105 transition-transform duration-700" alt="Augmented Video Insight" />
              <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-red-400 mb-4 border border-white/10 relative z-10">
                <Video className="w-6 h-6" />
              </div>
              <div className="relative z-10">
                <h4 className="text-lg font-black uppercase italic text-white mb-1">{t('football.step2.grid.item5.title')}</h4>
                <p className="text-base text-slate-300 font-normal whitespace-pre-line">{t('football.step2.grid.item5.desc')}</p>
              </div>
            </div>

            {/* Item 6: Wide - AI Squad Challenge */}
            <div className="lg:col-span-2 group relative bg-slate-800 rounded-3xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <img src="/images/Football S5.7.TheAISquadChallenge.webp" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="AI Squad Challenge" />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-yellow-400">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-sm md:text-base font-black uppercase tracking-widest text-yellow-400">{t('football.step2.grid.item6.badge')}</span>
                </div>
                <h3 className="text-slate-300 text-base font-normal whitespace-pre-line">{t('football.step2.grid.item6.title')}</h3>
              </div>
            </div>

            {/* Item 7: Wide - Precision Handheld Control */}
            <div className="lg:col-span-2 group relative bg-slate-800 rounded-3xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <img src="/images/Football S5.6.PrecisionHandheld.webp" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Precision Handheld Control" />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-cyan-400">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <span className="text-sm md:text-base font-black uppercase tracking-widest text-cyan-400">{t('football.step2.grid.item7.badge')}</span>
                </div>
                <h3 className="text-slate-300 text-base font-normal whitespace-pre-line">{t('football.step2.grid.item7.title')}</h3>
              </div>
            </div>
          </div>
        </SectionWrapper>


        {/* 6. [THE PHILOSOPHY] TACTICAL SYNERGY (Reused Section 5) - Full Screen BG */}
        <div className="relative min-h-screen py-24 overflow-hidden bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse mb-12">
                <BrainCircuit className="w-3 h-3 md:w-4 md:h-4" />
                <span>{t('football.section6.badge')}</span>
              </div>
              <h2 className={`text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-white flex flex-col items-center ${i18n.language.startsWith('th') ? 'leading-[1.15]' : 'leading-[0.8]'}`}>
                <span>{t('football.section6.title.line1')}</span>
                <span className={`bg-clip-text text-transparent inline-block box-decoration-clone overflow-visible ${i18n.language.startsWith('th') ? 'py-3 -mt-2 px-12' : 'mt-0 px-4 pb-2'}`} style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 40%, #ffffff 70%, #a855f7 100%)' }}>{t('football.section6.title.line2')}</span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-slate-400 uppercase leading-relaxed max-w-5xl mx-auto mt-12 whitespace-pre-line">
                {t('football.section6.subtitle')}
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-slate-800/50 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase italic text-white mb-2 group-hover:text-blue-400 transition-colors">{t('football.section6.cards.card1.title')}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t('football.section6.cards.card1.desc')}</p>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-slate-800/50 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase italic text-white mb-2 group-hover:text-blue-400 transition-colors">{t('football.section6.cards.card2.title')}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t('football.section6.cards.card2.desc')}</p>
                </div>
              </div>

              <div className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:bg-slate-800/50 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <Gamepad2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase italic text-white mb-2 group-hover:text-blue-400 transition-colors">{t('football.section6.cards.card3.title')}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t('football.section6.cards.card3.desc')}</p>
                </div>
              </div>
            </div>

            {/* Background Image placed below the cards */}
            {/* Background Image placed below the cards */}
            {/* Full Width Background Container (For Video) - Locked Ratio Logic */}
            <div className="relative mt-20 w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-black h-[50vw] md:h-[60vh] max-h-[800px] group">

              {/* Constrained Aspect Ratio Container: Locks BG and Video together */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto aspect-video flex items-center justify-center">
                <img
                  src="/images/Football S6-BG.webp"
                  alt="Tactical Synergy Background"
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Phone Screen Video Overlay - Position Locked relative to Image */}
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[34.5%] aspect-video bg-black overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] group/video z-10">
                  <video
                    ref={section6VideoRef}
                    src="/videos/Football S6-Compress.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  {/* Control Overlay - Bottom Center */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 z-20">
                    <button
                      onClick={toggleSection6Video}
                      className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white"
                    >
                      {isSection6Playing ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                    </button>

                    <button
                      onClick={toggleSection6Mute}
                      className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all text-white"
                    >
                      {isSection6Muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                  </div>
                </div>

                {/* Gradient removed from here to prevent clipping */}
              </div>

              {/* Blending Gradients - Placed on Outer Container to ensure visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 pointer-events-none z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none z-20"></div>
            </div>

          </div>
        </div>

        {/* 7. STEP 03 | LIVE-SYNC (New) */}
        <SectionWrapper id="step-3" className="bg-slate-900/10 border-t border-white/5 relative overflow-hidden" >
          {/* Background Glow for Left Card */}
          < div className="absolute -left-20 bottom-0 w-[600px] h-[600px] bg-orange-600/20 blur-[150px] rounded-full pointer-events-none" ></div >

          <StepSectionHeader
            step={t('football.step3.step')}
            badge={t('football.step3.badge')}
            title={
              <>
                {t('football.step3.title.line1')} <br />
                <span className={`bg-clip-text text-transparent box-decoration-clone pr-4 overflow-visible ${i18n.language.startsWith('th') ? 'py-3 -mt-2' : ''}`} style={{ backgroundImage: 'linear-gradient(135deg, #f97316 0%, #f97316 40%, #ffffff 70%, #f97316 100%)' }}>
                  {t('football.step3.title.line2')}
                </span>
              </>
            }
            subtitle={t('football.step3.subtitle')}
            badgeColor="orange"
            titleSize="text-4xl md:text-8xl"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title={t('football.step3.cards.card1.title')}
              description={t('football.step3.cards.card1.desc')}
              image="/images/Football S7.1.InstantSidelineAnalytics.webp"
              icon={BarChart}
              color="orange"
            />
            <FeatureCard
              title={t('football.step3.cards.card2.title')}
              description={t('football.step3.cards.card2.desc')}
              image="/images/Football S7.2.Cloud-PoweredEventLogging.webp"
              icon={Cloud}
              color="orange"
            />
            <FeatureCard
              title={t('football.step3.cards.card3.title')}
              description={t('football.step3.cards.card3.desc')}
              image="/images/Football S7.3.UnifiedStakehold.webp"
              icon={Radio}
              color="orange"
            />
          </div>
        </SectionWrapper >

        {/* 8. STEP 04 | RECRUITMENT (New) */}
        < SectionWrapper id="step-4" className="bg-slate-950 border-t border-white/5 relative overflow-hidden" >
          {/* Background Glow for Right Card */}
          < div className="absolute -right-20 bottom-0 w-[600px] h-[600px] bg-red-600/20 blur-[150px] rounded-full pointer-events-none" ></div >

          <StepSectionHeader
            step={t('football.step4.step')}
            badge={t('football.step4.badge')}
            title={
              <>
                {t('football.step4.title.line1')} <br />
                <span className={`bg-clip-text text-transparent box-decoration-clone pr-6 overflow-visible ${i18n.language.startsWith('th') ? 'py-3 -mt-2' : 'pb-4'}`} style={{ backgroundImage: 'linear-gradient(135deg, #ef4444 0%, #ef4444 33%, #ef4444 66%, #ffffff 100%)' }}>
                  {t('football.step4.title.line2')}
                </span>
              </>
            }
            subtitle={t('football.step4.subtitle')}
            badgeColor="red"
            titleSize="text-4xl md:text-8xl"
          />

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title={t('football.step4.cards.card1.title')}
              description={t('football.step4.cards.card1.desc')}
              image="/images/Football S8.1.EliteVisualScoutCard-ezgif.com-jpg-to-webp-converter.webp"
              icon={IdCard}
              color="red"
            />
            <FeatureCard
              title={t('football.step4.cards.card2.title')}
              description={t('football.step4.cards.card2.desc')}
              image="/images/Football S8.2.VerifiedDataCV-ezgif.com-jpg-to-webp-converter.webp"
              icon={Database}
              color="red"
            />
            <FeatureCard
              title={t('football.step4.cards.card3.title')}
              description={t('football.step4.cards.card3.desc')}
              image="/images/Football S8.3.StrategicCoachingPortfolio-ezgif.com-jpg-to-webp-converter.webp"
              icon={Briefcase}
              color="red"
            />
          </div>
        </SectionWrapper >

        {/* 9. CTA (Reused from Solutions Code in previous files, same as existing Grid Section 6) */}
        {/* 9. CTA */}
        <SectionWrapper id="cta-solutions" className="pb-32 overflow-visible bg-slate-950">
          <div className="relative group max-w-7xl mx-auto">
            {/* Immersive Stadium Radial Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none -z-10 group-hover:bg-purple-500/20 transition-colors duration-1000"></div>

            {/* Main Container */}
            <div className="relative bg-slate-900/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 border border-white/10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] flex flex-col items-center text-center">
              {/* Animated Grid Background Layer */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

              <div className="relative z-10 space-y-8">
                <h2 className={`text-5xl md:text-8xl font-black tracking-tighter text-white italic uppercase ${i18n.language === 'th' ? 'leading-tight' : 'leading-[0.9]'}`}>
                  {t('football.cta.title.line1')} <br />
                  <span className={`gradient-text inline-block pr-6 overflow-visible box-decoration-clone ${i18n.language === 'th' ? 'py-3 -mt-5' : 'py-2 -mt-2 md:-mt-4'}`} style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>{t('football.cta.title.line2')}</span>
                </h2>

                <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium leading-tight italic border-x border-white/5 px-8 py-2">
                  {t('football.cta.subtitle')}
                  <>
                    <span className="text-white font-black not-italic ml-1">VTAC</span> <span className="text-cyan-400 font-black not-italic">MANAGER.</span>
                  </>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6">
                  {/* Primary Button */}
                  <Link
                    to="/book-demo"
                    className="group relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#cbd5e1] to-[#94a3b8] border border-white/40 text-slate-900 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] flex items-center justify-center"
                  >
                    {/* Metallic Gloss Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] transition-transform pointer-events-none"></div>
                    <span className="relative z-10">{t('football.cta.btnDemo')}</span>
                  </Link>

                  {/* Secondary Button */}
                  <a
                    href="https://app.vtacmanager.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden glass-card text-white border border-white/20 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white/10 transition-all active:scale-95 group/sec flex items-center justify-center min-w-[200px]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t('football.cta.btnTrial')} <ChevronRight className="w-5 h-5 group-hover/sec:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-cyan-500/20 to-transparent blur-3xl opacity-50"></div>
            </div>
          </div>
        </SectionWrapper>
      </div >
    </div >
  );
};

export default Football;
