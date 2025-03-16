"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeadingTextProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`text-center ${className}`}>
      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-xl md:text-2xl font-bold text-gray-900"
      >
        {title}
      </motion.h1>

      {/* Subtitle Animation (Appears slightly later) */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Added delay for effect
          className="text-md md:text-lg text-gray-600 mt-2"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default HeadingText;
