import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              className="text-2xl font-bold text-cyan-400 mb-4"
              style={{
                fontFamily: 'monospace',
                textShadow: '0 0 10px #00FFFF',
              }}
            >
              INFERNO VERSE
            </motion.div>
            <p className="text-gray-300 mb-4">
              A premier 24-hour AI Hackathon bringing together 1,000+ brilliant innovators
              to solve real-world challenges using Artificial Intelligence.
            </p>
            <div className="text-cyan-400">
              📅 September 20, 2025 | 📍 LPU, Punjab
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#event" className="hover:text-cyan-400 transition-colors">Event</a></li>
              <li><a href="#sponsors" className="hover:text-cyan-400 transition-colors">Sponsors</a></li>
               <li><a href="#terms" className="hover:text-cyan-400 transition-colors">Terms</a></li>
               <li><a href="#conditions" className="hover:text-cyan-400 transition-colors">Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div>📧 info@infernoverse.com</div>
              <div>📱 +91 98765 43210</div>
              <div>🌐 www.infernoverse.com</div>
            </div>
          </div>
        </div>

        <hr className="border-cyan-400/20 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>© 2025 Inferno Verse Hackathon | Organized by Inferno Verse | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
