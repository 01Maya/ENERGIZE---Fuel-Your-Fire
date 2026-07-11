'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const spring = {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  };

  // Heading Parallax
  const titleX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -140]),
    spring
  );

  const titleY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 80]),
    spring
  );

  const titleOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [1, 0]),
    spring
  );

  // Individual Line Movement
  const enjoyY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -20]),
    spring
  );

  const energizeY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 10]),
    spring
  );

  const dominateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 30]),
    spring
  );

  // Floating Particles
  const FloatingParticle = ({ delay }: { delay: number }) => (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 5 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-1 h-1 bg-lime-400 rounded-full"
    />
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.2} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >

          {/* Premium Parallax Heading */}
<motion.div
  style={{
    x: titleX,
    y: titleY,
    opacity: titleOpacity,
  }}
  className="space-y-1"
>
  {/* ENJOY - Left → Right */}
  <motion.h1
    style={{ y: enjoyY }}
    initial={{ opacity: 0, x: -150 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      type: "spring",
      stiffness: 90,
      damping: 16,
      delay: 0,
    }}
    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-slate-900"
  >
    ENJOY.
  </motion.h1>

  {/* ENERGIZE - Right → Left */}
  <motion.h1
    style={{ y: energizeY }}
    initial={{ opacity: 0, x: 150 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      type: "spring",
      stiffness: 90,
      damping: 16,
      delay: 0.15,
    }}
    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-lime-400"
  >
    ENERGIZE.
  </motion.h1>

  {/* DOMINATE - Left → Right */}
  <motion.h1
    style={{ y: dominateY }}
    initial={{ opacity: 0, x: -150 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      type: "spring",
      stiffness: 90,
      damping: 16,
      delay: 0.3,
    }}
    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-slate-900"
  >
    DOMINATE.
  </motion.h1>
</motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground/70 leading-relaxed max-w-xl"
          >
            ENERGIZE is more than a drink. It&apos;s your daily boost to crush limits and live fully charged.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-slate-900 px-8 py-3 rounded-full font-bold text-base hover:shadow-lg hover:shadow-lime-400/40 transition-all flex items-center gap-2"
            >
              <span>BUY NOW</span>
              <span>→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-full font-bold text-base hover:bg-slate-900/5 transition-all"
            >
              LEARN MORE
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-8 text-[15px] text-slate-500"
          >
            {[
              "Zero Sugar",
              "75mg Caffeine",
              "Natural Flavours",
              "Vitamin B Rich",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-400" />
                <span className="font-medium tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 text-foreground/50 text-sm pt-8"
          >
            <ChevronDown size={20} />
            <span>SCROLL DOWN</span>
          </motion.div>
        </motion.div>

        {/* Right - Can illustration */}
{/* Right - Can Illustration */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 80,
    damping: 15,
    delay: 0.3,
  }}
  className="relative h-full flex items-center justify-center"
>
  <div className="relative w-full aspect-square max-w-md flex items-center justify-center">

    {/* Animated Glow */}
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.35, 0.55, 0.35],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-[420px] h-[420px] rounded-full bg-lime-300/30 blur-[90px]"
    />

    {/* Floating Product */}
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        rotate: -8,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.5,
      }}
    >
      <motion.img
        src="/hero.png"
        alt="ENERGIZE Energy Drink Can"
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, 2, 0, -2, 0],
          rotateY: [0, 8, 0, -8, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="
          relative z-10
          w-[420px]
          md:w-[500px]
          lg:w-[620px]
          xl:w-[700px]
          h-auto
          object-contain
          drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]
          select-none
          pointer-events-none
          will-change-transform
        "
        draggable={false}
      />
    </motion.div>

  </div>

  {/* Floating Feature Cards */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-20 right-[-48px] space-y-4"
  >
    {[
      { text: "INSTANT ENERGY" },
      { text: "ENHANCED FOCUS" },
      { text: "BETTER PERFORMANCE" },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: 0.7 + i * 0.15,
        }}
        className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 shadow-xl"
      >
        <p className="text-sm font-semibold text-lime-500">
          {item.text}
        </p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>
      </div>
    </section>
  );
}
