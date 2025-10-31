"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

type Project = {
  title: string
  desc: string
  stack: string[]
  link?: string
  demo?: string
  image: string // 👈 added image field
}

const projects: Project[] = [
  {
    title: "InterviewGenius",
    desc: "AI mock interview platform with dynamic Q&A and feedback.",
    stack: ["ReactJS", "NodeJS", "Express", "MongoDB", "Python", "OpenAI API", "Tailwind CSS", "Clerk"],
    link: "https://github.com/Priyanshu14G/AI_Interviewer",
    demo: "https://ai-interviewer-smoky-two.vercel.app/",
    image: "/interview.png", // 👈 image file in /public
  },
  {
    title: "GreenShop",
    desc: "Eco-friendly online store with AI recommendations.",
    stack: ["ReactJS", "NodeJS"," NeonDB", "Clerk", "REST API", "Tailwind CSS", "shadcn/ui"],
    link: "https://github.com/Priyanshu14G/GreenShop",
    demo: "https://greenshop-eta.vercel.app/",
    image: "/greenshop.png",
  },
  {
    title: "MedCortico",
    desc: "AI healthcare assistant for quick triage and insights.",
    stack: ["ReactJS", "Flask", "Python", "ML models", "MongoDB", "OpenAI API", "Tailwind CSS"],
    link: "https://github.com/",
    demo: "https://techmakersih.vercel.app/",
    image: "/medcortico.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

function TiltCard({ p }: { p: Project }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [8, -8])
  const rotateY = useTransform(x, [-50, 50], [-8, 8])

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width / 2)
        y.set(e.clientY - rect.top - rect.height / 2)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY }}
      className="will-change-transform"
      variants={itemVariants}
      initial="hidden"
      animate="show"
    >
      <Card className="group neon-soft relative overflow-hidden p-0">
        {/* Header thumbnail */}
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={p.image} // 👈 dynamic image per project
            alt={`${p.title} thumbnail`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_60%)]" />
        </div>

        {/* Body */}
        <div className="p-5">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm text-foreground/90">{p.desc}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs text-primary">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.link && (
              <Button asChild size="sm" variant="outline" className="glass bg-transparent">
                <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} repository`}>
                  <ExternalLink className="mr-2 size-4" />
                  View Repo
                </a>
              </Button>
            )}
            {p.demo && (
              <Button asChild size="sm" className="neon">
                <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}>
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Subtle glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 60px rgba(0,232,255,0.10), inset 0 0 48px rgba(255,0,153,0.06)" }}
          aria-hidden="true"
        />
      </Card>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Selected work across AI, full-stack, and product engineering.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <TiltCard key={p.title} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
