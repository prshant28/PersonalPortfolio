import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Create motion values for cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Add spring physics for smooth animation
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    // Hide cursor when it leaves the window
    const hideCursor = () => {
      setIsVisible(false);
    };

    // Show cursor when it enters the window
    const showCursor = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Trailing effect */}
      <motion.div
        className="cursor-trail"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          opacity: isVisible ? 0.3 : 0,
          scale: 1.5,
        }}
        transition={{ delay: 0.05 }}
      />
    </>
  );
};

export default CursorEffect;