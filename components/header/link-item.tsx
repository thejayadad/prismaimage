"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  href: string;
  label: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block text-lg font-medium transition-all ${
        isActive
          ? "text-blue-500 "
          : "text-gray-800  hover:text-blue-400 dark:hover:text-orange-300"
      }`}
    >
      {label}
    </Link>
  );
};

export default LinkItem;
