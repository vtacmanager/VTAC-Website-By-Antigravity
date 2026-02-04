import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 210;
const IMAGES_DIR = '/red-tool-box/';

export default function ToolCabinetScrollytelling() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Track verify progress
    const [loadingProgress, setLoadingProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload Images
    useEffect(() => {
        const loadImages = async () => {
            const loaded: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const fname = `ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
                img.src = `${IMAGES_DIR}${fname}`;

                // We push to array immediately to maintain order, but wait for load to confirm
                loaded.push(img);

                img.onload = () => {
                    loadedCount++;
                    setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                    if (loadedCount === FRAME_COUNT) {
                        setImages(loaded);
                        setIsLoading(false);
                    }
                };
            }
        };

        loadImages();
    }, []);

    const render = (index: number) => {
        if (!canvasRef.current || images.length === 0) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        const imgIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(index)));
        const img = images[imgIndex];

        // Ensure image is actually loaded (complete)
        if (!img || !img.complete) return;

        // Set canvas size to match display size 
        // (We use a fixed high resolution or match window)
        const dpr = window.devicePixelRatio || 1;
        // Use container dimensions
        const rect = canvasRef.current.getBoundingClientRect();

        // Only resize if needed to avoid flickering/perf
        if (canvasRef.current.width !== rect.width * dpr || canvasRef.current.height !== rect.height * dpr) {
            canvasRef.current.width = rect.width * dpr;
            canvasRef.current.height = rect.height * dpr;
        }

        const canvasWidth = canvasRef.current.width;
        const canvasHeight = canvasRef.current.height;

        // Fit 'contain' logic
        const imgAspect = img.width / img.height;
        const canvasAspect = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
            // Canvas wider than image -> constrain by height
            drawHeight = canvasHeight;
            drawWidth = drawHeight * imgAspect;
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Canvas taller -> constrain by width
            drawWidth = canvasWidth;
            drawHeight = drawWidth / imgAspect;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(latest);
    });

    // Initial render and resize handler
    useEffect(() => {
        if (!isLoading && images.length > 0) {
            render(currentIndex.get());
        }

        const handleResize = () => {
            if (!isLoading && images.length > 0) render(currentIndex.get());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoading, images]);

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-slate-950 w-full">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Image containing the TV Screen */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Platform2%20Section1.1.jpg"
                        className="w-full h-full object-cover"
                        alt="Background Environment"
                    />
                    <div className="absolute inset-0 bg-black/20"></div> {/* Optional overlay for depth */}
                </div>

                {/* The Scrollytelling Cabinet - Positioned to overlay the TV Screen */}
                {/* Scaling down to ~50% (w-1/2) and centering as requested */}
                <div className="relative z-10 w-[90%] md:w-[50%] aspect-video shadow-2xl bg-black overflow-hidden rounded-sm md:rounded-lg transform -translate-y-[6%]">
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-cyan-400 z-50 bg-slate-950">
                            <div className="text-4xl font-black mb-4">{loadingProgress}%</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Loading Cabinet...</div>
                        </div>
                    )}
                    <canvas ref={canvasRef} className="w-full h-full object-contain" />
                </div>

                {/* Scroll Indicator */}
                <div className="absolute top-24 md:top-32 left-0 w-full text-center pointer-events-none z-20 animate-pulse">
                    <p className="text-cyan-400 text-xs md:text-sm font-black uppercase tracking-[0.3em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        OPEN THE ULTIMATE TEAM SPORT OS
                    </p>
                </div>
            </div>
        </div>
    );
}
