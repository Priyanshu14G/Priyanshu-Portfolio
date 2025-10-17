"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const items = [
  {
    role: "Machine Learning Research Intern",
    org: "DRDO INMAS Lab",
    period: "May–July 2025",
    desc: `Prepared a deep learning-based speech emotion recognition model using the TESS dataset, inspired by the DDA-MSID lie detection architecture. Engineered a multi-feature pipeline using
           only torchaudio (MFCC, delta MFCC, Mel-Spectrogram, ZCR, RMS), thereby eliminating external dependencies.
           ◦ Model Architecture and Performance: Designed and trained a CNN + BiLSTM + Attention model achieving
           85%+ test accuracy on a 7-class emotion classification task; performed rigorous evaluation using confusion matrix
           and F1-score metrics.
           ◦ Research Application: Explored applications in mental state monitoring and secure defense communication
           scenarios; delivered results aligned with DRDO’s interests in audio-based threat detection systems.`,
    highlight: true,
  },
];


export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experience</h2>
        <div className="mt-6 grid gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className={`p-5 ${item.highlight ? "ring-1 ring-primary/50 neon-soft" : "glass"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-medium">
                    {item.role}, <span className="text-primary">{item.org}</span>
                  </h3>
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                </div>
                <p className="mt-3 text-sm text-foreground/90">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
