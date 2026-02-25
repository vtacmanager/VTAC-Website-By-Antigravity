import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, CheckCircle2, Globe, Building2, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        department: 'general',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const departments = [
        { id: 'general', email: 'hello@vtacmanager.com' },
        { id: 'support', email: 'support@vtacmanager.com' },
        { id: 'sales', email: 'sales@vtacmanager.com' },
        { id: 'billing', email: 'billing@vtacmanager.com' },
        { id: 'partnership', email: 'partnership@vtacmanager.com' },
        { id: 'coach', email: 'coach@vtacmanager.com' }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // REPLACE WITH YOUR FORMSPREE ID
        const FORMSPREE_ID = "xojnynpa";

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: `Contact: ${formState.subject}`,
                    name: formState.name,
                    email: formState.email,
                    department: formState.department,
                    message: formState.message
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error('Formspree submission failed');
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        } catch (error) {
            console.error('Failed to send contact email:', error);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-32 pb-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <span className="inline-block py-2 px-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
                        {t('contactPage.badge')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[1.1] md:leading-[1.1]">
                        {t('contactPage.title.line1')}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic inline-block pr-6 py-2">
                            {t('contactPage.title.line2')}
                        </span><br />
                        {t('contactPage.title.line3')}
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                        {t('contactPage.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Contact Info - Left Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <Globe className="w-4 h-4 text-cyan-400" />
                            </span>
                            {t('contactPage.info.title')}
                        </h2>

                        <div className="grid gap-4">
                            {departments.map((dept) => (
                                <div
                                    key={dept.id}
                                    className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300"
                                >
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 group-hover:text-cyan-400 transition-colors">
                                        {t(`contactPage.form.departments.${dept.id}`).split('(')[0].trim()}
                                    </p>
                                    <a
                                        href={`mailto:${dept.email}`}
                                        className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors flex items-center gap-2"
                                    >
                                        <Mail className="w-4 h-4 text-cyan-500/50" />
                                        {dept.email}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 space-y-6">
                            <div className="flex items-start gap-4 p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10">
                                <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                                <div>
                                    <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1">{t('contactPage.info.locations.main')}</h4>
                                    <p className="text-slate-400 font-medium">{t('contactPage.info.locations.address')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Column */}
                    <div className="lg:col-span-8">
                        <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 relative overflow-hidden group">
                            {/* Form Gloss Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>

                            <h3 className="text-3xl font-black text-white mb-10 tracking-tight flex items-center gap-4">
                                <Send className="w-8 h-8 text-cyan-400" />
                                {t('contactPage.form.title')}
                            </h3>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-4 italic">
                                                {t('contactPage.form.name')}
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all"
                                                value={formState.name}
                                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-4 italic">
                                                {t('contactPage.form.email')}
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all"
                                                value={formState.email}
                                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-4 italic">
                                                {t('contactPage.form.department')}
                                            </label>
                                            <select
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white font-bold appearance-none focus:outline-none focus:border-cyan-500/50 transition-all cursor-pointer"
                                                value={formState.department}
                                                onChange={e => setFormState({ ...formState, department: e.target.value })}
                                            >
                                                {departments.map(dept => (
                                                    <option key={dept.id} value={dept.id} className="bg-slate-900 py-3">
                                                        {t(`contactPage.form.departments.${dept.id}`).split('(')[0].trim()}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-4 italic">
                                                {t('contactPage.form.subject')}
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all"
                                                value={formState.subject}
                                                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-4 italic">
                                            {t('contactPage.form.message')}
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-3xl py-4 px-6 text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all resize-none"
                                            value={formState.message}
                                            onChange={e => setFormState({ ...formState, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black uppercase tracking-[0.3em] rounded-2xl shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3"
                                    >
                                        <Send className="w-4 h-4" />
                                        {t('contactPage.form.submit')}
                                    </button>
                                </form>
                            ) : (
                                <div className="py-20 text-center animate-fade-in">
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                                    </div>
                                    <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                                        {t('contactPage.form.success')}
                                    </h4>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-cyan-400 font-black uppercase tracking-widest text-sm hover:text-white transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
