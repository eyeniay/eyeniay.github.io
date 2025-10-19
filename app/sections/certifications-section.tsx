"use client"

import { InfiniteCarousel } from "@/components/infinite-carousel"

export function CertificationsSection() {
  const certifications = [
    { title: "ICT Professional Foundation", org: "Ericsson", year: "2015" },
    { title: "ICPC Programming Camp", org: "Boun ACM", year: "2015" },
    { title: "Telecommunication Networks", org: "Alcatel Lucent", year: "2015" },
    { title: "Business Intelligence", org: "Bilge Adam", year: "2015" },
    { title: "IT Essentials", org: "Cisco Networking Academy", year: "2013" },
    { title: "Leadership Camp", org: "C.B.U Youth Leaders", year: "2014" },
  ]

  const seminars = [
    { title: "Software Testing Education", org: "Ericsson", year: "2016" },
    { title: "Software Technologies & Processes", org: "SoftTech", year: "2017" },
    { title: "Growing Web Technologies", org: "Emakina", year: "2018" },
    { title: "UX Design Workshop", org: "UXservices", year: "2019" },
    { title: "R&D Technology", org: "Triodor", year: "2020" },
    { title: "React Native Development", org: "Self-Study", year: "2021" },
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-muted-foreground">Certifications & Seminars</h2>
        </div>
        <InfiniteCarousel items={certifications} direction="left" />
        <InfiniteCarousel items={seminars} direction="right" />
      </div>
    </section>
  )
}