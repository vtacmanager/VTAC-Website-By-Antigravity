import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
    const { t } = useTranslation();

    const [termsHtml, setTermsHtml] = React.useState<string>('');

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('/terms-content.html')
            .then(res => res.text())
            .then(html => setTermsHtml(html))
            .catch(err => console.error('Error fetching terms:', err));
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 relative overflow-hidden">
                        <div className="relative z-10">
                            {termsHtml ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: termsHtml }}
                                    className="terms-container"
                                />
                            ) : (
                                <div className="flex items-center justify-center py-20">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
