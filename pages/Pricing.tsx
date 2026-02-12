import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SectionWrapper, CTASection, GradientBackground } from '../components/UI.tsx';
import { Check, Star, ShieldCheck, Zap, Globe, ChevronRight, Clock, Users, FileCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Pricing: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  const navigate = useNavigate();

  // Auto-slide for Advantage section
  const [activeAdvantageIndex, setActiveAdvantageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvantageIndex((prev) => (prev + 1) % 3);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  // Auto-slide for Pricing Plans section
  const [activePlanIndex, setActivePlanIndex] = React.useState(0);
  const [isPlanHovered, setIsPlanHovered] = React.useState(false);

  React.useEffect(() => {
    if (isPlanHovered) return;
    const interval = setInterval(() => {
      setActivePlanIndex((prev) => (prev + 1) % 3);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, [isPlanHovered]);

  const plans = [
    {
      id: 'single',
      name: t('pricing.plans.single.name'),
      tagline: t('pricing.plans.single.tagline'),
      price: billingCycle === 'annually' ? t('pricing.plans.single.price.annually') : t('pricing.plans.single.price.monthly'),
      description: t('pricing.plans.single.desc'),
      features: t('pricing.plans.single.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.single.cta'),
      highlighted: false,
      icon: Zap,
      color: 'orange',
      gradient: 'from-orange-500 to-red-600',
      glow: 'rgba(249,115,22,0.3)',
      animation: 'group-hover:animate-bounce'
    },
    {
      id: 'multi',
      name: t('pricing.plans.multi.name'),
      tagline: t('pricing.plans.multi.tagline'),
      price: billingCycle === 'annually' ? t('pricing.plans.multi.price.annually') : t('pricing.plans.multi.price.monthly'),
      description: t('pricing.plans.multi.desc'),
      features: t('pricing.plans.multi.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.multi.cta'),
      highlighted: false,
      icon: Star,
      color: 'cyan',
      gradient: 'from-cyan-400 to-blue-600',
      glow: 'rgba(6,182,212,0.3)',
      animation: 'group-hover:animate-[spin_3s_linear_infinite]'
    },
    {
      id: 'enterprise',
      name: t('pricing.plans.enterprise.name'),
      tagline: t('pricing.plans.enterprise.tagline'),
      price: t('pricing.plans.enterprise.price'),
      description: t('pricing.plans.enterprise.desc'),
      features: t('pricing.plans.enterprise.features', { returnObjects: true }) as string[],
      cta: t('pricing.plans.enterprise.cta'),
      highlighted: false,
      icon: ShieldCheck,
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      glow: 'rgba(34,197,94,0.3)',
      animation: 'group-hover:-translate-y-1 group-hover:translate-x-1'
    },
  ];

  const comparison = t('pricing.comparison', { returnObjects: true }) as any;

  return (
    <div className="bg-slate-950 text-white font-inter">
      {/* Header */}
      <header className="relative pt-24 pb-16 overflow-hidden text-center px-6">
        <GradientBackground />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
            <Globe className="w-3 h-3" />
            <span>{t('pricing.badge')}</span>
          </div>
          <h1 className={`text-4xl ${i18n.language.startsWith('th') ? 'md:text-7xl' : 'md:text-8xl'} lg:text-8xl font-black tracking-tighter uppercase italic overflow-visible text-center flex flex-col items-center ${i18n.language.startsWith('th') ? 'leading-[1.15]' : 'leading-[0.85]'}`}>
            <span className={`text-white block overflow-visible whitespace-nowrap ${i18n.language.startsWith('th') ? 'py-4 px-2 mb-0' : 'py-2 px-6 mb-0 md:mb-1'}`}>{t('pricing.title.line1')}</span>
            <span className={`${(!i18n.exists('pricing.title.line3') || (i18n.language.startsWith('th') && !i18n.exists('pricing.title.line4'))) ? 'gradient-text' : 'text-white'} block overflow-visible whitespace-nowrap ${i18n.language.startsWith('th') ? 'py-4 px-2 -mt-5 md:-mt-2' : 'py-2 px-4 -mt-4 md:-mt-6 lg:-mt-8'}`}>{t('pricing.title.line2')}</span>
            {i18n.exists('pricing.title.line3') && (
              <span className={`${(!i18n.exists('pricing.title.line4') || i18n.language.startsWith('th')) ? 'gradient-text' : 'text-white'} block overflow-visible whitespace-nowrap ${i18n.language.startsWith('th') ? 'py-4 px-2 -mt-5 md:-mt-4' : 'py-2 px-4 -mt-4 md:-mt-6 lg:-mt-8'}`}>{t('pricing.title.line3')}</span>
            )}
            {i18n.exists('pricing.title.line4') && !i18n.language.startsWith('th') && (
              <span className={`gradient-text block overflow-visible whitespace-nowrap py-2 px-6 ${i18n.language.startsWith('th') ? '-mt-4 md:-mt-8' : '-mt-4 md:-mt-6 lg:-mt-8'}`}>{t('pricing.title.line4')}</span>
            )}
          </h1>
          <p
            className={`text-lg md:text-xl text-slate-400 mx-auto font-medium leading-relaxed italic opacity-80 ${i18n.language.startsWith('th') ? 'max-w-4xl' : 'max-w-2xl'}`}
            dangerouslySetInnerHTML={{ __html: t('pricing.subtitle') }}
          />

          <div className="flex items-center justify-center pt-8">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full p-1.5 flex items-center shadow-2xl scale-110">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-10 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {t('pricing.billing.monthly')}
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-10 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${billingCycle === 'annually' ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {t('pricing.billing.annually')} <span className={`ml-2 text-[10px] font-bold ${billingCycle === 'annually' ? 'text-black/60' : 'text-green-500'}`}>{t('pricing.billing.save')}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Plan Cards */}
      <SectionWrapper className="pb-32">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const isActive = activePlanIndex === index && !isPlanHovered;
            return (
              <div
                key={plan.id}
                onMouseEnter={() => {
                  setIsPlanHovered(true);
                  setActivePlanIndex(index);
                }}
                onMouseLeave={() => setIsPlanHovered(false)}
                className={`group flex flex-col p-8 md:p-12 rounded-[4rem] border transition-all duration-700 relative glass-card
                  ${isActive
                    ? `translate-y-[-20px] scale-[1.05] border-${plan.color}-500/50 bg-slate-800/40`
                    : `bg-slate-900/40 border-white/5 hover:translate-y-[-20px] hover:scale-[1.05] hover:border-${plan.color}-500/30`
                  }`}
                style={{
                  boxShadow: isActive ? `0 0 80px -20px ${plan.glow}` : undefined
                }}
              >
                {/* iHub Style Glow Layer */}
                <div className={`absolute -inset-2 bg-gradient-to-br from-${plan.color}-500/0 to-${plan.color}-500/0 blur-xl transition-all duration-1000 -z-10 rounded-[4.5rem]
                  ${isActive
                    ? `opacity-100 from-${plan.color}-500/30 to-white/5`
                    : `opacity-0 group-hover:opacity-100 group-hover:from-${plan.color}-500/20 group-hover:to-white/5`
                  }`}></div>

                <div className="mb-10 text-center lg:text-left">
                  <div className={`w-20 h-20 rounded-[1.8rem] mb-10 flex items-center justify-center mx-auto lg:mx-0 transition-all duration-500 shadow-2xl bg-gradient-to-br ${plan.gradient} text-white
                    ${isActive ? 'rotate-[10deg] scale-110' : 'group-hover:rotate-[10deg] group-hover:scale-110'}`}>
                    <plan.icon className={`w-10 h-10 ${plan.animation} transition-transform duration-300`} />
                  </div>
                  <h3 className={`text-4xl font-black mb-3 uppercase tracking-tight transition-all duration-500 flex flex-col w-full items-center lg:items-start ${plan.highlighted || isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {plan.name.split(' ').map((word: string, i: number) => (
                      <span
                        key={i}
                        className={i === 1 ? (
                          plan.id === 'single' ? 'text-orange-500' :
                            plan.id === 'multi' ? 'text-cyan-400' :
                              plan.id === 'enterprise' ? 'text-green-500' : ''
                        ) : ''}
                      >
                        {word}
                      </span>
                    ))}
                  </h3>
                  <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-10 py-1.5 px-4 rounded-full inline-block bg-white/5 border border-white/10 transition-all duration-500
                    ${isActive
                      ? `text-${plan.color}-400 border-${plan.color}-500/30`
                      : `text-slate-500 group-hover:text-${plan.color}-400 group-hover:border-${plan.color}-500/30`
                    }`}>{plan.tagline}</p>

                  <div className="flex items-baseline justify-center lg:justify-start space-x-2 mb-4">
                    <span className={`font-black text-white tracking-tighter whitespace-nowrap transition-all duration-500 ${plan.id === 'enterprise' ? 'text-5xl lg:text-6xl' : 'text-6xl'} ${isActive ? 'scale-110 origin-left' : ''}`}>{plan.price}</span>
                    {plan.id !== 'enterprise' && <span className="text-slate-500 font-bold text-lg uppercase tracking-widest">/mo</span>}
                  </div>
                  <p className="text-slate-400 font-medium leading-relaxed italic text-sm">{plan.description}</p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

                <ul className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-4 group/item">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 bg-slate-800/50 border-white/10 text-slate-500 group-hover/item:border-${plan.color}-500/50 group-hover/item:text-${plan.color}-400`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-[13px] font-bold text-slate-300 uppercase tracking-wide group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-6 rounded-3xl font-black text-xs uppercase tracking-widest transition-all duration-500 overflow-hidden relative group/btn bg-slate-800 text-white hover:bg-white hover:text-black border border-white/5`}
                >
                  <div className="relative z-10">{plan.cta}</div>
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Elite Comparison Table */}
      <SectionWrapper className="bg-slate-900/20 py-32 border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic italic leading-none mb-6">
              {comparison.title}
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">
              {comparison.subtitle}
            </p>
          </div>

          <div className="overflow-x-auto pb-12">
            <div className="min-w-[1000px] lg:min-w-full border border-blue-500/30 rounded-[2.5rem] overflow-hidden bg-slate-900/40 backdrop-blur-xl shadow-[0_0_50px_-10px_rgba(37,99,235,0.2)]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="py-8 px-8 text-left text-xs font-black uppercase tracking-[0.3em] text-slate-400 w-1/4">Capability</th>
                    <th className="py-8 px-6 text-center text-sm font-black uppercase tracking-widest text-orange-500 w-1/4 bg-orange-500/5 border-x border-orange-500/10">{comparison.columns.single}</th>
                    <th className="py-8 px-6 text-center text-sm font-black uppercase tracking-widest text-cyan-400 w-1/4 bg-cyan-500/5 border-x border-cyan-500/10">{comparison.columns.multi}</th>
                    <th className="py-8 px-6 text-center text-sm font-black uppercase tracking-widest text-green-500 w-1/4 bg-green-500/5 border-x border-green-500/10">{comparison.columns.enterprise}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.groups.map((group: any, gi: number) => (
                    <React.Fragment key={gi}>
                      <tr className="bg-white/[0.03]">
                        <td colSpan={4} className="py-5 px-8 text-xs font-black uppercase tracking-[0.4em] text-blue-400">
                          {group.title}
                        </td>
                      </tr>
                      {group.rows.map((row: any, ri: number) => (
                        <tr key={ri} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                          <td className="py-6 px-8 text-base font-bold text-slate-400 group-hover:text-white transition-colors">{row.label}</td>
                          {[
                            { val: row.single, color: 'orange', isMulti: false },
                            { val: row.multi, color: 'cyan', isMulti: true },
                            { val: row.enterprise, color: 'green', isMulti: false }
                          ].map((col, vi) => (
                            <td
                              key={vi}
                              className={`py-6 px-6 text-center text-sm font-bold border-x ${col.isMulti
                                ? 'text-white border-cyan-500/10 bg-cyan-500/5'
                                : col.color === 'orange'
                                  ? 'text-slate-300 border-orange-500/10 bg-orange-500/5'
                                  : 'text-slate-300 border-green-500/10 bg-green-500/5'
                                }`}
                            >
                              {col.val.includes('✓') ? (
                                <span className="flex items-center justify-center gap-1.5">
                                  <span className="text-green-500 text-lg">✓</span>
                                  {col.val.replace('✓', '').trim()}
                                </span>
                              ) : col.val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-12 italic">
              * Optional Add-ons are available for Single & Multi-Team tiers. Contact our consultants for specific configurations.
            </p>
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
              <button
                onClick={() => navigate('/book-demo')}
                className="bg-slate-950 text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-transparent transition-all duration-500"
              >
                REQUEST ELITE CONFIGURATION
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper >

      {/* 4. Strategic Advantage Section with Slideshow */}
      < SectionWrapper className="bg-slate-900/30 border-t border-white/5 py-32" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] border border-blue-500/20">
              <Zap className="w-3 h-3" />
              <span>{t('pricing.advantage.badge')}</span>
            </div>
            <h3 className={`text-4xl md:text-8xl font-black tracking-tighter uppercase italic text-white flex flex-col items-center ${i18n.language.startsWith('th') ? 'leading-none' : 'leading-[0.9]'}`}>
              <span className="block">{t('pricing.advantage.title.line1')}</span>
              <span className={`gradient-text inline-block pr-6 overflow-visible ${i18n.language.startsWith('th') ? 'pt-12 pb-12 -mt-10 md:-mt-8' : 'py-2 -mt-2 md:-mt-4'}`}>{t('pricing.advantage.title.line2')}</span>
            </h3>
            <p className="text-lg md:text-xl font-medium text-slate-400 uppercase max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
              {t('pricing.advantage.subtitle')}
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
              <h4 className="text-4xl font-black text-white mb-2 italic">{t('pricing.advantage.cards.efficiency.value')}</h4>
              <p className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">{t('pricing.advantage.cards.efficiency.label')}</p>
              <p className="text-slate-400 font-medium leading-relaxed">
                {t('pricing.advantage.cards.efficiency.desc')}
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
              <h4 className="text-4xl font-black text-white mb-2 italic">{t('pricing.advantage.cards.engagement.value')}</h4>
              <p className="text-xs font-black uppercase tracking-widest text-purple-500 mb-4">{t('pricing.advantage.cards.engagement.label')}</p>
              <p className="text-slate-400 font-medium leading-relaxed">
                {t('pricing.advantage.cards.engagement.desc')}
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
              <h4 className="text-4xl font-black text-white mb-2 italic">{t('pricing.advantage.cards.legacy.value')}</h4>
              <p className="text-xs font-black uppercase tracking-widest text-green-500 mb-4">{t('pricing.advantage.cards.legacy.label')}</p>
              <p className="text-slate-400 font-medium leading-relaxed">
                {t('pricing.advantage.cards.legacy.desc')}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper >

      {/* 5. REDESIGNED CTA SECTION */}
      < SectionWrapper id="cta-pricing" className="pb-32 overflow-visible bg-slate-950" >
        <div className="relative group max-w-7xl mx-auto">
          {/* Immersive Stadium Radial Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none -z-10 group-hover:bg-purple-500/20 transition-colors duration-1000"></div>

          {/* Main Container */}
          <div className="relative bg-slate-900/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 border border-white/10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] flex flex-col items-center text-center">
            {/* Animated Grid Background Layer */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white italic uppercase whitespace-pre-line">
                {t('pricing.cta.title.line1')} <br />
                <span className="gradient-green-text inline-block box-decoration-clone pr-6">{t('pricing.cta.title.line2')}</span>
              </h2>

              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium leading-tight italic border-x border-white/5 px-8 py-2">
                {t('pricing.cta.subtitle')}
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
                  <span className="relative z-10">{t('pricing.cta.btnDemo')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </Link>

                {/* Secondary Button */}
                <button className="relative overflow-hidden glass-card text-white border border-white/20 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white/10 transition-all active:scale-95 group/sec flex items-center justify-center">
                  <span className="relative z-10 flex items-center gap-2">
                    {t('pricing.cta.btnTrial')} <ChevronRight className="w-5 h-5 group-hover/sec:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-cyan-500/20 to-transparent blur-3xl opacity-50"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. FAQ Section */}
      <SectionWrapper className="pb-32 px-0">
        <div className="max-w-4xl mx-auto md:px-6">
          <div className={`text-center mb-16 px-6 flex flex-col items-center ${i18n.language.startsWith('th') ? 'space-y-[36px] md:space-y-6' : 'space-y-6'}`}>
            <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass-card text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] border border-cyan-500/30 animate-pulse">
              <Zap className="w-3 h-3" />
              <span>{t('pricing.faq.badge')}</span>
            </div>
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-white flex flex-col items-center ${i18n.language.startsWith('th') ? 'leading-[1.15] -mt-2 md:mt-0' : 'leading-[0.85]'}`}>
              <span className={`gradient-text inline-block whitespace-pre-line overflow-visible ${i18n.language.startsWith('th') ? 'py-4' : 'py-6'}`}>{t('pricing.faq.title')}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-bold uppercase tracking-widest italic opacity-80 whitespace-pre-line">
              {t('pricing.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-16">
            {(t('pricing.faq.groups', { returnObjects: true }) as any[]).map((group, gi) => (
              <div key={gi} className="space-y-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-white border-l-4 border-cyan-500 pl-6 italic ml-6 md:ml-0">
                  {group.name}
                </h3>
                <div className="grid gap-6">
                  {group.items.map((item: any, ii: number) => (
                    <div key={ii} className={`px-4 py-6 md:p-8 rounded-[2rem] border border-white/5 bg-slate-900/30 glass-card transition-all duration-300 hover:border-cyan-500/30 group/faq`}>
                      <h4 className="text-base md:text-lg font-black uppercase tracking-tight mb-4 text-cyan-400 group-hover/faq:text-white transition-colors flex items-start gap-2 md:gap-3">
                        <span className="text-cyan-500/50 shrink-0">Q:</span>
                        {item.q}
                      </h4>
                      <p className="text-sm md:text-base text-slate-400 italic font-medium leading-relaxed flex items-start gap-2 md:gap-3">
                        <span className="text-slate-600 shrink-0">A:</span>
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Pricing;
