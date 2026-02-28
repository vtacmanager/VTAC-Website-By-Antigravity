import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="text-center space-y-4 mb-16">
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                            {t('legal.privacy.title')}
                        </h1>
                        <p className="text-slate-400">
                            {t('legal.privacy.lastUpdated')}
                        </p>
                    </div>

                    <div className="prose prose-invert prose-slate max-w-none">
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10 text-slate-300 leading-relaxed space-y-6">
                                <p>{t('legal.privacy.content')}</p>
                                {/* 
                  When you have the real content, you can paste it here like this:
                  
                  <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Data We Collect</h2>
                  <p>Your actual text here...</p>

                  <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Data</h2>
                  <p>Your actual text here...</p>
                */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
