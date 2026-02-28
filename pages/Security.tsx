import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Security: React.FC = () => {
    const { t, i18n } = useTranslation();

    const [securityHtml, setSecurityHtml] = React.useState<string>('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const fileName = i18n.language === 'th' ? '/security-content-th.html' : '/security-content.html';
        fetch(fileName)
            .then(res => res.text())
            .then(html => setSecurityHtml(html))
            .catch(err => console.error('Error fetching security info:', err));
    }, [i18n.language]);

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
                            {securityHtml ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: securityHtml }}
                                    className="security-container"
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

export default Security;
