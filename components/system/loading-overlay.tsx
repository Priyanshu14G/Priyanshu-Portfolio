"use client"

import { motion } from "framer-motion"

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/70 backdrop-blur-md">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.4, ease: "linear" }}
        className="size-10 rounded-[8px] border-2 border-primary/30 border-t-primary/90"
        aria-label="Loading"
      />
    </div>
  )
}
