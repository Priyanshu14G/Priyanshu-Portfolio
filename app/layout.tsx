import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist-sans", // reuse token mapping for font-sans
})

export const metadata: Metadata = {
  title: "Priyanshu Gupta — AI/ML Engineer & Full-Stack Developer",
  description:
    "Futuristic 3D portfolio with projects, experience, and contact. Built with Next.js, Tailwind, Framer Motion, and React Three Fiber.",
  generator: "v0.app",
  openGraph: {
    title: "Priyanshu Gupta — AI/ML Engineer & Full-Stack Developer",
    description: "Futuristic 3D portfolio with projects, experience, and contact.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`font-sans ${spaceGrotesk.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
