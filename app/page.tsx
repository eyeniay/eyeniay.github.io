"use client"

import { useEffect, useRef, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroSection } from "./sections/hero-section"
import { WorkSection } from "./sections/work-section"
import { CertificationsSection } from "./sections/certifications-section"
import { ConnectSection } from "./sections/connect-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed top-8 right-8 z-20 backdrop-blur-sm bg-background/80 rounded-lg">
        <ThemeToggle />
      </div>
      
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <HeroSection sectionsRef={sectionsRef} />
        <WorkSection sectionsRef={sectionsRef} currentYear={currentYear} />
        <CertificationsSection />
        <ConnectSection sectionsRef={sectionsRef} currentYear={currentYear} />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}