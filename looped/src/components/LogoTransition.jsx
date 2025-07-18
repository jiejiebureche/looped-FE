import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import looped from '../assets/looped.svg';
import infinity from '../assets/infinity.svg';

export default function LogoTransition({ onFinish }) {
  const [showInfinity, setShowInfinity] = useState(false);

  useEffect(() => {
    const transitionDelay = 2000;
    const finishDelay = 5000;

    const timeout1 = setTimeout(() => setShowInfinity(true), transitionDelay);
    const timeout2 = setTimeout(() => onFinish?.(), finishDelay);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onFinish]);

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!showInfinity ? (
          <motion.img
            key="looped"
            src={looped}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1 }}
            className="w-[240px] h-auto" // match scale
            alt="Looped Logo"
          />
        ) : (
          <motion.img
            key="infinity"
            src={infinity}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-[100px] h-auto" // resized to match looped's infinity
            alt="Infinity Icon"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
