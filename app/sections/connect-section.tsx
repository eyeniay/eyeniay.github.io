"use client"

import Link from "next/link"
import { RefObject } from "react"

interface ConnectSectionProps {
  sectionsRef: RefObject<(HTMLElement | null)[]>
  currentYear: number
}

export function ConnectSection({ sectionsRef, currentYear }: ConnectSectionProps) {
  const socialLinks = [
    { name: "GitHub", handle: "@eyeniay", url: "https://github.com/eyeniay" },
    { name: "LinkedIn", handle: "ethemyeniay", url: "https://linkedin.com/in/ethemyeniay" },
    { name: "Email", handle: "yeniayethem@gmail", url: "mailto:yeniayethem@gmail.com" },
    { name: "YouTube", handle: "@ethemyeniay", url: "https://www.youtube.com/@ethemyeniay6423" },
  ]

  return (
    <>
      <section 
        id="connect" 
        ref={(el) => {
          if (sectionsRef.current) {
            sectionsRef.current[2] = el
          }
        }} 
        className="py-20 sm:py-32 opacity-0"
      >
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Always interested in new opportunities, collaborations, and conversations about technology and design.
              </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      {social.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{social.handle}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 sm:py-16 border-t border-border">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">© {currentYear} Ethem Yeniay. All rights reserved.</div>
            <div className="text-xs text-muted-foreground">Built with Next.js & Tailwind CSS</div>
          </div>
        </div>
      </footer>
    </>
  )
}