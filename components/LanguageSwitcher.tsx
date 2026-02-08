import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLang = i18n.language || 'en-US';

    const getLabel = (code: string) => {
        switch (code) {
            case 'th': return 'TH';
            case 'en-GB': return 'EN-GB';
            default: return 'EN-US';
        }
    };

    return (
        <div className="relative group/lang">
            <button
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-slate-300 hover:text-white"
            >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold tracking-widest">{getLabel(currentLang)}</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-40 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-300 z-50 transform origin-top-right scale-95 group-hover/lang:scale-100">
                <div className="p-1.5 space-y-0.5">
                    {[
                        { code: 'en-US', label: 'English (US)', flag: '🇺🇸' },
                        { code: 'en-GB', label: 'English (UK)', flag: '🇬🇧' },
                        { code: 'th', label: 'Thailand', flag: '🇹🇭' }
                    ].map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${currentLang === lang.code ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-base">{lang.flag}</span>
                                <span>{lang.label}</span>
                            </div>
                            {currentLang === lang.code && <Check className="w-3 h-3" />}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
