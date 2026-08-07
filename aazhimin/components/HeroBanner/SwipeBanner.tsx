'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Banner {
  title: string;
  subtitle: string;
  cta?: string;
  ctaLink?: string;
  theme?:
    | 'water'
    | 'agriculture'
    | 'sunrise'
    | 'deepsea'
    | 'urban'
    | 'forest'
    | 'sand'
    | 'ice'
    | 'midnight'
    | 'sunset'
    | 'fire';
}

interface HeroBannerProps {
  banners: Banner[];
  videoSrc?: string;
  intervalMs?: number;
}

const fadeSlide = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const HeroBanner: React.FC<HeroBannerProps> = ({ banners, videoSrc = '/assets/water-agri-hero.mp4', intervalMs = 8000 }) => {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const advance = useCallback(() => {
    setIndex(prev => (prev + 1) % banners.length);
  }, [banners.length]);

  useEffect(() => {
    timer.current = setInterval(advance, intervalMs);
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, [advance, intervalMs]);

  const { title, subtitle, cta, ctaLink, theme = 'water' } = banners[index] || {};

  const themeColors = {
    water: {
      gradient: 'linear-gradient(to bottom right, #3BE0F6, #2563EB, #1E40AF)',
      text: 'text-white',
      button: 'from-[#FFFFFF] to-[#3B82F6]',
      pattern: 'url(/assets/water-pattern.svg)',
    },
    agriculture: {
      gradient: 'linear-gradient(to bottom right, #7ED957, #28C76F, #20C997)',
      text: 'text-green-800',
      button: 'from-[#34D399] to-[#6EE7B7]',
      pattern: 'url(/assets/leaf-pattern.svg)',
    },
    sunrise: {
      gradient: 'linear-gradient(to bottom right, #FFEDD5, #FDBA74, #FB923C)',
      text: 'text-orange-800',
      button: 'from-[#FDBA74] to-[#FB923C]',
      pattern: 'url(/assets/sunrise.svg)',
    },
    deepsea: {
      gradient: 'linear-gradient(to bottom right, #0F172A, #1E293B, #334155)',
      text: 'text-slate-100',
      button: 'from-[#334155] to-[#64748B]',
      pattern: 'url(/assets/deepsea.svg)',
    },
    urban: {
      gradient: 'linear-gradient(to bottom right, #F1F5F9, #CBD5E1, #94A3B8)',
      text: 'text-gray-800',
      button: 'from-[#CBD5E1] to-[#94A3B8]',
      pattern: 'url(/assets/urban.svg)',
    },
    forest: {
      gradient: 'linear-gradient(to bottom right, #166534, #22C55E, #4ADE80)',
      text: 'text-emerald-100',
      button: 'from-[#22C55E] to-[#4ADE80]',
      pattern: 'url(/assets/forest.svg)',
    },
    sand: {
      gradient: 'linear-gradient(to bottom right, #FCD34D, #FBBF24, #F59E0B)',
      text: 'text-yellow-900',
      button: 'from-[#FBBF24] to-[#F59E0B]',
      pattern: 'url(/assets/sand.svg)',
    },
    ice: {
      gradient: 'linear-gradient(to bottom right, #E0F2FE, #BAE6FD, #7DD3FC)',
      text: 'text-sky-800',
      button: 'from-[#BAE6FD] to-[#7DD3FC]',
      pattern: 'url(/assets/ice.svg)',
    },
    midnight: {
      gradient: 'linear-gradient(to bottom right, #0C0A09, #1C1917, #292524)',
      text: 'text-zinc-100',
      button: 'from-[#1C1917] to-[#292524]',
      pattern: 'url(/assets/midnight.svg)',
    },
    sunset: {
      gradient: 'linear-gradient(to bottom right, #FECACA, #FB7185, #F43F5E)',
      text: 'text-rose-100',
      button: 'from-[#FB7185] to-[#F43F5E]',
      pattern: 'url(/assets/sunset.svg)',
    },
    fire: {
      gradient: 'linear-gradient(to bottom right, #F97316, #EA580C, #C2410C)',
      text: 'text-orange-50',
      button: 'from-[#EA580C] to-[#F97316]',
      pattern: 'url(/assets/fire.svg)',
    },
  };

  return (
    <div
      className="relative overflow-hidden group lg:min-h-[65vh]"
      onMouseEnter={() => timer.current && clearInterval(timer.current)}
      onMouseLeave={() => {
        timer.current = setInterval(advance, intervalMs);
      }}
    >
      {/* Animate background gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`gradient-${theme}`}
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: themeColors[theme].gradient,
            mixBlendMode: 'multiply',
          }}
        />
      </AnimatePresence>

      {/* Animate background pattern */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`pattern-${theme}`}
          className="absolute inset-0 z-10 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundImage: themeColors[theme].pattern,
            backgroundSize: '120px',
            mixBlendMode: 'overlay',
          }}
        />
      </AnimatePresence>

      {/* Video background */}
      {videoSrc && (
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'linear' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
      )}

      {/* Banner content */}
      <section className="relative flex items-center justify-center h-[70vh] md:h-[55vh] lg:h-[85vh] px-6">
        <div className="relative z-20 flex flex-col items-center text-center max-w-5xl space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.9, ease: 'circOut' }}
              className="flex flex-col gap-6"
            >
              <h1
                className={`text-3xl md:text-7xl font-bold ${themeColors[theme].text} leading-tight tracking-tight drop-shadow-xl`}
              >
                {title}
              </h1>
              <p className={`text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto text-balance`}>
                {subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {cta && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Link
                href={ctaLink || '/'}
                className={`inline-block bg-gradient-to-r ${themeColors[theme].button} text-slate-900 font-bold py-4 px-12 rounded-full 
                  hover:scale-105 hover:bg-gradient-to-l transition-all duration-300 shadow-xl
                  hover:shadow-2xl relative overflow-hidden group`}
              >
                <span className="relative z-10">{cta}</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white scale-125 shadow-md' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
