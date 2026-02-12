import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  SectionWrapper,
  GradientBackground,
  CTASection,
  FeatureCard
} from '../components/UI.tsx';
import ToolCabinetScrollytelling from '../components/ToolCabinetScrollytelling.tsx';
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
  Smartphone,
  FileX,
  CloudOff,
  Gamepad2,
  ArrowRight,
  ArrowDown,
  BrainCircuit,
  GraduationCap,
  Trophy
} from 'lucide-react';

/**
 * SEO KEYWORDS (For context): 
 * Sports team management software, Interactive tactical training platform, 
 * Player development system, Remote interactive training.
 */

const SimpleSlideshow = ({
  images,
  interval = 3000,
  overlay,
  activeIndex
}: {
  images: string[],
  interval?: number,
  overlay?: React.ReactNode,
  activeIndex?: number
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const index = activeIndex !== undefined ? activeIndex : internalIndex;

  useEffect(() => {
    if (activeIndex !== undefined) return;
    const timer = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, activeIndex]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" />
        </div>
      ))}
      {overlay}
    </div>
  );
};

const IHub: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  // State for Section 2 Timeline
  // Section 2 Timeline Steps Data
  const [activeStep, setActiveStep] = useState(0);
  const [isStepAutoPlaying, setIsStepAutoPlaying] = useState(true);
  const stepTimerRef = useRef<number | null>(null);

  // Section 4 Controlled Slideshow State
  const [legacyIndex, setLegacyIndex] = useState(0);
  const [vtacIndex, setVtacIndex] = useState(0);

  // Cycle Legacy Index
  useEffect(() => {
    const timer = setInterval(() => setLegacyIndex((prev) => (prev + 1) % 2), 5000);
    return () => clearInterval(timer);
  }, []);

  // Cycle VTAC Index
  useEffect(() => {
    const timer = setInterval(() => setVtacIndex((prev) => (prev + 1) % 2), 5000);
    return () => clearInterval(timer);
  }, []);

  const pillarItems = [
    {
      title: t('platform.capabilities.pillars.management.title'),
      icon: <Layers />,
      tag: "The Foundation",
      display: {
        items: t('platform.capabilities.pillars.management.features', { returnObjects: true }) as string[],
        image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&q=80&w=1200",
        accent: "from-blue-500 to-cyan-500"
      }
    },
    {
      title: t('platform.capabilities.pillars.tactics.title'),
      icon: <Zap />,
      tag: "The Engine",
      display: {
        items: t('platform.capabilities.pillars.tactics.features', { returnObjects: true }) as string[],
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200",
        accent: "from-cyan-400 to-blue-600"
      }
    },
    {
      title: t('platform.capabilities.pillars.development.title'),
      icon: <TrendingUp />,
      tag: "The Future",
      display: {
        items: t('platform.capabilities.pillars.development.features', { returnObjects: true }) as string[],
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
      label: t('platform.workflow.steps.before.label'),
      navLabel: t('platform.workflow.steps.before.navLabel'),
      headline: t('platform.workflow.steps.before.headline'),
      body: t('platform.workflow.steps.before.body'),
      bullets: t('platform.workflow.steps.before.bullets', { returnObjects: true }) as string[],
      icon: <Calendar className="w-6 h-6" />,
      image: "/images/Platform Section2.1.webp",
      color: "blue",
      glow: "rgba(59,130,246,0.5)"
    },
    {
      id: "during",
      label: t('platform.workflow.steps.during.label'),
      navLabel: t('platform.workflow.steps.during.navLabel'),
      headline: t('platform.workflow.steps.during.headline'),
      body: t('platform.workflow.steps.during.body'),
      bullets: t('platform.workflow.steps.during.bullets', { returnObjects: true }) as string[],
      icon: <MousePointer2 className="w-6 h-6" />,
      image: "/images/Platform Section2.2.webp",
      color: "cyan",
      glow: "rgba(34,211,238,0.5)",
      isHighlight: true
    },
    {
      id: "after",
      label: t('platform.workflow.steps.after.label'),
      navLabel: t('platform.workflow.steps.after.navLabel'),
      headline: t('platform.workflow.steps.after.headline'),
      body: t('platform.workflow.steps.after.body'),
      bullets: t('platform.workflow.steps.after.bullets', { returnObjects: true }) as string[],
      icon: <History className="w-6 h-6" />,
      image: "/images/Platform Section2.3.webp",
      color: "purple",
      glow: "rgba(168,85,247,0.5)"
    },
    {
      id: "remote",
      label: t('platform.workflow.steps.remote.label'),
      navLabel: t('platform.workflow.steps.remote.navLabel'),
      headline: t('platform.workflow.steps.remote.headline'),
      body: t('platform.workflow.steps.remote.body'),
      bullets: t('platform.workflow.steps.remote.bullets', { returnObjects: true }) as string[],
      icon: <Smartphone className="w-6 h-6" />,
      image: "/images/Platform Section2.4.webp",
      color: "emerald",
      glow: "rgba(16,185,129,0.5)"
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
      <header className="relative flex flex-col items-center text-center px-6 overflow-visible pt-12 pb-10">
        <GradientBackground />

        {/* Subtle schematic background element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-500/20 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-6xl flex flex-col items-center">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] animate-in fade-in slide-in-from-bottom-4 duration-1000 mt-8 mb-[24px]">
            <Cpu className="w-4 h-4" />
            <span>{t('platform.hero.badge')}</span>
          </div>

          <h1 className={`text-4xl xs:text-5xl md:text-8xl font-black uppercase text-center italic overflow-visible animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 ${i18n.language.startsWith('th') ? 'leading-[1.6] tracking-normal' : 'leading-[0.9] tracking-tighter'}`}>
            {i18n.language.startsWith('th') ? (
              <>
                <span className="text-white block py-4 px-4 overflow-visible">
                  {t('platform.hero.title.line1')}
                </span>
                <span className={`gradient-text block overflow-visible px-4 py-4 -mt-[64px] md:-mt-[50px] box-decoration-clone relative z-10`}>
                  {t('platform.hero.title.line2')}
                </span>
              </>
            ) : (
              <>
                <span className="text-white block py-2 overflow-visible">{t('platform.hero.title.line1')}</span>
                <span className={`gradient-text block overflow-visible px-4 py-2 -mt-4 md:-mt-6`}>{t('platform.hero.title.line2')}</span>
                <span className={`gradient-text block overflow-visible px-4 py-2 -mt-4 md:-mt-6`}>{t('platform.hero.title.line3')}</span>
              </>
            )}
          </h1>

          <p className={`text-lg md:text-xl font-medium text-slate-400 uppercase max-w-4xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ${i18n.language === 'th' ? 'mt-[24px]' : 'mt-[56px]'} whitespace-pre-line`}>
            {t('platform.hero.subtitle')}
          </p>

        </div>
      </header>
      <ToolCabinetScrollytelling />

      {/* 2. HOW VTAC WORKS — TIMELINE + INTERACTIVE FLOW */}
      <SectionWrapper id="how-it-works" className="bg-slate-900/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full glass-card text-purple-400 text-[10px] font-black uppercase tracking-[0.3em] mb-[56px]">
              <Workflow className="w-3 h-3" />
              <span>{t('platform.workflow.badge')}</span>
            </div>
            <h2 className={`text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-center overflow-visible ${i18n.language === 'th' ? 'leading-[1.15]' : 'leading-[0.9]'} mb-[56px]`}>
              {i18n.language === 'th' ? (
                <>
                  <span className="text-white block py-2 overflow-visible">{t('platform.workflow.title.line1')}</span>
                  <span className="text-white block py-2 overflow-visible -mt-5 md:-mt-4">{t('platform.workflow.title.line2')}</span>
                  <span className={`gradient-text block overflow-visible px-4 py-4 -mt-5 md:-mt-4`}>{t('platform.workflow.title.line3')}</span>
                </>
              ) : (
                <>
                  <span className="text-white block py-2 overflow-visible">{t('platform.workflow.title.line1')}</span>
                  <span className={`gradient-text block overflow-visible px-4 py-2 -mt-4 md:-mt-6`}>{t('platform.workflow.title.line2')}</span>
                </>
              )}
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed uppercase">
              {t('platform.workflow.subtitle')}
            </p>
          </div>

          {/* Content Panel: Split 45 / 55 */}
          <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center min-h-[400px]">
            {/* Left Panel: Text Content (40%) */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700" key={`text-${activeStep}`}>
              <div className="space-y-4">
                <span className={`inline-block text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400`}>
                  {timelineSteps[activeStep].label}
                </span>
                <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter italic ${i18n.language === 'th' ? 'leading-normal' : 'leading-none'} gradient-text transition-all duration-700 py-2`}>
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
            <div className="flex flex-col gap-10 w-full animate-in fade-in zoom-in-95 duration-700 delay-150 lg:pr-16">

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

              {/* TABLET MOCKUP (4:3 Ratio) */}
              <div className="relative group h-full w-full">
                {/* Hardware Frame Styling (Tablet ratio 4:3) */}
                <div className={`absolute -inset-10 bg-${timelineSteps[activeStep].color}-500/10 blur-[100px] rounded-full transition-opacity duration-1000`}></div>

                {/* Outer Tablet Shell - Frame padding stays stationary */}
                <div
                  className="relative p-0.5 md:p-1 bg-slate-800 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.8)] flex flex-col transition-all duration-700 overflow-hidden transition-shadow"
                  style={{ boxShadow: `0 30px 70px rgba(0,0,0,0.8), 0 0 50px ${timelineSteps[activeStep].glow || 'rgba(34,211,238,0.2)'}` }}
                >
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
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeStep === idx ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <img
                          src={step.image}
                          className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${activeStep === idx ? 'scale-105' : 'scale-100'}`}
                          alt={step.headline}
                        />
                      </div>
                    ))}


                  </div>
                  {/* Tablet Bottom Bar (Indicator) */}
                  <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-16 md:w-32 h-1 md:h-1.5 bg-white/10 rounded-full z-40"></div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. CORE CAPABILITIES SECTION - THE PERFORMANCE ECOSYSTEM */}
      <SectionWrapper id="core-capabilities" className="relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-[56px]">
            <LayoutDashboard className="w-4 h-4" />
            <span>{t('platform.capabilities.badge')}</span>
          </div>
          <h2 className={`text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase text-center italic overflow-visible mb-[56px] ${i18n.language === 'th' ? 'leading-[1.15]' : 'leading-[0.9]'}`}>
            <span className="text-white block py-2 overflow-visible">
              {t('platform.capabilities.title.line1')}
            </span>
            <span className={`gradient-text block overflow-visible px-4 ${i18n.language === 'th' ? 'py-4 -mt-5' : 'py-2 -mt-4 md:-mt-6'}`}>
              {t('platform.capabilities.title.line2')}
            </span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed uppercase max-w-5xl mx-auto whitespace-pre-line">
            {t('platform.capabilities.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Pillar 1: Management */}
          <div className="group relative bg-slate-900/40 p-10 rounded-[3rem] border border-white/5 transition-all duration-500 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex flex-col h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 text-white">
              <Layers className="w-8 h-8 group-hover:animate-bounce" />
            </div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2 group-hover:text-red-500 transition-colors">
              {t('platform.capabilities.pillars.management.title')}
            </h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">
              {t('platform.capabilities.pillars.management.subtitle')}
            </p>
            <div className="space-y-4 mt-auto">
              {(t('platform.capabilities.pillars.management.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 group-hover:border-red-500/50 transition-colors">
                    <Check className="w-3 h-3 text-blue-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <span className="text-slate-300 text-[13px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Tactics (Highlighted) */}
          <div className="group relative bg-slate-900/80 p-10 rounded-[3rem] border-2 border-cyan-500 transition-all duration-500 scale-105 hover:scale-110 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] z-20 flex flex-col h-full text-left">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 group-hover:bg-red-600 text-black group-hover:text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-cyan-500/30 group-hover:shadow-red-500/50 whitespace-nowrap transition-all duration-500 animate-pulse">
              {t('platform.capabilities.pillars.tactics.badge')}
            </div>

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500 text-white">
              <Zap className="w-10 h-10 group-hover:animate-[spin_3s_linear_infinite]" />
            </div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2 group-hover:text-red-500 transition-colors">
              {t('platform.capabilities.pillars.tactics.title')}
            </h3>
            <p className="text-slate-300 font-bold uppercase tracking-widest text-xs mb-8">
              {t('platform.capabilities.pillars.tactics.subtitle')}
            </p>
            <div className="space-y-4 mt-auto">
              {(t('platform.capabilities.pillars.tactics.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.2)] group-hover:bg-red-500/20 group-hover:border-red-500/50 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all">
                    <MousePointer2 className="w-4 h-4 text-cyan-400 fill-cyan-400/20 group-hover:text-red-500 group-hover:fill-red-500/20" />
                  </div>
                  <span className="text-white text-[13px] font-black uppercase tracking-widest group-hover:text-red-100 transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            {/* Glow Effect - Red on Hover */}
            <div className="absolute -inset-2 bg-gradient-to-br from-red-500/0 to-red-500/0 blur-xl opacity-0 group-hover:opacity-100 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-1000 -z-10 rounded-[3rem]"></div>
          </div>

          {/* Pillar 3: Development */}
          <div className="group relative bg-slate-900/40 p-10 rounded-[3rem] border border-white/5 transition-all duration-500 hover:scale-105 hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex flex-col h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 text-white">
              <TrendingUp className="w-8 h-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2 group-hover:text-red-500 transition-colors">
              {t('platform.capabilities.pillars.development.title')}
            </h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">
              {t('platform.capabilities.pillars.development.subtitle')}
            </p>
            <div className="space-y-4 mt-auto">
              {(t('platform.capabilities.pillars.development.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 group-hover:border-red-500/50 transition-colors">
                    <Check className="w-3 h-3 text-purple-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <span className="text-slate-300 text-[13px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. THE PARADIGM SHIFT (Redesigned) */}
      <SectionWrapper id="paradigm-shift" className="relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-purple-400 text-[10px] font-black uppercase tracking-[0.4em] mb-[56px]">
            <BrainCircuit className="w-4 h-4" />
            <span>{t('platform.paradigm.badge')}</span>
          </div>
          <h2 className={`text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase text-center italic overflow-visible mb-[56px] ${i18n.language === 'th' ? 'leading-[1.15]' : 'leading-[0.9]'}`}>
            <span className="text-white block py-2 overflow-visible">
              {t('platform.paradigm.title.line1')}
            </span>
            <span className={`gradient-text block overflow-visible px-4 ${i18n.language === 'th' ? 'py-4 -mt-5' : 'py-2 -mt-4 md:-mt-6'}`}>
              {t('platform.paradigm.title.line2')}
            </span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed uppercase max-w-5xl mx-auto whitespace-pre-line">
            {t('platform.paradigm.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Card 1: The Boredom Barrier (Legacy) */}
          <div className="relative group bg-slate-950/50 rounded-[3rem] border border-white/5 flex flex-col overflow-hidden hover:border-red-500/30 transition-all duration-500 h-full">
            {/* Visual Header: Static/Legacy Slideshow */}
            <div className="relative h-72 overflow-hidden border-b border-white/5 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-slate-900/40 z-10 pointer-events-none"></div>
              <SimpleSlideshow
                interval={5000}
                activeIndex={legacyIndex}
                images={[
                  "/images/Platform Section4.1.webp",
                  "/images/Platform Section4.2.webp"
                ]}

              />
            </div>

            <div className="relative z-10 p-10 md:p-14 space-y-8 flex-1 flex flex-col">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent"></div>
              <div className="flex items-center gap-3 text-red-500/70 font-black uppercase tracking-widest text-xs">
                <X className="w-5 h-5" />
                <span>{t('platform.paradigm.cards.legacy.tag')}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-slate-500">
                {t('platform.paradigm.cards.legacy.title')}
              </h3>

              <p className="text-lg text-slate-500 font-medium italic border-l-4 border-slate-700 pl-6">
                {t('platform.paradigm.cards.legacy.subtitle')}
              </p>

              <div className="space-y-8 pt-4">
                <div className={`flex gap-5 transition-opacity duration-500 ${legacyIndex === 0 ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-500 ${legacyIndex === 0 ? 'bg-red-500/20 border-red-500/50' : 'bg-slate-900 border-white/5'}`}>
                    <FileX className={`w-5 h-5 ${legacyIndex === 0 ? 'text-red-500' : 'text-slate-600'}`} />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`font-black uppercase tracking-widest text-sm transition-colors duration-500 ${legacyIndex === 0 ? 'text-red-500' : 'text-slate-400'}`}>{t('platform.paradigm.cards.legacy.points.gap.title')}</h4>
                    <p className={`text-sm font-bold leading-relaxed transition-colors duration-500 ${legacyIndex === 0 ? 'text-white' : 'text-slate-600'}`}>
                      {t('platform.paradigm.cards.legacy.points.gap.desc')}
                    </p>
                  </div>
                </div>

                <div className={`flex gap-5 transition-opacity duration-500 ${legacyIndex === 1 ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-500 ${legacyIndex === 1 ? 'bg-red-500/20 border-red-500/50' : 'bg-slate-900 border-white/5'}`}>
                    <CloudOff className={`w-5 h-5 ${legacyIndex === 1 ? 'text-red-500' : 'text-slate-600'}`} />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`font-black uppercase tracking-widest text-sm transition-colors duration-500 ${legacyIndex === 1 ? 'text-red-500' : 'text-slate-400'}`}>{t('platform.paradigm.cards.legacy.points.killer.title')}</h4>
                    <p className={`text-sm font-bold leading-relaxed transition-colors duration-500 ${legacyIndex === 1 ? 'text-white' : 'text-slate-600'}`}>
                      {t('platform.paradigm.cards.legacy.points.killer.desc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-auto">
                <p className="text-slate-500 font-black uppercase tracking-widest text-xs">
                  {t('platform.paradigm.cards.legacy.bottomLine.label')} <span className="text-slate-400">{t('platform.paradigm.cards.legacy.bottomLine.text')}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: The Collective Edge (VTAC) */}
          <div className="relative group glass-card rounded-[3rem] border-cyan-500/30 flex flex-col overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)] hover:border-cyan-400 hover:shadow-[0_0_80px_rgba(34,211,238,0.2)] transition-all duration-500 h-full">
            {/* Visual Header: Digital/Active Slideshow */}
            <div className="relative h-72 overflow-hidden border-b border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none"></div>
              <SimpleSlideshow
                interval={5000}
                activeIndex={vtacIndex}
                images={[
                  "/images/Platform Section4.3.webp",
                  "/images/Platform Section4.4.webp"
                ]}

              />
            </div>

            <div className="relative z-10 p-10 md:p-14 space-y-8 flex-1 flex flex-col">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="flex items-center gap-3 text-cyan-400 font-black uppercase tracking-widest text-xs">
                <Check className="w-5 h-5" />
                <span>{t('platform.paradigm.cards.vtac.tag')}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white">
                {t('platform.paradigm.cards.vtac.title')}
              </h3>

              <p className="text-lg text-white font-medium italic border-l-4 border-cyan-500 pl-6 shadow-cyan-500/50">
                {t('platform.paradigm.cards.vtac.subtitle')}
              </p>

              <div className="space-y-8 pt-4">
                <div className={`flex gap-5 group/item transition-opacity duration-500 ${vtacIndex === 0 ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-500 ${vtacIndex === 0 ? 'bg-gradient-to-br from-cyan-400 to-blue-500 scale-110' : 'bg-slate-900 border border-white/10 scale-100'}`}>
                    <Gamepad2 className={`w-5 h-5 ${vtacIndex === 0 ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`font-black uppercase tracking-widest text-sm transition-colors duration-500 ${vtacIndex === 0 ? 'text-cyan-400' : 'text-slate-400'}`}>{t('platform.paradigm.cards.vtac.points.fun.title')}</h4>
                    <p className={`text-sm font-bold leading-relaxed transition-colors duration-500 ${vtacIndex === 0 ? 'text-white' : 'text-slate-500'}`}>
                      {t('platform.paradigm.cards.vtac.points.fun.desc')}
                    </p>
                  </div>
                </div>

                <div className={`flex gap-5 group/item transition-opacity duration-500 ${vtacIndex === 1 ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-500 ${vtacIndex === 1 ? 'bg-gradient-to-br from-cyan-400 to-blue-500 scale-110' : 'bg-slate-900 border border-white/10 scale-100'}`}>
                    <Zap className={`w-5 h-5 ${vtacIndex === 1 ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <div className="space-y-1">
                    <h4 className={`font-black uppercase tracking-widest text-sm transition-colors duration-500 ${vtacIndex === 1 ? 'text-cyan-400' : 'text-slate-400'}`}>{t('platform.paradigm.cards.vtac.points.resilience.title')}</h4>
                    <p className={`text-sm font-bold leading-relaxed transition-colors duration-500 ${vtacIndex === 1 ? 'text-white' : 'text-slate-500'}`}>
                      {t('platform.paradigm.cards.vtac.points.resilience.desc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mt-auto">
                <p className="text-cyan-400 font-black uppercase tracking-widest text-xs">
                  {t('platform.paradigm.cards.vtac.bottomLine.label')} <span className="text-white">{t('platform.paradigm.cards.vtac.bottomLine.text')}</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* 5. Trust Signals (Built for Every Level) */}
      <SectionWrapper id="trust-signals" className="relative">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="text-center mb-20 max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full glass-card text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-[56px]">
            <Shield className="w-4 h-4" />
            <span>{t('platform.trust.badge')}</span>
          </div>

          <h2 className={`text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase text-center italic overflow-visible mb-[56px] ${i18n.language === 'th' ? 'leading-[1.15]' : 'leading-[0.9]'}`}>
            <span className="text-white block py-2 overflow-visible">
              {t('platform.trust.title.line1')}
            </span>
            <span className={`gradient-text block overflow-visible px-4 ${i18n.language === 'th' ? 'py-4 -mt-5' : 'py-2 -mt-4 md:-mt-6'}`}>
              {t('platform.trust.title.line2')}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 font-medium uppercase leading-relaxed max-w-5xl mx-auto whitespace-pre-line">
            {t('platform.trust.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative z-10">

          {/* Card 1: Unified Scalability (Blue) */}
          <div className="group relative p-10 pb-0 rounded-[2.5rem] bg-slate-900/60 border border-white/5 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 flex flex-col overflow-hidden min-h-[600px]">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-3 group-hover:text-blue-400 transition-colors">
                {t('platform.trust.cards.scalability.title')}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-6">
                {t('platform.trust.cards.scalability.desc')}
              </p>
              <ul className="space-y-3 mb-8">
                {(() => {
                  const points = t('platform.trust.cards.scalability.points', { returnObjects: true });
                  return Array.isArray(points) ? points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-bold">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                      <span>{point}</span>
                    </li>
                  )) : null;
                })()}
              </ul>
            </div>
            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 right-0 h-72 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
              <img src="/images/PlatformSection5.1-UNIFIEDSCALABILITY.webp" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700" alt="Scalability" />
            </div>
          </div>

          {/* Card 2: The Scholastic Edge (Purple) */}
          <div className="group relative p-10 pb-0 rounded-[2.5rem] bg-slate-900/60 border border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500 flex flex-col overflow-hidden min-h-[600px]">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-3 group-hover:text-purple-400 transition-colors">
                {t('platform.trust.cards.scholastic.title')}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-6">
                {t('platform.trust.cards.scholastic.desc')}
              </p>
              <ul className="space-y-3 mb-8">
                {(() => {
                  const points = t('platform.trust.cards.scholastic.points', { returnObjects: true });
                  return Array.isArray(points) ? points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-bold">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
                      <span>{point}</span>
                    </li>
                  )) : null;
                })()}
              </ul>
            </div>
            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 right-0 h-72 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
              <img src="/images/PlatformSection5.2-THESCHOLASTICEDGE.webp" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700" alt="Scholastic" />
            </div>
          </div>

          {/* Card 3: Pro-Tools for Every Team (Cyan) */}
          <div className="group relative p-10 pb-0 rounded-[2.5rem] bg-slate-900/60 border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-500 flex flex-col overflow-hidden min-h-[600px]">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                <LayoutDashboard className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {t('platform.trust.cards.proTools.title')}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-6">
                {t('platform.trust.cards.proTools.desc')}
              </p>
              <ul className="space-y-3 mb-8">
                {(() => {
                  const points = t('platform.trust.cards.proTools.points', { returnObjects: true });
                  return Array.isArray(points) ? points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-bold">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                      <span>{point}</span>
                    </li>
                  )) : null;
                })()}
              </ul>
            </div>
            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 right-0 h-72 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
              <img src="/images/PlatformSection5.3-PRO-TOOLSFOREVERYTEAM.webp" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700" alt="Pro Tools" />
            </div>
          </div>

          {/* Card 4: Athlete-Centric Engagement (Emerald - Distinct) */}
          <div className="group relative p-10 pb-0 rounded-[2.5rem] bg-slate-900/60 border border-white/5 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500 flex flex-col overflow-hidden min-h-[600px]">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-3 group-hover:text-emerald-500 transition-colors">
                {t('platform.trust.cards.engagement.title')}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-6">
                {t('platform.trust.cards.engagement.desc')}
              </p>
              <ul className="space-y-3 mb-8">
                {(() => {
                  const points = t('platform.trust.cards.engagement.points', { returnObjects: true });
                  return Array.isArray(points) ? points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-bold">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      <span>{point}</span>
                    </li>
                  )) : null;
                })()}
              </ul>
            </div>
            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 right-0 h-72 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
              <img src="/images/PlatformSection5.4-ATHLETE-CENTRICENGAGEMENT.webp" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700" alt="Engagement" />
            </div>
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

            <div className="relative z-10">
              <h2 className={`text-4xl xs:text-5xl md:text-8xl font-black tracking-tighter uppercase text-center italic overflow-visible mb-[56px] ${i18n.language === 'th' ? 'leading-[1.15]' : 'leading-[0.9]'}`}>
                <span className="text-white block py-2 overflow-visible">
                  {t('platform.cta.title.line1')}
                </span>
                <span className={`gradient-text block overflow-visible px-4 ${i18n.language === 'th' ? 'py-4 -mt-5' : 'py-2 -mt-4 md:-mt-6'}`}>
                  {t('platform.cta.title.line2')}
                </span>
              </h2>

              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium leading-tight italic border-x border-white/5 px-8 py-2 mb-8">
                {t('platform.cta.subtitle')}
                <>
                  <span className="text-white font-black not-italic ml-1">VTAC</span> <span className="text-cyan-400 font-black not-italic">MANAGER.</span>
                </>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6">
                {/* Primary Button */}
                <Link
                  to="/book-demo"
                  className="group/btn relative overflow-hidden bg-white text-black text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(34,211,238,0.2)] flex items-center justify-center font-sans"
                >
                  <span className="relative z-10">{t('platform.cta.btnDemo')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </Link>

                {/* Secondary Button */}
                <button className="relative overflow-hidden glass-card text-white border border-white/20 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white/10 transition-all active:scale-95 group/sec flex items-center justify-center">
                  <span className="relative z-10 flex items-center gap-2">
                    {t('platform.cta.btnTrial')} <ChevronRight className="w-5 h-5 group-hover/sec:translate-x-1 transition-transform" />
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

export default IHub;