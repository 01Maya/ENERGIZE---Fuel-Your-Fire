'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Droplet, Leaf, Award, Flame } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: Zap, title: 'INSTANT ENERGY', desc: 'Quick boost when you need it most.' },
    { icon: Brain, title: 'ENHANCED FOCUS', desc: 'Sharpen your mind. Stay in the zone.' },
    { icon: Flame, title: 'IMPROVED PERFORMANCE', desc: 'Push harder. Go further.' },
    { icon: Leaf, title: 'ESSENTIAL VITAMINS', desc: 'Packed with B vitamins for daily support.' },
    { icon: Droplet, title: 'ELECTROLYTES', desc: 'Replenishes fluids. Keeps you going.' },
    { icon: Award, title: 'LOW SUGAR', desc: 'Great taste with smart nutrition.' },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">WHY ENERGIZE?</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            BUILT FOR <span className="text-lime-400">MORE</span> ⚡
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
<motion.div
  key={idx}
  variants={item}
  whileHover={{ y: -10, scale: 1.02 }}
  className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-lime-300 transition-all"
>
  {/* Animated top line */}
  <div className="absolute top-0 left-0 h-[2px] w-full overflow-hidden">
    <div className="h-full w-24 -translate-x-32 bg-gradient-to-r from-transparent via-lime-400 to-transparent group-hover:translate-x-[450%] transition-transform duration-1000 ease-out" />
  </div>

  {/* Animated side glow */}
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
    <div className="absolute inset-0 rounded-2xl border border-lime-300/40" />
  </div>

  <motion.div
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="w-16 h-16 bg-gradient-to-br from-lime-300 to-cyan-300 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-lime-400/30 transition-all"
  >
    <Icon className="w-8 h-8 text-slate-900" />
  </motion.div>

  <h3 className="text-xl font-bold text-slate-900 mb-3">
    {benefit.title}
  </h3>

  <p className="text-slate-600 leading-relaxed">
    {benefit.desc}
  </p>
</motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
