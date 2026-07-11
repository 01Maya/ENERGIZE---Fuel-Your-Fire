'use client';

import { motion } from 'framer-motion';
import { Zap, Share2, Heart, MessageCircle, Play } from 'lucide-react';

export default function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 text-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #bfff00 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
          >
            FUEL YOUR <span className="text-lime-400">PASSION.</span>
            <br />
            LIVE <span className="text-lime-400">WITHOUT LIMITS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            ENERGIZE your body. Empower your mind. Be unstoppable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-lime-400/40 transition-all"
            >
              BUY NOW →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-lime-400 text-lime-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-lime-400/10 transition-all"
            >
              EXPLORE FLAVORS
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-lime-400 fill-lime-400" />
                <span className="font-bold text-xl">ENERGIZE</span>
              </div>
              <p className="text-slate-600 text-sm">
                ENERGIZE is crafted for those who hustle, who grind, and who never stop chasing greatness.
              </p>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4 text-slate-900">PRODUCTS</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                {['All Flavors', 'Energy Drink', 'Bundles', 'Merchandise'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: '#bfff00' }}
                      className="transition-colors"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4 text-slate-900">COMPANY</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                {['About Us', 'Our Mission', 'Ingredients', 'Sustainability'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: '#bfff00' }}
                      className="transition-colors"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4 text-slate-900">SUPPORT</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                {['FAQ', 'Shipping & Returns', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: '#bfff00' }}
                      className="transition-colors"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-lime-50 border border-lime-200 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900">STAY ENERGIZED</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-lime-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-slate-900 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-lime-400/40"
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom */}
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2024 ENERGIZE. All Rights Reserved.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Share2, href: '#' },
                { icon: Heart, href: '#' },
                { icon: MessageCircle, href: '#' },
                { icon: Play, href: '#' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, color: '#bfff00' }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-600 hover:text-lime-400 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
