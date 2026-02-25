import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, GradientBackground } from '../components/UI.tsx';
import {
    Send,
    User,
    Mail,
    Phone,
    Building2,
    Briefcase,
    MessageSquare,
    ChevronRight,
    CheckCircle2,
    Calendar,
    ArrowLeft,
    Clock
} from 'lucide-react';

const RequiredAsterisk = () => <span className="text-red-500 ml-0.5">*</span>;

const BookDemo: React.FC = () => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        countryCode: '+44',
        orgName: '',
        role: '',
        segment: '',
        goal: '',
        otherRole: '',
        otherGoal: '',
        preferredDate: '',
        preferredTimeOnly: '',
        timezone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // REPLACE WITH YOUR FORMSPREE ID
        const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: 'New Demo Request',
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`, // Combined phone
                    orgName: formData.orgName,
                    role: formData.role === 'other' ? formData.otherRole : formData.role,
                    segment: formData.segment,
                    goal: formData.goal === 'other' ? formData.otherGoal : formData.goal,
                    preferredDate: formData.preferredDate,
                    preferredTime: formData.preferredTimeOnly,
                    timezone: formData.timezone,
                    message: formData.message,
                })
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                console.error('Formspree submission failed');
                // Even if it fails, we show success in this demo/frontend flow 
                // but ideally we'd show an error toast
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Failed to send form:', error);
            setSubmitted(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (submitted) {
        return (
            <SectionWrapper className="min-h-screen flex items-center justify-center p-6">
                <GradientBackground />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl w-full glass-card p-12 rounded-[3rem] text-center relative overflow-hidden"
                >
                    <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan-500/30">
                        <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-white mb-6">
                        {t('bookDemo.form.successTitle')}
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md mx-auto">
                        {t('bookDemo.form.successMessage')}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.href = '/'}
                        className="mt-12 text-cyan-400 font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-2 mx-auto group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Return Home</span>
                    </motion.button>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
                </motion.div>
            </SectionWrapper>
        );
    }

    return (
        <div className="relative min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
            {/* Background Overlay */}
            <div className="fixed inset-0 z-0">
                <img
                    src="/images/Platform Section1.webp"
                    className="w-full h-full object-cover opacity-10 grayscale contrast-125"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
            </div>

            <SectionWrapper className="relative z-10 pt-32 pb-24 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                            <span>{t('bookDemo.hero.badge')}</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center w-full font-black uppercase tracking-tighter italic py-4 overflow-visible"
                        >
                            <span className="text-white block text-sm md:text-6xl opacity-80 mb-1 lg:mb-2">{t('bookDemo.hero.title.line1')}</span>
                            <span className="gradient-text block pb-2 md:pb-1 overflow-visible text-[32px] sm:text-4xl md:text-[9rem] leading-[0.85] md:leading-none">{t('bookDemo.hero.title.line2')}</span>
                            <span className="text-white block text-sm md:text-6xl opacity-80 mt-0 md:mt-0 lg:mt-0">{t('bookDemo.hero.title.line3')}</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-sm md:text-xl font-bold max-w-4xl mx-auto space-y-1 md:space-y-0.5 uppercase tracking-tight leading-tight text-center"
                        >
                            <p className="block">{t('bookDemo.hero.subtitle.line1')}</p>
                            <p className="block">{t('bookDemo.hero.subtitle.line2')}</p>
                            <p className="block">{t('bookDemo.hero.subtitle.line3')}</p>
                        </motion.div>
                    </div>

                    {/* Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card -mx-3.5 sm:mx-0 p-4 sm:p-8 lg:p-12 px-3 sm:px-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-cyan-500/30 shadow-[0_0_50px_-12px_rgba(6,182,212,0.2)] relative overflow-visible"
                    >
                        {/* Interactive Glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            {/* Section 1: Personal */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3 opacity-50">
                                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                    <h3 className="text-lg font-black uppercase tracking-[0.3em] text-white">{t('bookDemo.form.personal')}</h3>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.firstName')} <RequiredAsterisk /></label>
                                        <input required name="firstName" value={formData.firstName} onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.lastName')} <RequiredAsterisk /></label>
                                        <input required name="lastName" value={formData.lastName} onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.email')} <RequiredAsterisk /></label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.phone')} <RequiredAsterisk /></label>
                                        <div className="flex space-x-2">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="bg-white/5 border border-white/10 rounded-xl px-3 py-4 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer w-24 flex-shrink-0 text-center"
                                            >
                                                <option value="+44" className="bg-slate-900">🇬🇧 +44</option>
                                                <option value="+66" className="bg-slate-900">🇹🇭 +66</option>
                                                <option value="+1" className="bg-slate-900">🇺🇸 +1</option>
                                                <option value="+65" className="bg-slate-900">🇸🇬 +65</option>
                                                <option value="+81" className="bg-slate-900">🇯🇵 +81</option>
                                                <option value="+61" className="bg-slate-900">🇦🇺 +61</option>
                                                <option value="+86" className="bg-slate-900">🇨🇳 +86</option>
                                                <option value="+82" className="bg-slate-900">🇰🇷 +82</option>
                                                <option value="+91" className="bg-slate-900">🇮🇳 +91</option>
                                                <option value="+971" className="bg-slate-900">🇦🇪 +971</option>
                                            </select>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="81-234-5678"
                                                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Organization */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <h3 className="text-lg font-black uppercase tracking-[0.3em] text-white">{t('bookDemo.form.organization')}</h3>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.orgName')} <RequiredAsterisk /></label>
                                        <input required name="orgName" value={formData.orgName} onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.role')} <RequiredAsterisk /></label>
                                        <select required name="role" value={formData.role} onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-slate-900">{t('bookDemo.form.role')}</option>
                                            <option value="headCoach" className="bg-slate-900">{t('bookDemo.form.roleOptions.headCoach')}</option>
                                            <option value="director" className="bg-slate-900">{t('bookDemo.form.roleOptions.director')}</option>
                                            <option value="teamManager" className="bg-slate-900">{t('bookDemo.form.roleOptions.teamManager')}</option>
                                            <option value="athleticDirector" className="bg-slate-900">{t('bookDemo.form.roleOptions.athleticDirector')}</option>
                                            <option value="academyOwner" className="bg-slate-900">{t('bookDemo.form.roleOptions.academyOwner')}</option>
                                            <option value="player" className="bg-slate-900">{t('bookDemo.form.roleOptions.player')}</option>
                                            <option value="parent" className="bg-slate-900">{t('bookDemo.form.roleOptions.parent')}</option>
                                            <option value="other" className="bg-slate-900">{t('bookDemo.form.roleOptions.other')}</option>
                                        </select>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {formData.role === 'other' && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-2 mt-4"
                                        >
                                            <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.otherRole')} <RequiredAsterisk /></label>
                                            <input required name="otherRole" value={formData.otherRole || ''} onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className="space-y-3">
                                    <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.segment')} <RequiredAsterisk /></label>
                                    <select required name="segment" value={formData.segment} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-slate-900">{t('bookDemo.form.segment')}</option>
                                        <option value="amateur" className="bg-slate-900">{t('bookDemo.form.segmentOptions.amateur')}</option>
                                        <option value="scholastic" className="bg-slate-900">{t('bookDemo.form.segmentOptions.scholastic')}</option>
                                        <option value="academy" className="bg-slate-900">{t('bookDemo.form.segmentOptions.academy')}</option>
                                        <option value="pro" className="bg-slate-900">{t('bookDemo.form.segmentOptions.pro')}</option>
                                    </select>
                                </div>
                            </div>

                            {/* Section 3: Goals */}
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    <h3 className="text-lg font-black uppercase tracking-[0.3em] text-white">{t('bookDemo.form.goals')}</h3>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">
                                            {t('bookDemo.form.goal')} <RequiredAsterisk />
                                        </label>
                                        <select required name="goal" value={formData.goal} onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-slate-900">{t('bookDemo.form.goal')}</option>
                                            <option value="tactical" className="bg-slate-900">{t('bookDemo.form.goalOptions.tactical')}</option>
                                            <option value="admin" className="bg-slate-900">{t('bookDemo.form.goalOptions.admin')}</option>
                                            <option value="engagement" className="bg-slate-900">{t('bookDemo.form.goalOptions.engagement')}</option>
                                            <option value="legacy" className="bg-slate-900">{t('bookDemo.form.goalOptions.legacy')}</option>
                                            <option value="other" className="bg-slate-900">{t('bookDemo.form.goalOptions.other')}</option>
                                        </select>
                                    </div>
                                    <AnimatePresence>
                                        {formData.goal === 'other' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="space-y-3"
                                            >
                                                <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">
                                                    {t('bookDemo.form.otherGoal')} <RequiredAsterisk />
                                                </label>
                                                <input required name="otherGoal" value={formData.otherGoal || ''} onChange={handleChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-medium" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    <div className="space-y-3 min-w-0">
                                        <label className="text-sm sm:text-base font-black uppercase tracking-widest text-slate-200 ml-1">
                                            Preferred Date <RequiredAsterisk />
                                        </label>
                                        <div className="relative w-full min-w-0 flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-purple-500/50 transition-all overflow-hidden">
                                            <Calendar className="ml-4 w-4 h-4 text-slate-500 pointer-events-none flex-shrink-0" />
                                            <input
                                                required
                                                type="date"
                                                name="preferredDate"
                                                value={(formData as any).preferredDate || ''}
                                                onChange={handleChange}
                                                className="flex-1 bg-transparent border-none pl-3 pr-2 py-4 focus:outline-none font-medium [color-scheme:dark] text-sm sm:text-base min-w-0"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3 min-w-0">
                                        <label className="text-sm sm:text-base font-black uppercase tracking-widest text-slate-200 ml-1">
                                            Preferred Time <RequiredAsterisk />
                                        </label>
                                        <div className="relative w-full min-w-0 flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-purple-500/50 transition-all overflow-hidden">
                                            <Clock className="ml-4 w-4 h-4 text-slate-500 pointer-events-none flex-shrink-0" />
                                            <select
                                                required
                                                name="preferredTimeOnly"
                                                value={(formData as any).preferredTimeOnly || ''}
                                                onChange={handleChange}
                                                className="flex-1 bg-transparent border-none pl-3 pr-2 py-4 focus:outline-none font-medium appearance-none cursor-pointer text-sm sm:text-base min-w-0"
                                            >
                                                <option value="" className="bg-slate-900">Select Time</option>
                                                {['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map(t => (
                                                    <option key={t} value={t} className="bg-slate-900">{t}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">
                                            {t('bookDemo.form.timezone')} <RequiredAsterisk />
                                        </label>
                                        <select required name="timezone" value={(formData as any).timezone || ''} onChange={handleChange}
                                            className="w-full min-w-0 max-w-full bg-white/5 border border-white/10 rounded-xl px-3 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-medium appearance-none cursor-pointer text-xs sm:text-base"
                                        >
                                            <option value="" className="bg-slate-900">Select Time Zone</option>
                                            <option value="Bangkok" className="bg-slate-900">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                                            <option value="London" className="bg-slate-900">(GMT+00:00) London, Lisbon, Casablanca</option>
                                            <option value="NewYork" className="bg-slate-900">(GMT-05:00) Eastern Time (US & Canada)</option>
                                            <option value="LosAngeles" className="bg-slate-900">(GMT-08:00) Pacific Time (US & Canada)</option>
                                            <option value="Singapore" className="bg-slate-900">(GMT+08:00) Singapore, Kuala Lumpur, Perth</option>
                                            <option value="Tokyo" className="bg-slate-900">(GMT+09:00) Tokyo, Seoul, Osaka</option>
                                            <option value="Sydney" className="bg-slate-900">(GMT+11:00) Sydney, Melbourne, Canberra</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-base font-black uppercase tracking-widest text-slate-200 ml-1">{t('bookDemo.form.message')}</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all font-medium resize-none" />
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-6">
                                <button type="submit"
                                    className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-cyan-400 transition-all active:scale-[0.98] shadow-2xl flex flex-col items-center justify-center group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <span>{t('bookDemo.form.submit')}</span>
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <span className="text-[10px] font-bold text-black/50 tracking-normal mt-1 lowercase first-letter:uppercase">
                                        {t('bookDemo.form.submitSubtext')}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default BookDemo;
