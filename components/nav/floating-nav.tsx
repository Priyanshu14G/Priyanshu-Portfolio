"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
]

export function FloatingNav() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[92%] md:w-fit"
      role="navigation"
      aria-label="Main"
    >
      <div className="glass ring-1 ring-border/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 flex items-center justify-between gap-2 rounded-xl border px-3 py-2 md:px-4 md:py-2.5">
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-2 py-1.5 text-sm text-foreground/80 hover:text-primary transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            >
              <span className="relative">{l.label}</span>
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded bg-primary/60 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <Button asChild variant="ghost" size="sm" className="text-xs">
            <a href="#hero">Menu</a>
          </Button>
        </div>
        <div className="ml-1">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
