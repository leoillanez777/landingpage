import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  glassIntensity?: 'light' | 'medium' | 'heavy';
}

const maxWidthClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = 'md',
  showCloseButton = true,
  glassIntensity = 'medium',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const backdropBlur = {
    light: 'backdrop-blur-md',
    medium: 'backdrop-blur-xl',
    heavy: 'backdrop-blur-2xl',
  };

  const backgroundOpacity = {
    light: 0.15,
    medium: 0.2,
    heavy: 0.25,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ 
              opacity: 1,
              backdropFilter: `blur(${glassIntensity === 'light' ? '8px' : glassIntensity === 'medium' ? '16px' : '24px'})`
            }}
            exit={{ 
              opacity: 0,
              backdropFilter: 'blur(0px)',
              transition: { duration: 0.3 }
            }}
            onClick={onClose}
            className={cn(
              'absolute inset-0 bg-black/30',
              backdropBlur[glassIntensity]
            )}
            style={{
              background: `radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)`,
              WebkitBackdropFilter: `blur(${glassIntensity === 'light' ? '8px' : glassIntensity === 'medium' ? '16px' : '24px'})`,
            }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 50,
              rotateX: -15
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 50,
              rotateX: -15,
              transition: { duration: 0.2, ease: "easeIn" }
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4
            }}
            className={cn(
              'relative w-full rounded-3xl shadow-glass-lg overflow-hidden',
              'border border-white/30',
              maxWidthClasses[maxWidth]
            )}
            style={{
              background: `linear-gradient(135deg, rgba(255, 255, 255, ${backgroundOpacity[glassIntensity]}) 0%, rgba(255, 255, 255, ${backgroundOpacity[glassIntensity] * 0.7}) 100%)`,
              WebkitBackdropFilter: `blur(${glassIntensity === 'light' ? '16px' : glassIntensity === 'medium' ? '20px' : '32px'})`,
              backdropFilter: `blur(${glassIntensity === 'light' ? '16px' : glassIntensity === 'medium' ? '20px' : '32px'})`,
            }}
          >
            {/* Glass overlay for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 pointer-events-none" />
            
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/20">
                {title && (
                  <motion.h2 
                    className="text-xl font-bold text-gray-900 text-shadow-glass"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {title}
                  </motion.h2>
                )}
                {showCloseButton && (
                  <motion.button
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-all duration-300 rounded-xl hover:bg-white/20 backdrop-blur-lg"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            )}
            
            {/* Content */}
            <motion.div 
              className="relative z-10 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {children}
            </motion.div>

            {/* Floating particles for ambiance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};