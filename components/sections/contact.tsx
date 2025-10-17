"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Code } from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contact</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="p-5 glass">
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />{" "}
                <a href="mailto:email@example.com" className="hover:underline">
                  email@example.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="size-4 text-primary" />{" "}
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="size-4 text-primary" />{" "}
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Code className="size-4 text-primary" />{" "}
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LeetCode
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> New Delhi, India
              </div>
            </div>
          </Card>

          <Card className="p-5 neon-soft">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                // Simulate success
                setTimeout(() => setSent(true), 400)
              }}
              className="grid gap-3"
            >
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Your email" required />
              <Textarea placeholder="Your message" required />
              <div className="flex justify-end">
                <Button type="submit" className="neon">
                  Send
                </Button>
              </div>
            </form>
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-4 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-primary"
                >
                  Thanks! Your message has been sent.
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -z-10 h-64 bg-[radial-gradient(50%_50%_at_80%_0%,rgba(0,232,255,0.12),transparent_60%)]"
      />
    </section>
  )
}
