"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="section-title">About</h2>
            <p className="text-pretty mt-4 text-foreground/90">
              I’m a passionate AI/ML engineer pursuing B.Tech in ECE (AI/ML) at NSUT (2026). I enjoy building
              intelligent systems and full-stack products using Python, C++, React, Node.js, Machine Learning, Deep
              Learning, Tailwind, and Docker.
            </p>
            <p className="mt-3 text-muted-foreground">
              I focus on performance, accessibility, and great developer experience—crafting robust backends and
              delightful UIs with modern tooling.
            </p>
          </div>

          <motion.div
            initial={{ rotateX: 12, rotateY: -12, opacity: 0 }}
            whileInView={{ rotateX: 0, rotateY: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Card className="glass p-6">
              <h3 className="mb-3 font-medium text-primary">Core Expertise</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-foreground/90">
                <li>Python</li>
                <li>C++</li>
                <li>React</li>
                <li>Node.js</li>
                <li>ML/DL</li>
                <li>Tailwind</li>
                <li>Docker</li>
                <li>R3F/Three.js</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
