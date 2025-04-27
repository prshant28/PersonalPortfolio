import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  
  return mousePosition;
}

export function useParallaxEffect(strength: number = 20) {
  const { x, y } = useMousePosition();
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate mouse position relative to the center of the window
  const mouseX = (x - windowSize.width / 2) / (windowSize.width / 2);
  const mouseY = (y - windowSize.height / 2) / (windowSize.height / 2);

  // Adjust parallax effect based on strength
  return {
    x: mouseX * strength,
    y: mouseY * strength,
    mouseX,
    mouseY,
  };
}

export function useHoverableElements() {
  const [hoveredElements, setHoveredElements] = useState<string[]>([]);
  
  const registerHover = (id: string) => {
    setHoveredElements(prev => [...prev, id]);
  };
  
  const unregisterHover = (id: string) => {
    setHoveredElements(prev => prev.filter(item => item !== id));
  };
  
  const isHovered = (id: string) => hoveredElements.includes(id);
  
  return { registerHover, unregisterHover, isHovered };
}