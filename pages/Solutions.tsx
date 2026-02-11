import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SectionWrapper,
  CTASection,
  GradientBackground
} from '../components/UI.tsx';
import {
  GraduationCap,
  Star,
  Trophy,
  Calendar,
  Monitor,
  FileCheck,
  Gamepad2,
  Users,
  Award,
  Crosshair,
  Zap,
  BarChart3,
  Clock,
  TrendingUp,
  Layout,
  Check,
  ChevronRight
} from 'lucide-react';

const Solutions: React.FC = () => {
  const { t } = useTranslation();
  const [activeSector, setActiveSector] = useState<'schools' | 'youth' | 'pro'>('schools');

  // Auto-slideshow functionality
  useEffect(() => {
    const sectors: Array<'schools' | 'youth' | 'pro'> = ['schools', 'youth', 'pro'];
    const interval = setInterval(() => {
      setActiveSector((current) => {
        const currentIndex = sectors.indexOf(current);
        return sectors[(currentIndex + 1) % sectors.length];
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [activeSector]); // Resets timer on manual change

  // Auto-slide for "Key Outcomes" (Advantage) section
  const [activeAdvantageIndex, setActiveAdvantageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvantageIndex((prev) => (prev + 1) % 3);
    }, 1000); // 1 second interval
    return () => clearInterval(interval);
  }, []);

  const content = {
    schools: {
      id: 'schools',
      label: t('solutions.sectors.schools.label'),
      tag: t('solutions.sectors.schools.tag'),
      icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'purple',
      colorCode: '#8b5cf6', // Violet-500
      heading: t('solutions.sectors.schools.heading'),
      subHeading: t('solutions.sectors.schools.subHeading'),
      features: [
        {
          title: t('solutions.sectors.schools.features.harmony.title'),
          desc: t('solutions.sectors.schools.features.harmony.desc'),
          icon: <Calendar className="w-6 h-6" />
        },
        {
          title: t('solutions.sectors.schools.features.remote.title'),
          desc: t('solutions.sectors.schools.features.remote.desc'),
          icon: <Monitor className="w-6 h-6" />
        },
        {
          title: t('solutions.sectors.schools.features.analytics.title'),
          desc: t('solutions.sectors.schools.features.analytics.desc'),
          icon: <FileCheck className="w-6 h-6" />
        }
      ],
      targetOutcome: {
        label: t('solutions.sectors.schools.targetOutcome.label'),
        text: t('solutions.sectors.schools.targetOutcome.text')
      },
      image: "/images/SOLUTIONSS1.1.webp"
    },
    youth: {
      id: 'youth',
      label: t('solutions.sectors.youth.label'),
      tag: t('solutions.sectors.youth.tag'),
      icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'orange',
      colorCode: '#d97757', // Earthy Orange
      heading: t('solutions.sectors.youth.heading'),
      subHeading: t('solutions.sectors.youth.subHeading'),
      features: [
        {
          title: t('solutions.sectors.youth.features.retention.title'),
          desc: t('solutions.sectors.youth.features.retention.desc'),
          icon: <Gamepad2 className="w-6 h-6" />
        },
        {
          title: t('solutions.sectors.youth.features.parents.title'),
          desc: t('solutions.sectors.youth.features.parents.desc'),
          icon: <Users className="w-6 h-6" />
        },
        {
          title: t('solutions.sectors.youth.features.portfolios.title'),
          desc: t('solutions.sectors.youth.features.portfolios.desc'),
          icon: <Award className="w-6 h-6" />
        }
      ],
      targetOutcome: {
        label: t('solutions.sectors.youth.targetOutcome.label'),
        text: t('solutions.sectors.youth.targetOutcome.text')
      },
      image: "/images/SOLUTIONSS1.2.webp"
    },
    pro: {
      id: 'pro',
      label: t('solutions.sectors.pro.label'),
      tag: t('solutions.sectors.pro.tag'),
      icon: <Trophy className="w-6 h-6 md:w-8 md:h-8" />,
      color: 'green',
      colorCode: '#788c5d', // Muted Green
      heading: t('solutions.sectors.pro.heading'),
      subHeading: t('solutions.sectors.pro.subHeading'),
      features: [
        {
          title: t('solutions.sectors.pro.features.dominance.title'),
          desc: t('solutions.sectors.pro.features.dominance.desc'),
          icon: <Crosshair className="w-6 h-6" />
        },
        {
          title: t('solutions.sectors.pro.features.resilience.title'),
          desc: t('solutions.sectors.pro.features.resilience.desc'),
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: t('solutions.sectors.pro.features.efficiency.title'),
          desc: t('solutions.sectors.pro.features.efficiency.desc'),
          icon: <BarChart3 className="w-6 h-6" />
        }
      ],
      targetOutcome: {
        label: t('solutions.sectors.pro.targetOutcome.label'),
        text: t('solutions.sectors.pro.targetOutcome.text')
      },
      image: "/images/SOLUTIONSS1.3.webp"
    }
  };

  const activeContent = content[activeSector];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* 1. Page Header */}
      <header className="relative pt-24 pb-16 overflow-hidden text-center px-6">
        <GradientBackground />
        <div className="max-w-6xl mx-auto space-y-12 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] border border-cyan-500/20">
            <Layout className="w-3 h-3" />
            <span>{t('solutions.hero.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] text-white whitespace-pre-line">
            {t('solutions.hero.title.line1')} <br />
            <span className="gradient-text box-decoration-clone pr-10 py-1">{t('solutions.hero.title.line2')}</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-400 uppercase max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
            {t('solutions.hero.subtitle')}
          </p>
        </div>
      </header>

      {/* 2. Identity Selector */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {(Object.keys(content) as Array<keyof typeof content>).map((key, index) => {
            const item = content[key];
            const isActive = activeSector === key;
            return (
              <button
                key={key}
                onClick={() => setActiveSector(key)}
                className={`group relative flex flex-col items-center justify-center py-10 px-4 rounded-[2rem] border transition-all duration-500
                  ${isActive
                    ? `bg-white/5 scale-105`
                    : 'bg-transparent border-white/5 opacity-40 grayscale hover:opacity-80 hover:grayscale-0'
                  }`}
                style={{
                  boxShadow: isActive ? `0 0 80px -20px ${item.colorCode}99` : 'none',
                  borderColor: isActive ? `${item.colorCode}80` : undefined
                }}
              >
                {/* Active Indicator Line */}
                <div
                  className={`absolute -top-px left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-500
                    ${isActive ? 'w-2/3' : 'w-0'}`}
                  style={{ backgroundColor: item.colorCode, boxShadow: isActive ? `0 0 15px ${item.colorCode}` : 'none' }}
                ></div>

                {/* Sub-label with Number */}
                <span
                  className={`text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-4 transition-colors duration-500 ${isActive ? 'opacity-100' : 'text-slate-500'}`}
                  style={{ color: isActive ? item.colorCode : undefined }}
                >
                  0{index + 1} / {item.tag}
                </span>

                {/* Main Label */}
                <h3 className={`text-lg md:text-2xl font-black uppercase tracking-tighter leading-tight transition-transform duration-500 whitespace-pre-line ${isActive ? 'text-white scale-110' : 'text-slate-500 scale-100'}`}>
                  {item.label}
                </h3>

                {/* Interactive Dot Animation (Active Only) */}
                {isActive && (
                  <div className="mt-6 flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse delay-75"></div>
                    <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse delay-150"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Detailed Content Area - Redesigned as Single Large Window */}
      <div className="bg-slate-950 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
          <div key={activeSector} className="animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Main Large Window Container */}
            <div
              className="relative bg-slate-900/40 backdrop-blur-sm border-2 rounded-[2.5rem] p-8 md:p-12 overflow-hidden transition-all duration-500 hover:scale-[1.01]"
              style={{
                borderColor: activeContent.colorCode,
                boxShadow: `0 0 30px ${activeContent.colorCode}33, inset 0 0 20px ${activeContent.colorCode}11`
              }}
            >
              {/* Background Glow inside the window */}
              <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none -mr-20 -mt-20"
                style={{ backgroundColor: activeContent.colorCode }}
              ></div>

              {/* Vertical Divider (Desktop Only) */}
              <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-px bg-white/10 -translate-x-1/2 z-10"></div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

                {/* Left Side: Text Content */}
                <div className="space-y-10 py-4">
                  <div className="space-y-6">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full bg-slate-950/50 border text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md"
                      style={{ borderColor: `${activeContent.colorCode}33`, color: activeContent.colorCode }}
                    >
                      {activeContent.tag}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-[0.9] text-white">
                      {activeContent.heading}
                    </h2>
                    <p className="text-lg text-slate-400 font-medium leading-relaxed border-l-4 border-slate-800 pl-6">
                      {activeContent.subHeading}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {activeContent.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-5 group">
                        <div
                          className="shrink-0 w-12 h-12 rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-center transition-colors duration-300"
                        >
                          <div className="text-slate-400">
                            {React.cloneElement(feature.icon as React.ReactElement, { style: { color: activeContent.colorCode } })}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4
                            className="text-base font-black uppercase tracking-wide transition-colors duration-300"
                            style={{ color: activeContent.colorCode }}
                          >
                            {feature.title}
                          </h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Visual */}
                <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden group">
                  <img
                    src={activeContent.image}
                    alt={activeContent.heading}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

                  {/* Image Overlay Group */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg shrink-0"
                        style={{ backgroundColor: activeContent.colorCode }}
                      >
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">{activeContent.targetOutcome?.label}</p>
                        <p className="text-white font-bold text-sm leading-tight">{activeContent.targetOutcome?.text}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. The "Key Outcomes" Summary */}
      < SectionWrapper className="bg-slate-900/30 border-t border-white/5" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] border border-blue-500/20">
              <Zap className="w-3 h-3" />
              <span>{t('solutions.advantage.badge')}</span>
            </div>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] text-white">
              {t('solutions.advantage.title.line1')} <br />
              <span className="gradient-text box-decoration-clone pr-6 py-2">{t('solutions.advantage.title.line2')}</span>
            </h3>
            <p className="text-lg md:text-xl font-medium text-slate-400 uppercase max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
              {t('solutions.advantage.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`group bg-slate-950 p-10 rounded-[2.5rem] border transition-all duration-500
              ${activeAdvantageIndex === 0
                ? 'border-blue-500/50 shadow-[0_0_100px_-10px_rgba(59,130,246,0.6)] scale-[1.02]'
                : 'border-white/5 shadow-[0_0_60px_-15px_rgba(59,130,246,0.2)] hover:border-blue-500/50 hover:shadow-[0_0_100px_-10px_rgba(59,130,246,0.5)]'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7" />
              </div>
              <h4 className="text-4xl font-black text-white mb-2 italic">{t('solutions.advantage.cards.efficiency.value')}</h4>
              <p className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">{t('solutions.advantage.cards.efficiency.label')}</p>
              <p className="text-slate-400 font-medium leading-relaxed">
                {t('solutions.advantage.cards.efficiency.desc')}
              </p>
            </div>

            <div className={`group bg-slate-950 p-10 rounded-[2.5rem] border transition-all duration-500
              ${activeAdvantageIndex === 1
                ? 'border-purple-500/50 shadow-[0_0_100px_-10px_rgba(168,85,247,0.6)] scale-[1.02]'
                : 'border-white/5 shadow-[0_0_60px_-15px_rgba(168,85,247,0.2)] hover:border-purple-500/50 hover:shadow-[0_0_100px_-10px_rgba(168,85,247,0.5)]'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="text-4xl font-black text-white mb-2 italic">{t('solutions.advantage.cards.engagement.value')}</h4>
              <p className="text-xs font-black uppercase tracking-widest text-purple-500 mb-4">{t('solutions.advantage.cards.engagement.label')}</p>
              <p className="text-slate-400 font-medium leading-relaxed">
                {t('solutions.advantage.cards.engagement.desc')}
              </p>
            </div>

            <div className={`group bg-slate-950 p-10 rounded-[2.5rem] border transition-all duration-500
              ${activeAdvantageIndex === 2
                ? 'border-green-500/50 shadow-[0_0_100px_-10px_rgba(34,197,94,0.6)] scale-[1.02]'
                : 'border-white/5 shadow-[0_0_60px_-15px_rgba(34,197,94,0.2)] hover:border-green-500/50 hover:shadow-[0_0_100px_-10px_rgba(34,197,94,0.5)]'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                <FileCheck className="w-7 h-7" />
              </div>
              <h4 className="text-4xl font-black text-white mb-2 italic">{t('solutions.advantage.cards.legacy.value')}</h4>
              <p className="text-xs font-black uppercase tracking-widest text-green-500 mb-4">{t('solutions.advantage.cards.legacy.label')}</p>
              <p className="text-slate-400 font-medium leading-relaxed">
                {t('solutions.advantage.cards.legacy.desc')}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper >

      {/* 5. REDESIGNED CTA SECTION */}
      <SectionWrapper id="cta-solutions" className="pb-32 overflow-visible bg-slate-950">
        <div className="relative group max-w-7xl mx-auto">
          {/* Immersive Stadium Radial Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none -z-10 group-hover:bg-purple-500/20 transition-colors duration-1000"></div>

          {/* Main Container */}
          <div className="relative bg-slate-900/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 border border-white/10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] flex flex-col items-center text-center">
            {/* Animated Grid Background Layer */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white italic uppercase whitespace-pre-line">
                {t('solutions.cta.title.line1')} <br />
                <span className="gradient-green-text inline-block box-decoration-clone pr-6">{t('solutions.cta.title.line2')}</span>
              </h2>

              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium leading-tight italic border-x border-white/5 px-8 py-2">
                {t('solutions.cta.subtitle')}
                <>
                  <span className="text-white font-black not-italic ml-1">VTAC</span> <span className="text-cyan-400 font-black not-italic">MANAGER.</span>
                </>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6">
                {/* Primary Button */}
                <button className="group/btn relative overflow-hidden bg-white text-black text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(34,211,238,0.2)] flex items-center justify-center">
                  <span className="relative z-10">{t('solutions.cta.btnDemo')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </button>

                {/* Secondary Button */}
                <button className="relative overflow-hidden glass-card text-white border border-white/20 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white/10 transition-all active:scale-95 group/sec flex items-center justify-center">
                  <span className="relative z-10 flex items-center gap-2">
                    {t('solutions.cta.btnTrial')} <ChevronRight className="w-5 h-5 group-hover/sec:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-cyan-500/20 to-transparent blur-3xl opacity-50"></div>
          </div>
        </div>
      </SectionWrapper>
    </div >
  );
};

export default Solutions;
