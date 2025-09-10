import React from 'react';
import { useScrollProgress } from '../utils/scrollAnimations';

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
      <div 
        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
