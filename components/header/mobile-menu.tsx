"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import LinkItem from "./link-item";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        className="text-2xl text-gray-800 dark:text-gray-200 p-2 z-[10000]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <motion.div
          key={isOpen ? "close" : "open"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FiX className="text-neutral-800 z-[999]" /> : <FiMenu />}
        </motion.div>
      </button>

      {/* Full-screen overlay to close menu when clicking outside */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Side Drawer */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Logo Section */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  QuickPost
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-600 dark:text-gray-400"
                >
                  <FiX />
                </button>
              </div>

              {/* Body (Links) */}
              <div className="flex flex-col flex-grow px-4 py-6 space-y-4">
                <LinkItem href="/" label="Home"  />
                <LinkItem href="/new" label="New"  />
                <LinkItem href="/about" label="About" />
                <LinkItem href="/gallery" label="Gallery"  />
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} QuickPost
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
