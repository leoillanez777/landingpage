import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { GlassVariant, GlassIntensity } from '@/types';

interface GlassProps {
  children: React.ReactNode;
  variant?: GlassVariant;
  intensity?: GlassIntensity;
  className?: string;
  hover?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  border?: boolean;
  shadow?: boolean;
  shimmer?: boolean;
  onClick?: () => void;
}

const variantStyles = {
  light: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'rgba(255, 255, 255, 0.2)',
  },
  medium: {
    background: 'rgba(255, 255, 255, 0.15)',
    border: 'rgba(255, 255, 255, 0.3)',
  },
  heavy: {
    background: 'rgba(255, 255, 255, 0.25)',
    border: 'rgba(255, 255, 255, 0.4)',
  },
  dark: {
    background: 'rgba(0, 0, 0, 0.1)',
    border: 'rgba(0, 0, 0, 0.2)',
  },
  primary: {
    background: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.3)',
  },
  secondary: {
    background: 'rgba(14, 165, 233, 0.1)',
    border: 'rgba(14, 165, 233, 0.3)',
  },
};

const intensityBlur = {
  light: '8px',
  medium: '16px',
  heavy: '24px',
};

const roundedStyles = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

export const Glass: React.FC<GlassProps> = ({
  children,
  variant = 'medium',
  intensity = 'medium',
  className,
  hover = false,
  rounded = '2xl',
  border = true,
  shadow = true,
  shimmer = false,
  onClick,
}) => {
  const style = variantStyles[variant];

  return (
    <motion.div
      whileHover={hover ? {
        scale: 1.02,
        y: -2,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        roundedStyles[rounded],
        border && 'border',
        shadow && 'shadow-glass',
        hover && 'hover:shadow-glass-lg cursor-pointer',
        shimmer && 'glass-shimmer',
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${style.background} 0%, rgba(255, 255, 255, 0.05) 100%)`,
        borderColor: style.border,
        WebkitBackdropFilter: `blur(${intensityBlur[intensity]})`,
        backdropFilter: `blur(${intensityBlur[intensity]})`,
      }}
      onClick={onClick}
    >
      {/* Glass overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
      
      {/* Shimmer effect */}
      {shimmer && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Pre-configured glass variants for common use cases
export const GlassCard: React.FC<Omit<GlassProps, 'variant' | 'rounded'>> = (props) => (
  <Glass variant="medium" rounded="2xl" shadow hover {...props} />
);

export const GlassButton: React.FC<Omit<GlassProps, 'variant' | 'rounded'>> = (props) => (
  <Glass variant="light" rounded="xl" hover shimmer {...props} />
);

export const GlassPanel: React.FC<Omit<GlassProps, 'variant' | 'rounded'>> = (props) => (
  <Glass variant="heavy" rounded="3xl" shadow {...props} />
);

export const GlassBadge: React.FC<Omit<GlassProps, 'variant' | 'rounded'>> = (props) => (
  <Glass variant="primary" rounded="full" {...props} />
);