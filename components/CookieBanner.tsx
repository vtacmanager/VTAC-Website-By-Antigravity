import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already consented
        const consent = localStorage.getItem('vtac_cookie_consent');
        if (!consent) {
            // Small delay before showing the banner for a better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('vtac_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('vtac_cookie_consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 200, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
                            {/* Decorative Background Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10 flex-grow pr-0 lg:pr-8">
                                <h3 className="text-white font-bold text-lg mb-2">
                                    {t('cookieBanner.title', 'We value your privacy')}
                                </h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                    {t('cookieBanner.description', 'We use cookies and similar technologies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \u0022Accept All\u0022, you consent to our use of cookies as described in our ')}
                                    <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                                        {t('cookieBanner.privacyLink', 'Privacy Policy')}
                                    </Link>.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 mt-4 lg:mt-0">
                                <button
                                    onClick={handleDecline}
                                    className="px-6 py-3 rounded-xl font-bold text-sm text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/50 border border-white/5 hover:border-white/10 transition-all text-center"
                                >
                                    {t('cookieBanner.decline', 'Essential Only')}
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all text-center"
                                >
                                    {t('cookieBanner.accept', 'Accept All')}
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
