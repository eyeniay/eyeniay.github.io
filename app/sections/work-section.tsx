"use client"

import { RefObject } from "react"

interface WorkSectionProps {
  sectionsRef: RefObject<(HTMLElement | null)[]>
  currentYear: number
}

export function WorkSection({ sectionsRef, currentYear }: WorkSectionProps) {
  const workExperience = [
    {
      year: "2025",
      role: "Senior Software Engineer",
      company: "Turkish Technology",
      description: "Contributing to the development of an AI-first product and component library from scratch. Building modern frontend solutions with React while integrating artificial intelligence capabilities into user experiences.",
      tech: ["Product Development", "AI Integration"],
    },
    {
      year: "2021",
      role: "Senior Software Engineer",
      company: "Gözen Digital Aviation",
      description: "Led web and mobile app development with React and React Native. Developed design system component libraries and implemented comprehensive unit testing strategies.",
      tech: ["React", "React Native", "Design Systems"],
    },
    {
      year: "2018",
      role: "Software Engineer",
      company: "Ziraat Technology",
      description: "Spearheaded React-JavaScript screen transformation and facilitated React adoption across the entire company, modernizing legacy systems.",
      tech: ["C#", "JavaScript", "System Migration"],
    },
    {
      year: "2017",
      role: "Software Engineer",
      company: "Türkiye Finans",
      description: "Developed Windows form applications and managed MSSQL database operations for financial services infrastructure.",
      tech: ["C#", ".NET", "MSSQL", "Windows Forms"],
    },
    {
      year: "2017",
      role: "Developer",
      company: "Ceviz Technology",
      description: "Built enterprise portal solutions using SharePoint, creating custom workflows and business applications.",
      tech: ["SharePoint", ".NET", "Enterprise Solutions"],
    },
  ]

  return (
    <section
      id="work"
      ref={(el) => {
        if (sectionsRef.current) {
          sectionsRef.current[1] = el
        }
      }}
      className="min-h-screen py-20 sm:py-32"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Professional Experience</h2>
          <div className="text-sm text-muted-foreground font-mono">2017 — {currentYear}</div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
            >
              <div className="lg:col-span-2">
                <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {job.year}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                  <div className="text-muted-foreground">{job.company}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}