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
        <Link href="/" onClick={() => setActive("Home")}>
        <MenuItem setActive={setActive} active={active} item="Home">
     
        </MenuItem>
        </Link>
      <MenuItem setActive={setActive} active={active} item="Products">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/products">All Products</HoveredLink>
          <HoveredLink href="/products">Basic Music</HoveredLink>
          <HoveredLink href="/products">Basic Music Theory</HoveredLink>
          <HoveredLink href="/products">Song Writing</HoveredLink>
          <HoveredLink href="/products">Music Production</HoveredLink>
        </div> 
      </MenuItem>
      <Link href={"/contact"}>
      <MenuItem setActive={setActive} active={active} item="Contact Us">
        
      </MenuItem>
      </Link>
      
    </Menu>
    </div>
  )
}


