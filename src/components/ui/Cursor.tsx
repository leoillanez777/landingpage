import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'button' | 'text' | 'image' | 'card'>('default');

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle hover states for different elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('button, .cursor-button, [role="button"]')) {
        setIsHovering(true);
        setCursorVariant('button');
        setCursorText('Click');
      } else if (target.matches('a, .cursor-link')) {
        setIsHovering(true);
        setCursorVariant('button');
        setCursorText('View');
      } else if (target.matches('input, textarea, .cursor-text')) {
        setIsHovering(true);
        setCursorVariant('text');
        setCursorText('Type');
      } else if (target.matches('img, .cursor-image')) {
        setIsHovering(true);
        setCursorVariant('image');
        setCursorText('Zoom');
      } else if (target.matches('.cursor-card, .card, [data-cursor="card"]')) {
        setIsHovering(true);
        setCursorVariant('card');
        setCursorText('Explore');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
        setCursorText('');
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [cursorX, cursorY]);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      border: '2px solid rgba(59, 130, 246, 0.6)',
    },
    button: {
      scale: 2,
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      border: '2px solid rgba(59, 130, 246, 0.8)',
    },
    text: {
      scale: 0.5,
      backgroundColor: 'rgba(16, 185, 129, 0.3)',
      border: '2px solid rgba(16, 185, 129, 0.8)',
    },
    image: {
      scale: 3,
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      border: '2px solid rgba(249, 115, 22, 0.8)',
    },
    card: {
      scale: 1.5,
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      border: '2px solid rgba(139, 92, 246, 0.8)',
    },
  };

  // Hide default cursor on desktop
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      document.body.style.cursor = 'none';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, []);

  // Don't render on mobile devices
  const isMobile = typeof window !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={cursorVariants[cursorVariant]}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Cursor Text */}
      <AnimatePresence>
        {isVisible && cursorText && isHovering && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] px-3 py-1 bg-gray-900 text-white text-sm rounded-full font-medium shadow-lg"
            style={{
              x: mousePosition.x + 20,
              y: mousePosition.y - 40,
            }}
            initial={{ opacity: 0, scale: 0.8, y: mousePosition.y - 30 }}
            animate={{ opacity: 1, scale: 1, y: mousePosition.y - 40 }}
            exit={{ opacity: 0, scale: 0.8, y: mousePosition.y - 30 }}
            transition={{ duration: 0.2 }}
          >
            {cursorText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor Trail Effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9998] opacity-60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{ delay: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-300 rounded-full pointer-events-none z-[9997] opacity-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{ delay: 0.2 }}
      />
    </>
  );
};