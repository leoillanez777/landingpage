import React from 'react';
import { motion } from 'framer-motion';
import { iso9001Certificate } from '@/assets';
import { useLanguage } from '@/hooks';

interface ISO9001BadgeProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'detailed';
  className?: string;
  showText?: boolean;
}

export const ISO9001Badge: React.FC<ISO9001BadgeProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  showText = true
}) => {
  const { t } = useLanguage();

  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  if (variant === 'minimal') {
    return (
      <motion.div
        className={`inline-flex items-center ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className={`${sizes[size]} rounded-lg overflow-hidden shadow-md cursor-image`}>
          <img 
            src={iso9001Certificate} 
            alt="ISO 9001 Certification" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    );
  }

  if (variant === 'detailed') {
    return (
      <motion.div
        className={`inline-flex items-center justify-center bg-white/90 backdrop-blur-sm border border-blue-200 rounded-2xl px-6 py-4 shadow-xl ${className}`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center space-x-4">
          <div className={`${sizes[size]} rounded-xl overflow-hidden shadow-lg cursor-image`}>
            <img 
              src={iso9001Certificate} 
              alt="ISO 9001 Certification" 
              className="w-full h-full object-cover"
            />
          </div>
          {showText && (
            <div className="text-left">
              <div className={`${textSizes[size]} font-bold text-gray-900`}>
                {t('benefits.iso.title')}
              </div>
              <div className={`${size === 'sm' ? 'text-xs' : 'text-sm'} text-gray-600`}>
                {t('benefits.iso.subtitle')}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      className={`inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl px-4 py-3 shadow-lg ${className}`}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="flex items-center space-x-3">
        <div className={`${sizes[size]} rounded-lg overflow-hidden shadow-md cursor-image`}>
          <img 
            src={iso9001Certificate} 
            alt="ISO 9001 Certification" 
            className="w-full h-full object-cover"
          />
        </div>
        {showText && (
          <div className="text-left">
            <div className={`${textSizes[size]} font-bold text-gray-900`}>
              {t('benefits.iso.title')}
            </div>
            <div className={`${size === 'sm' ? 'text-xs' : 'text-sm'} text-gray-600`}>
              {t('benefits.iso.subtitle')}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};