
'use client';

import { motion } from 'framer-motion';

interface MascotProps {
  className?: string;
  size?: number;
}

export function Mascot({ className, size = 100 }: MascotProps) {
  return (
    <motion.div 
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ears */}
        <motion.path 
          d="M25 40C15 40 10 55 15 65C20 75 30 70 30 60" 
          stroke="#F5C842" 
          strokeWidth="6" 
          strokeLinecap="round"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path 
          d="M75 40C85 40 90 55 85 65C80 75 70 70 70 60" 
          stroke="#F5C842" 
          strokeWidth="6" 
          strokeLinecap="round"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Head/Body */}
        <circle cx="50" cy="55" r="30" fill="#0F1F3D" />
        
        {/* Eyes */}
        <motion.circle 
          cx="40" cy="50" r="3" fill="#F5C842"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.95, 1] }}
        />
        <motion.circle 
          cx="60" cy="50" r="3" fill="#F5C842"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.95, 1] }}
        />
        
        {/* Trunk */}
        <motion.path 
          d="M50 60C50 75 40 80 35 80" 
          stroke="#F5C842" 
          strokeWidth="8" 
          strokeLinecap="round"
          animate={{ d: [
            "M50 60C50 75 40 80 35 80",
            "M50 60C50 75 60 80 65 80",
            "M50 60C50 75 40 80 35 80"
          ] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
