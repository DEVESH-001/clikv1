"use client";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href={"/"}>Home</HoveredLink>
        <MenuItem item="Services" setActive={setActive} active={active}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">ExtractIQ</HoveredLink>
            <HoveredLink href="/about">about</HoveredLink>
            <HoveredLink href="/about">about</HoveredLink>
            <HoveredLink href="/about">about</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/pricing"}>Pricing</Link>
      </Menu>
    </div>
  );
}

export default Navbar;
