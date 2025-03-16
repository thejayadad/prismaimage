"use client";

import React from "react";
import LinkItem from "./link-item";

const DeskMenu: React.FC = () => {
  return (
    <div className="hidden lg:flex space-x-6">
      <LinkItem href="/" label="Home" />
      <LinkItem href="/new" label="New" />
      <LinkItem href="/about" label="About" />
      <LinkItem href="/gallery" label="Gallery" />
    </div>
  );
};

export default DeskMenu;
