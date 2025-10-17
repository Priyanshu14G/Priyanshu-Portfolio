"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const items = [
  { title: "Director of Operations", org: "180DC Consulting Society" },
  { title: "Team Head", org: "Enactus NSUT" },
  { title: "Organizing Committee", org: "Hackathons & Fests" },
]

export function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Leadership & Extracurriculars</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="group p-5 neon-soft">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-foreground/80">{it.org}</p>
                <div className="pointer-events-none mt-3 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
