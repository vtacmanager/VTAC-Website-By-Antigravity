import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
    const { t } = useTranslation();
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch the cleaned privacy policy HTML
        fetch('/privacy-policy-content.html')
            .then(res => res.text())
            .then(html => {
                // Strip the logo if we want to use our own, or keep it.
                // The HTML already has its own headers. 
                // We'll wrap it in a scoped container.
                setContent(html);
            })
            .catch(err => {
                console.error('Failed to load privacy policy:', err);
                setContent('<p class="text-white">Failed to load privacy policy. Please contact support@vtacmanager.com</p>');
            });
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Page Header */}
                    <div className="text-center space-y-4 mb-16">
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                            {t('legal.privacy.title')}
                        </h1>
                        <p className="text-emerald-400 font-medium">
                            {t('legal.privacy.lastUpdated')}
                        </p>
                        <p className="text-slate-400">
                            {t('legal.privacy.subtitle', 'Transparency and security are at our core.')}
                        </p>
                    </div>

                    {/* Document Container */}
                    <div className="relative group">
                        {/* Decorative glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                        {/* The "Paper" card */}
                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px]">
                            {/* Inner scrolling content */}
                            <div className="p-8 md:p-16 text-slate-900 leading-relaxed overflow-y-auto max-h-[1200px] scrollbar-thin scrollbar-thumb-slate-200">
                                {content ? (
                                    <div
                                        className="privacy-policy-content"
                                        dangerouslySetInnerHTML={{ __html: content }}
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-96 space-y-4">
                                        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                                        <p className="text-slate-500 font-medium">Loading Document...</p>
                                    </div>
                                )}
                            </div>

                            {/* Fading bottom overlay for hint of more content if needed */}
                            {content && (
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                            )}
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="mt-12 text-center text-slate-500 text-sm">
                        <p>© {new Date().getFullYear()} VTAC SOLUTIONS LTD. All rights reserved.</p>
                        <p className="mt-2">If you have any questions, please reach out to <a href="mailto:support@vtacmanager.com" className="text-emerald-500 hover:text-emerald-400 transition-colors">support@vtacmanager.com</a></p>
                    </div>
                </motion.div>
            </div>

            {/* Scoped styles to ensure the injected HTML looks good */}
            <style>{`
                .privacy-policy-content {
                    font-family: 'Inter', system-ui, sans-serif;
                }
                .privacy-policy-content * {
                    color: inherit !important; /* Let our Paper container handle the color */
                }
                .privacy-policy-content h1 {
                    font-size: 2rem !important;
                    font-weight: 800 !important;
                    margin-bottom: 2rem !important;
                    color: #0f172a !important;
                }
                .privacy-policy-content h2 {
                    font-size: 1.5rem !important;
                    font-weight: 700 !important;
                    margin-top: 2.5rem !important;
                    margin-bottom: 1rem !important;
                    color: #1e293b !important;
                }
                .privacy-policy-content h3 {
                    font-size: 1.25rem !important;
                    font-weight: 600 !important;
                    margin-top: 2rem !important;
                    color: #334155 !important;
                }
                .privacy-policy-content p, .privacy-policy-content div {
                    margin-bottom: 1rem !important;
                }
                .privacy-policy-content a {
                    color: #10b981 !important; /* Use emerald for links */
                    text-decoration: underline !important;
                    transition: opacity 0.2s;
                }
                .privacy-policy-content a:hover {
                    opacity: 0.8 !important;
                }
                .privacy-policy-content ul {
                    list-style-type: disc !important;
                    padding-left: 1.5rem !important;
                    margin-bottom: 1.5rem !important;
                }
                .privacy-policy-content li {
                    margin-bottom: 0.5rem !important;
                }
                /* Hide the redundunant logo if it exists in HTML as we are on the site */
                .privacy-policy-content span[style*="background: url(data:image/svg+xml"] {
                    display: none !important;
                }
            `}</style>
        </div>
    );
};

export default Privacy;
