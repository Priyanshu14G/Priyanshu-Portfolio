import { Suspense } from "react"
import { FloatingNav } from "@/components/nav/floating-nav"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Leadership } from "@/components/sections/leadership"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/sections/site-footer"
import { LoadingOverlay } from "@/components/system/loading-overlay"

export default function HomePage() {
  return (
    <main className="relative min-h-svh">
      <Suspense fallback={<LoadingOverlay />}>
        <FloatingNav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
        <SiteFooter />
      </Suspense>
    </main>
  )
}
