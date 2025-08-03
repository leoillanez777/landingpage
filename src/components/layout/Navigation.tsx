import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Button, LanguageSelector } from '@/components/ui';
import { useScrollToSection } from '@/hooks';
import { useLanguage } from '@/hooks';
import { logo } from '@/assets';

interface NavigationProps {
  onDemoClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onDemoClick }) => {
  const scrollToSection = useScrollToSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.products'), href: 'products' },
    { label: t('nav.solutions'), href: 'services' },
    { label: t('nav.about'), href: 'about' },
    { label: t('nav.blog'), href: 'blog' },
    { label: t('nav.support'), href: 'support' },
    { label: t('nav.contact'), href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-2xl bg-white/20 border-b border-white/30 shadow-glass'
          : 'backdrop-blur-xl bg-white/10 border-b border-white/20'
      }`}
      style={{
        WebkitBackdropFilter: isScrolled ? 'blur(32px)' : 'blur(16px)',
        backdropFilter: isScrolled ? 'blur(32px)' : 'blur(16px)',
      }}
    >
      {/* Glass overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 pointer-events-none" />

      <Container>
        <div className="relative z-10 flex justify-between items-center h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="flex-shrink-0 flex items-center">
              <motion.div
                className="w-30 h-12 mr-3 relative overflow-hidden rounded-lg"
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={logo}
                  alt="Excelencia Digital"
                  className="w-full h-full object-contain"
                />
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg text-shadow-glass"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transition: { type: 'spring', stiffness: 400 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item.label}
                  {/* Glass underline effect on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
              >
                <Button
                  size="sm"
                  onClick={onDemoClick}
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-700/90 hover:to-cyan-700/90 backdrop-blur-xl border border-white/30 text-white font-semibold shadow-glass-sm hover:shadow-glass transform hover:scale-105 transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.8) 100%)',
                    WebkitBackdropFilter: 'blur(16px)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  {/* Glass shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <span className="relative z-10">{t('nav.demo')}</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
                className="ml-4"
              >
                <LanguageSelector />
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button with glass effect */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-gray-700 hover:text-blue-600 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-2xl bg-white/95 border-b border-white/30 shadow-glass z-40"
          style={{
            WebkitBackdropFilter: 'blur(32px)',
            backdropFilter: 'blur(32px)',
          }}
        >
          <Container>
            <div className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="pt-4 space-y-3">
                <Button
                  size="sm"
                  onClick={() => {
                    onDemoClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-700/90 hover:to-cyan-700/90 backdrop-blur-xl border border-white/30 text-white font-semibold shadow-glass-sm"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.8) 100%)',
                    WebkitBackdropFilter: 'blur(16px)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <span className="relative z-10">{t('nav.demo')}</span>
                </Button>

                <div className="flex justify-center">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </motion.nav>
  );
};

