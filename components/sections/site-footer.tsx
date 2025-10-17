"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[linear-gradient(180deg,transparent,rgba(0,232,255,0.06))]">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Priyanshu Gupta. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:email@example.com" className="text-foreground/80 hover:text-primary" aria-label="Email">
              <Mail className="size-5" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
