'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['HOME', 'ABOUT', 'PRODUCTS', 'BENEFITS', 'REVIEWS', 'CONTACT'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Zap className="w-8 h-8 text-lime-400 fill-lime-400" />
            <span className="font-bold text-xl text-slate-900 hidden sm:inline">ENERGIZE</span>
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ color: '#bfff00' }}
                className="text-sm font-semibold text-slate-900 hover:text-lime-400 transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-slate-900 px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-lime-400/30 transition-all"
            >
              BUY NOW →
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-slate-900 hover:bg-blue-50 rounded-lg transition-colors"
                whileHover={{ x: 8 }}
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full bg-lime-400 text-slate-900 px-4 py-2 rounded-lg font-bold mt-4"
            >
              BUY NOW →
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
