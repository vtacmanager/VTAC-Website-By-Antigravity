import React, { useState } from 'react';

interface TabItem {
    id: string | number;
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
}

interface InteractiveSwitcherProps {
    title?: React.ReactNode;
    items: TabItem[];
    defaultActiveId?: string | number;
}

const InteractiveSwitcher: React.FC<InteractiveSwitcherProps> = ({ title, items, defaultActiveId }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveId || items[0]?.id);

    const activeIndex = items.findIndex(item => item.id === activeTab);

    return (
        <div className="w-full py-12 md:py-24 bg-slate-950 relative overflow-hidden">
            {/* Background ambient light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-900/10 blur-[100px] pointer-events-none rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Title Section */}
                {title && <div className="text-center mb-12 space-y-4">{title}</div>}

                {/* Tabs Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-white/5 shadow-2xl relative">
                        {/* Sliding Background Pill */}
                        <div
                            className="absolute top-2 bottom-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/20"
                            style={{
                                left: `calc(${activeIndex * (100 / items.length)}% + 0.5rem)`,
                                width: `calc(${100 / items.length}% - 1rem)`
                            }}
                        ></div>

                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`relative px-8 md:px-16 py-3 md:py-4 rounded-full flex items-center gap-3 transition-colors duration-300 z-10 w-full md:w-auto justify-center
                                ${activeTab === item.id ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                            >
                                {item.icon && <span className="scale-110">{item.icon}</span>}
                                <span className="font-black uppercase tracking-wider text-xs md:text-sm whitespace-nowrap">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative min-h-[400px]">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`transition-all duration-500 absolute inset-0
                            ${activeTab === item.id
                                    ? 'opacity-100 translate-y-0 relative z-10'
                                    : 'opacity-0 translate-y-8 absolute pointer-events-none z-0'}`}
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InteractiveSwitcher;
