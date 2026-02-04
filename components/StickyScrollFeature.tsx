import React, { useState, useEffect, useRef } from 'react';
// Layout Version: 4.2.0 - Fixed Wording, Hardware Buttons, and Height - RESTORED

export interface StickyScrollItem {
    id: string | number;
    title: string;
    ipadTitle?: string;
    description: string;
    details?: string;
    images: string[];
    tags?: string[];
    icon?: React.ReactNode;
    color?: string;
}

interface StickyScrollSectionProps {
    items: StickyScrollItem[];
    title?: React.ReactNode;
}

const StickyScrollFeature: React.FC<StickyScrollSectionProps> = ({ items, title }) => {
    const [activeStage, setActiveStage] = useState(0);
    const [currentSubIndex, setCurrentSubIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const brandColors: Record<string, string> = {
        orange: '#d97757',
        blue: '#6a9bcc',
        green: '#788c5d',
        purple: '#8b5cf6',
        dark: '#141413',
        light: '#faf9f5'
    };

    const gradientColors: Record<string, string> = {
        orange: 'from-[#d97757]/40 via-[#d97757]/10 to-transparent',
        blue: 'from-[#6a9bcc]/40 via-[#6a9bcc]/10 to-transparent',
        green: 'from-[#788c5d]/40 via-[#788c5d]/10 to-transparent',
        purple: 'from-[#8b5cf6]/40 via-[#8b5cf6]/10 to-transparent'
    };

    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const interval = setInterval(() => {
            const currentItem = items[activeStage];
            const totalImages = currentItem?.images.length || 0;

            if (currentSubIndex < totalImages - 1) {
                setCurrentSubIndex(prev => prev + 1);
            } else {
                setIsTransitioning(true);
                setTimeout(() => {
                    setActiveStage(prev => (prev + 1) % items.length);
                    setCurrentSubIndex(0);
                    setIsTransitioning(false);
                }, 300);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [items.length, isInView, activeStage, currentSubIndex]);

    const handleStageChange = (index: number) => {
        if (index === activeStage) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveStage(index);
            setCurrentSubIndex(0);
            setIsTransitioning(false);
        }, 300);
    };

    const handleSubIndexChange = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        setCurrentSubIndex(index);
    };

    const activeColor = items[activeStage]?.color || 'blue';
    const activeHexColor = brandColors[activeColor] || brandColors.blue;

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-[#141413] pt-12 pb-24 md:pt-20 md:pb-40 px-4 md:px-6 overflow-hidden flex flex-col items-center"
            id="sticky-scroll-root"
        >
            {/* Dynamic Ambient Background Glow */}
            <div
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] w-full transition-all duration-1000 blur-[150px] opacity-10 pointer-events-none"
                style={{ backgroundColor: activeHexColor }}
            ></div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#faf9f5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Title Section - Gap Fixed */}
            <div className="max-w-7xl mx-auto mb-6 md:mb-10 text-center relative z-10 w-full animate-in fade-in duration-700">
                {title}
            </div>

            {/* Selection Boxes HUD Style */}
            <div className="w-full max-w-6xl grid grid-cols-3 gap-3 md:gap-8 mb-12 relative z-20">
                {items.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => handleStageChange(index)}
                        className={`group relative flex flex-col items-center justify-center py-4 md:py-10 px-2 md:px-8 
                                   rounded-3xl border transition-all duration-700
                            ${activeStage === index
                                ? 'bg-[#faf9f5]/5 border-white/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] scale-[1.05]'
                                : 'bg-transparent border-white/5 opacity-40 grayscale hover:opacity-80 hover:grayscale-0'}`}
                    >
                        {/* Box Active Indicator Line */}
                        <div
                            className={`absolute -top-px left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-700
                                       ${activeStage === index ? 'w-2/3' : 'w-0'}`}
                            style={{ backgroundColor: brandColors[item.color || 'blue'], boxShadow: `0 0 15px ${brandColors[item.color || 'blue']}` }}
                        ></div>

                        <span className={`text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mb-2 transition-all duration-500
                                        ${activeStage === index ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-60'}`}
                            style={activeStage === index ? { color: brandColors[item.color || 'blue'] } : {}}
                        >
                            0{index + 1} / {item.id === 'problem' ? 'CHALLENGE' : item.id === 'solution' ? 'SYSTEM' : 'RESULTS'}
                        </span>

                        <h4 className={`text-[13px] md:text-3xl font-black uppercase tracking-tighter leading-tight transition-all duration-500
                                       ${activeStage === index ? 'text-white scale-110' : 'text-slate-600 scale-100'}`}>
                            {item.title}
                        </h4>

                        {/* Interactive Dot */}
                        {activeStage === index && (
                            <div className="mt-3 flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse"></div>
                                <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse delay-75"></div>
                                <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse delay-150"></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* iPad Pro Frame */}
            <div className="w-full max-w-6xl relative group animate-in fade-in zoom-in-95 duration-1000">
                {/* Secondary Hardware Bloom */}
                <div
                    className="absolute -inset-20 transition-all duration-1000 blur-[100px] opacity-20 rounded-full"
                    style={{ backgroundColor: activeHexColor }}
                ></div>

                {/* PHYSICAL HARDWARE BUTTONS HUB (TOP LEFT) */}
                <div className="absolute top-[-6px] left-10 md:left-20 flex items-end gap-3 z-30 pointer-events-none">
                    {/* Power Button */}
                    <div className="w-12 md:w-16 h-[6px] bg-gradient-to-t from-slate-600 to-slate-400 rounded-t-md shadow-[0_-2px_4px_rgba(0,0,0,0.5)] border-t border-x border-white/10"></div>

                    {/* Volume Up - Silver Finish */}
                    <div className="w-8 md:w-10 h-[5px] bg-gradient-to-t from-slate-400 to-slate-200 rounded-t-md shadow-[0_-2px_4px_rgba(0,0,0,0.3)] border-t border-x border-white/20 ml-4"></div>

                    {/* Volume Down - Silver Finish */}
                    <div className="w-8 md:w-10 h-[5px] bg-gradient-to-t from-slate-400 to-slate-200 rounded-t-md shadow-[0_-2px_4px_rgba(0,0,0,0.3)] border-t border-x border-white/20"></div>
                </div>

                {/* THE TABLET FRAME - Silver Aluminum Aesthetic */}
                <div className="relative p-[5px] md:p-[7px] bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 rounded-[2rem] md:rounded-[4.5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,1)] border border-white/20">

                    {/* Bezel */}
                    <div className="relative bg-[#080808] p-3 md:p-8 rounded-[1.7rem] md:rounded-[3.8rem] overflow-hidden shadow-inner aspect-[4/3.5] md:aspect-[3/2]">

                        {/* Scanning Effect Overlay */}
                        <div className={`absolute inset-0 z-50 pointer-events-none overflow-hidden transition-opacity duration-500 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent absolute top-0 animate-[shimmer_1.5s_infinite]"></div>
                        </div>

                        {items.map((item, stageIdx) => (
                            <div
                                key={item.id}
                                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out
                                    ${activeStage === stageIdx ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-105 rotate-1 pointer-events-none'}`}
                            >
                                {/* Images */}
                                {item.images && item.images.map((img, subIdx) => (
                                    <div
                                        key={subIdx}
                                        className={`absolute inset-0 transition-opacity duration-1000
                                            ${currentSubIndex === subIdx ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <img
                                            src={img}
                                            className="w-full h-full object-cover transition-transform duration-[20s] scale-100 group-hover:scale-110"
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}

                                {/* UI OVERLAY HUD */}
                                <div className="absolute inset-0 z-20 p-3 md:p-14 flex flex-col justify-end items-end pointer-events-none">
                                    <div className="max-w-xl space-y-2 md:space-y-8 animate-in fade-in slide-in-from-right-12 duration-1000 ease-out text-right">

                                        {/* Redesigned Transparent Info Overlay */}
                                        <div className="relative group/card pointer-events-auto">
                                            {/* Subtle Glow behind text */}
                                            <div className="absolute -inset-10 bg-gradient-to-l from-black/60 to-transparent blur-2xl opacity-80 rounded-[3rem]"></div>

                                            <div className="relative space-y-2 md:space-y-3 flex flex-col items-end">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-px w-8 md:w-16 bg-gradient-to-l from-white/40 to-transparent"></div>
                                                    <div className="bg-white/10 backdrop-blur-xl p-1.5 md:p-3 rounded-lg border border-white/20 text-white shadow-2xl">
                                                        {React.isValidElement(item.icon)
                                                            ? React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-3 h-3 md:w-6 md:h-6' })
                                                            : item.icon
                                                        }
                                                    </div>
                                                </div>

                                                <h5 className="text-white text-xl md:text-3xl font-black italic uppercase tracking-tighter leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] pr-2">
                                                    {item.ipadTitle || item.title}
                                                </h5>
                                                <p className="text-slate-100 text-[10px] md:text-base font-bold leading-tight md:leading-relaxed max-w-[160px] xs:max-w-[200px] md:max-w-md drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                                                    {item.details || item.description}
                                                </p>

                                                {item.tags && (
                                                    <div className="flex flex-wrap gap-1.5 pt-1 justify-end">
                                                        {item.tags.map((tag, i) => (
                                                            <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/80">
                                                                <div className="w-1 h-1 rounded-full bg-current" style={{ color: activeHexColor }}></div>
                                                                <span>{tag}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Circular Image Indicators (Side Dots) - Vertical Left Center */}
                                {item.images && item.images.length > 1 && (
                                    <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-10 flex flex-col gap-5 z-30 pointer-events-auto">
                                        {item.images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={(e) => handleSubIndexChange(e, i)}
                                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500
                                                    ${currentSubIndex === i
                                                        ? `scale-150 animate-pulse`
                                                        : 'bg-white/20 hover:bg-white/40 hover:scale-110'}`}
                                                style={{
                                                    backgroundColor: currentSubIndex === i ? activeHexColor : undefined,
                                                    boxShadow: currentSubIndex === i ? `0 0 20px ${activeHexColor}` : undefined
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Master Vignette */}
                                <div className={`absolute inset-0 bg-gradient-to-tr ${gradientColors[activeColor]} mix-blend-overlay opacity-30`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/5 rounded-full"></div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(200%); }
                }
                @keyframes breathe {
                    0%, 100% { opacity: 0.6; transform: scale(1.25); }
                    50% { opacity: 1; transform: scale(1.35); }
                }
            `}} />
        </div>
    );
};

export default StickyScrollFeature;
