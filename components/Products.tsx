'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Products() {
const products = [
  {
    name: 'ORIGINAL',
    flavor: 'Classic Energy',
    flavorColor: 'text-lime-400',
    color: 'from-yellow-300 to-amber-400',
    accent: '#fbbf24',
    image: '/original.png',
    description: 'Pure, powerful, perfect.',
  },
  {
    name: 'ARCTIC BLAST',
    flavor: 'Cool Mint',
    flavorColor: 'text-cyan-400',
    color: 'from-cyan-300 to-blue-400',
    accent: '#06b6d4',
    image: '/artic.png',
    description: 'Chill vibes, max energy.',
  },
  {
    name: 'BERRY STORM',
    flavor: 'Mixed Berry',
    flavorColor: 'text-purple-500',
    color: 'from-purple-300 to-pink-400',
    accent: '#a855f7',
    image: '/berry.png',
    description: 'Smooth, sweet, unstoppable.',
  },
  {
    name: 'CITRUS RUSH',
    flavor: 'Lemon Zest',
    flavorColor: 'text-orange-500',
    color: 'from-orange-300 to-red-400',
    accent: '#fb923c',
    image: '/orange.png',
    description: 'Bold, bright, energizing.',
  },
{
  name: 'Pack of 4',
  flavor: 'Signature Collection',
  flavorColor: 'text-violet-500',
  color: 'from-[#fbbf24] via-[#06b6d4] via-[#a855f7] to-[#fb923c]',
  accent: '#fbbf24',
  image: '/all cans.png',
  description: 'The ultimate 4-can bundle featuring every refreshing flavor.',
}
];

  const [activeProduct, setActiveProduct] = useState(0);

  const handlePrev = () => {
    setActiveProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveProduct((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-sky-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">CHOOSE YOUR POWER</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="text-slate-900">SELECT YOUR</span> <span className="text-lime-400">FLAVOR</span> ⚡
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <motion.div
            layout
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className={`w-64 sm:w-72 md:w-80 rounded-[2rem] bg-linear-to-br ${products[activeProduct].color} shadow-2xl relative group p-4`}>
                    <motion.img
                      src={products[activeProduct].image}
                      alt={products[activeProduct].name}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-full h-full object-contain rounded-[1.5rem]"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute -inset-4 border-2 border-dashed border-current opacity-30 rounded-[2.2rem]"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-accent text-foreground p-3 rounded-full z-20 hover:shadow-lg"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-accent text-foreground p-3 rounded-full z-20 hover:shadow-lg"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                className="text-4xl font-black text-foreground mb-2"
              >
                {products[activeProduct].name}
              </motion.h3>
<p
  className={`text-lg font-bold ${products[activeProduct].flavorColor}`}
>
  {products[activeProduct].flavor}
</p>
            </div>

            <p className="text-xl text-foreground/70 leading-relaxed">
              {products[activeProduct].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full ${i <= (activeProduct + 1) ? 'bg-accent' : 'bg-border'}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-accent text-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              ADD TO CART
            </motion.button>
          </motion.div>
        </div>

        {/* Product dots */}
        <div className="flex justify-center gap-3 mt-12">
          {products.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveProduct(idx)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === activeProduct
                  ? 'bg-accent w-8'
                  : 'bg-border hover:bg-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
