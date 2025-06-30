"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/app/lib/utils"; 
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <Link href="/">Home</Link>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/products">All Products</HoveredLink>
            <HoveredLink href="/basic-music">Basic Music</HoveredLink>
            <HoveredLink href="/music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/song-writing">Song Writing</HoveredLink>
            <HoveredLink href="/music-production">Music Production</HoveredLink>
          </div> 
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <Link href="/Contact">Contact Us</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
