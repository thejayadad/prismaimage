'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa"; // Using a feather icon to represent writing

const Logo: React.FC = () => {
  return (
    <motion.div
      className="flex items-center gap-1 text-neutral-800  font-bold text-xl"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <FaFeatherAlt className="text-neutral-300 text-2xl" /> {/* Secondary color */}
      <span>QuickPost</span>
    </motion.div>
  );
};

export default Logo;
