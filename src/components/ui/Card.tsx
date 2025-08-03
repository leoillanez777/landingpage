import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { CardVariant } from '@/types';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  glassIntensity?: 'light' | 'medium' | 'heavy';
}

const cardVariants = {
  default: 'glass-card',
  elevated: 'glass-card shadow-glass-lg',
  outlined: 'glass-card border-2 border-primary-200/30',
  gradient: 'glass-card bg-gradient-to-br from-primary-50/10 to-secondary-50/10',
};

const glassIntensityStyles = {
  light: 'bg-white/10 backdrop-blur-md',
  medium: 'bg-white/20 backdrop-blur-xl',
  heavy: 'bg-white/30 backdrop-blur-2xl',
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className,
  hover = false,
  onClick,
  glassIntensity = 'medium',
}) => {
  const MotionCard = motion.div;
  
  return (
    <MotionCard
      whileHover={hover ? { 
        y: -6, 
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 300,
          damping: 20 
        }
      } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300',
        'border border-white/20',
        cardVariants[variant],
        glassIntensityStyles[glassIntensity],
        hover && 'hover:shadow-glass-lg hover:border-white/30 cursor-pointer glass-shimmer',
        className
      )}
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, rgba(255, 255, 255, ${glassIntensity === 'light' ? 0.1 : glassIntensity === 'medium' ? 0.15 : 0.2}) 0%, rgba(255, 255, 255, 0.05) 100%)`,
        WebkitBackdropFilter: `blur(${glassIntensity === 'light' ? '12px' : glassIntensity === 'medium' ? '16px' : '24px'})`,
        backdropFilter: `blur(${glassIntensity === 'light' ? '12px' : glassIntensity === 'medium' ? '16px' : '24px'})`,
      }}
    >
      {/* Glass effect overlay for depth */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </MotionCard>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('mb-4', className)}>
    {children}
  </div>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('', className)}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('mt-6', className)}>
    {children}
  </div>
);