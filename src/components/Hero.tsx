'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from './Reveal';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const t = useTranslations('hero');
  const { resolvedTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const floatingBadges = [
    { icon: '🚀', text: 'Full Stack Developer', delay: 0.2 },
    { icon: '⚡', text: 'Performance Optimized', delay: 0.4 },
    { icon: '🎨', text: 'UI/UX Enthusiast', delay: 0.6 },
    { icon: '📱', text: 'Mobile First', delay: 0.8 }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          resolvedTheme === 'dark' 
            ? 'from-slate-900 via-slate-800 to-slate-900' 
            : 'from-blue-50 via-white to-blue-50'
        } opacity-50`}></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-20 left-20 w-72 h-72 ${
            resolvedTheme === 'dark' ? 'bg-indigo-600' : 'bg-blue-200'
          } rounded-full mix-blend-multiply filter blur-xl opacity-20`}
        />
        
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute top-40 right-20 w-72 h-72 ${
            resolvedTheme === 'dark' ? 'bg-indigo-500' : 'bg-blue-300'
          } rounded-full mix-blend-multiply filter blur-xl opacity-20`}
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute bottom-20 left-1/2 w-72 h-72 ${
            resolvedTheme === 'dark' ? 'bg-indigo-700' : 'bg-blue-100'
          } rounded-full mix-blend-multiply filter blur-xl opacity-20`}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-right space-y-8"
          >
            <Reveal direction="fade" delay={0.2}>
              <p className={`text-lg md:text-xl font-medium ${
                resolvedTheme === 'dark' ? 'text-slate-300' : 'text-gray-600'
              }`}>
                {t('greeting')}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <h1 className={`text-4xl md:text-6xl font-bold ${
                resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
              } leading-tight`}>
                <span className="gradient-text">{t('name')}</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.6}>
              <h2 className={`text-2xl md:text-3xl font-semibold ${
                resolvedTheme === 'dark' ? 'text-slate-200' : 'text-gray-800'
              }`}>
                {t('title')}
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.8}>
              <p className={`text-lg leading-relaxed ${
                resolvedTheme === 'dark' ? 'text-slate-300' : 'text-gray-600'
              } max-w-2xl mx-auto`}>
                {t('description')}
              </p>
            </Reveal>

            {/* Floating Badges */}
            <Reveal direction="scale" delay={1}>
              <div className="flex flex-wrap justify-center gap-3">
                {floatingBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1 + index * 0.1,
                      duration: 0.5
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-effect ${
                      resolvedTheme === 'dark' 
                        ? 'bg-slate-800/50 text-slate-200 border-slate-700' 
                        : 'bg-white/50 text-gray-700 border-gray-200'
                    } border`}
                  >
                    <span className="text-lg">{badge.icon}</span>
                    <span>{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal direction="up" delay={1.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary neon-glow"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('contactMe')}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('downloadCV')}
                </motion.button>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal direction="fade" delay={1.4}>
              <div className="flex justify-center space-x-6">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        resolvedTheme === 'dark'
                          ? 'bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white'
                          : 'bg-white text-gray-700 hover:bg-indigo-500 hover:text-white'
                      } shadow-lg hover:shadow-xl`}
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </Reveal>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute inset-0 rounded-2xl ${
                  resolvedTheme === 'dark' ? 'bg-indigo-500' : 'bg-blue-500'
                } blur-xl opacity-50`}
              />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src="/api/placeholder/500/600"
                  alt="Professional Profile"
                  className="w-full h-96 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating badges on image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-xs font-medium rounded-full shadow-lg"
                >
                  Available for work
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <Reveal direction="fade" delay={2}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className={`text-sm ${
                resolvedTheme === 'dark' ? 'text-slate-400' : 'text-gray-600'
              }`}>
                Scroll down
              </span>
              <ArrowDown className={`w-5 h-5 ${
                resolvedTheme === 'dark' ? 'text-slate-400' : 'text-gray-600'
              }`} />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
