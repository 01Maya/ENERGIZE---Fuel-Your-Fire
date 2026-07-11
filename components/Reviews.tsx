'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Alex Johnson',
      role: 'Athlete',
      rating: 5,
      text: 'ENERGIZE has changed my workout game. Best energy drink I&apos;ve tried!',
      avatar: '👤',
    },
    {
      name: 'Sarah Chen',
      role: 'Entrepreneur',
      rating: 5,
      text: 'Perfect for long work days. No crash, just sustained focus. Love it!',
      avatar: '👩‍💼',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Fitness Trainer',
      rating: 5,
      text: 'My clients rave about ENERGIZE. Quality ingredients, real results.',
      avatar: '💪',
    },
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            LOVED BY <span className="text-lime-400">THOUSANDS</span>
          </h2>
          <p className="text-lg text-slate-600">Real people, real energy, real results.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Review card carousel */}
          <div className="relative h-64 md:h-72">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: idx === current ? 1 : 0,
                  y: idx === current ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${idx === current ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white to-blue-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star
                          size={20}
                          className="text-lime-400 fill-lime-400"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    &quot;{review.text}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-4xl"
                    >
                      {review.avatar}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-slate-900">{review.name}</h3>
                      <p className="text-sm text-slate-600">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-accent text-foreground flex items-center justify-center font-bold hover:shadow-lg"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-accent text-foreground flex items-center justify-center font-bold hover:shadow-lg"
            >
              →
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                whileHover={{ scale: 1.2 }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current
                    ? 'bg-accent w-8'
                    : 'bg-border hover:bg-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
