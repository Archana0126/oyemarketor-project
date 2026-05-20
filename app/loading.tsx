'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-background flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32"
        >
          <Image
            src="/logo.png"
            alt="VIBGYOR Logo"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <motion.span
          className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading
        </motion.span>
      </div>
    </div>
  );
}
