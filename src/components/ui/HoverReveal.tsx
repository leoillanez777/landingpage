import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface HoverRevealProps {
  children: React.ReactNode;
  className?: string;
  revealContent?: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const HoverReveal: React.FC<HoverRevealProps> = ({
  children,
  className = '',
  revealContent,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const getRevealAnimation = () => {
    switch (direction) {
      case 'up':
        return { y: isHovered ? -20 : 0, opacity: isHovered ? 1 : 0 };
      case 'down':
        return { y: isHovered ? 20 : 0, opacity: isHovered ? 1 : 0 };
      case 'left':
        return { x: isHovered ? -20 : 0, opacity: isHovered ? 1 : 0 };
      case 'right':
        return { x: isHovered ? 20 : 0, opacity: isHovered ? 1 : 0 };
      default:
        return { y: isHovered ? -20 : 0, opacity: isHovered ? 1 : 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`cursor-card relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Main content */}
      <motion.div
        animate={{
          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* Reveal content */}
      {revealContent && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={getRevealAnimation()}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {revealContent}
        </motion.div>
      )}

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Spotlight effect */}
      <motion.div
        className="absolute rounded-full bg-white/10 pointer-events-none"
        style={{
          width: 100,
          height: 100,
          x: mouseXSpring,
          y: mouseYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};