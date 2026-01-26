
import React, { useState } from 'react';
import { SectionWrapper, FeatureCard, CTASection, GradientBackground } from '../components/UI.tsx';
import { Check, Info, HelpCircle, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'annually' ? '$49' : '$59',
      description: 'Perfect for individual teams and grassroots coaches.',
      features: [
        'Up to 25 Players',
        'Interactive Tactics Board',
        'Basic Drill Library',
        'Mobile App Access',
        'Attendance Tracking',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: billingCycle === 'annually' ? '$129' : '$159',
      description: 'Ideal for academies and semi-pro organizations.',
      features: [
        'Up to 100 Players',
        'Multiplayer Tactical Sessions',
        'Full Drill Library Access',
        'Auto-generated Player CVs',
        'Parent Portal Integration',
        'Priority Email Support',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Club',
      price: 'Custom',
      description: 'Enterprise solutions for pro leagues and large clubs.',
      features: [
        'Unlimited Players',
        'Multi-Academy Dashboard',
        'Standardized Curriculum Tool',
        'Analytics API Access',
        'Dedicated Success Manager',
        'On-site Training Options',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'Is remote tactical training actually effective?',
      answer: 'Yes. Our platform uses visual gamification proven to improve spatial awareness and retention far more effectively than traditional video review.',
    },
    {
      question: 'Which devices are supported?',
      answer: 'VTAC Manager is fully responsive and works on any modern browser. For tactics, we recommend tablets for players and Desktop for coaches.',
    },
  ];

  return (
    <div className="bg-slate-950 text-white">
      {/* Header */}
      <header className="relative pt-16 pb-10 overflow-hidden text-center px-6">
        <GradientBackground />
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <Star className="w-3 h-3 fill-blue-400" />
            <span>Transparent Pricing for Teams</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
            PLANS FOR <br />
            <span className="gradient-text">EVERY SQUAD.</span>
          </h1>
          
          <div className="flex items-center justify-center pt-8">
            <div className="bg-slate-900 border border-white/10 rounded-full p-1.5 flex items-center">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full text-sm font-black transition-all ${billingCycle === 'monthly' ? 'bg-white text-black shadow-lg' : 'text-slate-400'}`}
              >
                MONTHLY
              </button>
              <button 
                onClick={() => setBillingCycle('annually')}
                className={`px-8 py-3 rounded-full text-sm font-black transition-all ${billingCycle === 'annually' ? 'bg-white text-black shadow-lg' : 'text-slate-400'}`}
              >
                ANNUALLY <span className="ml-2 text-[10px] text-green-500">-20%</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Plans */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`p-10 md:p-14 rounded-[3.5rem] flex flex-col h-full border transition-all duration-500 relative ${
                plan.highlighted 
                ? 'bg-gradient-to-br from-slate-800 to-slate-950 border-blue-500 shadow-2xl scale-105 z-10' 
                : 'bg-slate-900/40 border-white/5 glass-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-xl shadow-blue-600/30">
                  Most Popular
                </div>
              )}
              <div className="mb-10">
                <h3 className={`text-2xl font-black mb-4 uppercase tracking-widest ${plan.highlighted ? 'text-blue-400' : 'text-slate-500'}`}>{plan.name}</h3>
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-slate-500 font-bold">/mo</span>}
                </div>
                <p className="text-slate-400 font-medium leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-4 text-slate-300">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${plan.highlighted ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-slate-400'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-6 rounded-full font-black text-lg transition-all ${
                plan.highlighted 
                ? 'bg-white text-black hover:bg-cyan-400 hover:text-black shadow-xl shadow-white/5' 
                : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </div>
  );
};

export default Pricing;
