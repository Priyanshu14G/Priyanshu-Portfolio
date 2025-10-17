"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HeroScene } from "@/components/three/hero-scene"
import { Github, FileText, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const phrases = [
  "Building intelligent systems with code and creativity.",
  "Designing AI-first experiences for the future.",
  "Turning ideas into fast, delightful software.",
]

export function Hero() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
      <HeroScene />
      <div className="container relative mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text column */}
            <div className="text-center md:text-left">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs tracking-wide text-primary">
                New Delhi, India
              </span>
              <h1 className="text-balance mt-4 font-sans text-4xl text-white font-semibold leading-tight md:text-6xl">
                Priyanshu Gupta
              </h1>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                AI/ML Engineer | Full-Stack Developer | Tech Innovator
              </p>
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-pretty mt-5 text-base text-foreground/85 md:text-lg"
              >
                {phrases[index]}
              </motion.p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <Button asChild className="neon">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild variant="ghost" className="glass 
                hover:border-primary 
                hover:bg-primary text-white
                dark:hover:border-primary 
                dark:hover:bg-primary text-white
                ">
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="size-4" /> Contact Me
                  </a>
                </Button>
                <Button asChild variant="secondary" className="hover:shadow-[0_0_25px_rgba(0,232,255,0.25)] dark:hover:bg-primary dark:hover:text-black">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FileText className="size-4" /> Resume
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-2 
                    hover:border-primary 
                    hover:bg-primary text-white
                    dark:hover:border-primary 
                    dark:hover:bg-primary text-white"
                    aria-label="Visit my GitHub profile"
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Illustration column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="glass neon-soft relative overflow-hidden rounded-xl border border-border/60">
                <Image
                  src="/images/hero-cartoon.jpg"
                  alt="Cartoon illustration of a developer building AI-powered apps"
                  width={1040}
                  height={1040}
                  className="h-auto w-full object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(200px_120px_at_100%_0%,rgba(0,232,255,0.15),transparent_60%)]" />
              </div>
              <div
                className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(40% 40% at 70% 10%, rgba(0,232,255,0.12) 0%, rgba(255,0,153,0.10) 40%, transparent 70%)",
                }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
