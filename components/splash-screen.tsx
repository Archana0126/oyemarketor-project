'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[300] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Logo */}
            <motion.div
              className="w-48 h-48"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img
                src="/logo.png"
                alt="VIBGYOR Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Loading Dots */}
            <div className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 bg-primary rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="w-3 h-3 bg-primary rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="w-3 h-3 bg-primary rounded-full"
              />
            </div>

            {/* Loading Text */}
            <motion.span
              className="text-sm font-semibold uppercase tracking-widest text-foreground/60"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading
            </motion.span>
          </div>
        </motion.div>
      )}
      {children}
    </>
  );
}
