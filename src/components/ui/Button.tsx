import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ButtonVariant, ButtonSize } from '@/types';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  glassEffect?: boolean;
}

const buttonVariants = {
  primary: {
    base: 'text-white border border-white/30 shadow-glass-sm',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(14, 165, 233, 0.8) 100%)',
    hoverBackground: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(14, 165, 233, 0.9) 100%)',
  },
  secondary: {
    base: 'text-white border border-white/30 shadow-glass-sm',
    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(16, 185, 129, 0.8) 100%)',
    hoverBackground: 'linear-gradient(135deg, rgba(34, 197, 94, 0.9) 0%, rgba(16, 185, 129, 0.9) 100%)',
  },
  outline: {
    base: 'text-primary-600 border-2 border-primary-500/50 bg-white/20 backdrop-blur-lg hover:bg-white/30 hover:text-primary-700',
    background: 'rgba(255, 255, 255, 0.1)',
    hoverBackground: 'rgba(255, 255, 255, 0.2)',
  },
  ghost: {
    base: 'text-gray-700 hover:text-primary-600 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20',
    background: 'rgba(255, 255, 255, 0.1)',
    hoverBackground: 'rgba(255, 255, 255, 0.2)',
  },
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  leftIcon,
  rightIcon,
  loading = false,
  fullWidth = false,
  glassEffect = true,
  className,
  disabled,
  ...props
}) => {
  const variantConfig = buttonVariants[variant];

  return (
    <motion.button
      whileHover={{ 
        scale: disabled || loading ? 1 : 1.02,
        boxShadow: disabled || loading ? undefined : "0 16px 48px 0 rgba(31, 38, 135, 0.4)",
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      whileTap={{ 
        scale: disabled || loading ? 1 : 0.98,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        'relative overflow-hidden inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-transparent',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        glassEffect && 'backdrop-blur-xl',
        variantConfig.base,
        buttonSizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      style={glassEffect ? {
        background: variantConfig.background,
        WebkitBackdropFilter: 'blur(16px)',
        backdropFilter: 'blur(16px)',
      } : undefined}
      onMouseEnter={(e) => {
        if (glassEffect && !disabled && !loading) {
          e.currentTarget.style.background = variantConfig.hoverBackground;
        }
      }}
      onMouseLeave={(e) => {
        if (glassEffect && !disabled && !loading) {
          e.currentTarget.style.background = variantConfig.background;
        }
      }}
      {...props}
    >
      {/* Glass shine overlay */}
      {glassEffect && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60 pointer-events-none" />
      )}
      
      {/* Shimmer effect on hover */}
      {glassEffect && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ 
            x: '100%', 
            opacity: [0, 1, 0],
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {loading && (
          <motion.div 
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        {leftIcon && !loading && (
          <motion.span 
            className="mr-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {leftIcon}
          </motion.span>
        )}
        {children}
        {rightIcon && !loading && (
          <motion.span 
            className="ml-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {rightIcon}
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};