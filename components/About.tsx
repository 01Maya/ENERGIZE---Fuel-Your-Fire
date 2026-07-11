'use client';

import { motion } from 'framer-motion';
import { Zap, Leaf, Flame } from 'lucide-react';

export default function About() {
  const ingredients = [
    { icon: Zap, label: 'CAFFEINE', desc: 'Boosts alertness and energy.' },
    { icon: Leaf, label: 'ELECTROLYTES', desc: 'Replenishes fluids. Keeps you going.' },
    { icon: Flame, label: 'ZERO ADDED SUGAR', desc: 'Pure taste. Zero guilt.' },
  ];

const features = [
  {
    icon: '💡',
    title: 'Our Mission',
    desc: 'Creating premium nutrition that powers everyday performance.',
  },
  {
    icon: '🚀',
    title: 'Our Vision',
    desc: 'Inspiring healthier energy for work, fitness, and life.',
  },
  {
    icon: '🤝',
    title: 'Our Commitment',
    desc: 'Quality, transparency, and excellence in every product.',
  },
];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">WHAT&apos;S INSIDE?</p>
              <h3 className="text-4xl font-black text-slate-900">
                CLEAN INGREDIENTS.<br />
                <span className="text-lime-400">MAXIMUM IMPACT.</span>
              </h3>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              We combine powerful ingredients in the right balance to give you clean, long-lasting energy without the crash.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-slate-900 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-lime-400/30 transition-all w-fit"
            >
              LEARN MORE
            </motion.button>
          </motion.div>

          {/* Ingredients showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {ingredients.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl p-4 hover:shadow-lg hover:border-lime-300 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-lime-400/30"
                    >
                      <Icon className="w-6 h-6 text-slate-900" />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.label}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-linear-to-br from-blue-50 to-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
