"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"

const groups = [
  {
    name: "Programming",
    skills: [
      { k: "Python", v: 90 },
      { k: "C++", v: 80 },
      { k: "JavaScript/TypeScript", v: 85 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { k: "React / Next.js", v: 90 },
      { k: "Node.js", v: 85 },
      { k: "Flask", v: 70 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { k: "Tailwind CSS", v: 90 },
      { k: "Docker", v: 75 },
      { k: "Git/GitHub", v: 85 },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { k: "Leadership", v: 85 },
      { k: "Collaboration", v: 90 },
      { k: "Communication", v: 85 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {groups.map((g, gi) => (
            <Card key={g.name} className="p-5 glass">
              <h3 className="font-medium text-primary">{g.name}</h3>
              <div className="mt-4 grid gap-3">
                {g.skills.map((s, si) => (
                  <div key={s.k}>
                    <div className="flex items-center justify-between text-sm">
                      <span>{s.k}</span>
                      <span className="text-muted-foreground">{s.v}%</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: (gi + si) * 0.05 }}
                      viewport={{ once: true, amount: 0.6 }}
                    >
                      <Progress value={s.v} className="mt-1" />
                    </motion.div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
