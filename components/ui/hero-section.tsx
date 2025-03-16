"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center h-80 md:h-[400px] bg-black/90  text-white px-6 text-center"
      initial={{ opacity: 0, y: 30 }} // Animation starts from invisible and slightly below
      animate={{ opacity: 1, y: 0 }} // Fades in and moves to position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
 
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to QuickPost
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Learn, grow, and connect with the best resources.
        </motion.p>
        <motion.button
          className="bg-white text-neutral-600 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
