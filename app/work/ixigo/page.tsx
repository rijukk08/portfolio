'use client'
import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'

import hero1       from '@/images/projects/ixigo/hero1.png'
import procees     from '@/images/projects/ixigo/procees.webp'
import cardsorting from '@/images/projects/ixigo/cardsorting.webp'
import graph       from '@/images/projects/ixigo/graph.webp'
import usercall    from '@/images/projects/ixigo/usercall.webp'
import progress    from '@/images/projects/ixigo/progress.webp'
import beforeafter from '@/images/projects/ixigo/beforeafter.webp'
import screen2     from '@/images/projects/ixigo/2.webp'
import screen1     from '@/images/projects/ixigo/1.webp'

const SECTIONS = [
  { id: 'overview',    label: 'Overview' },
  { id: 'about',       label: 'About ixigo Trains' },
  { id: 'problem',     label: 'The Problem' },
  { id: 'process',     label: 'Process' },
  { id: 'findings',    label: 'Key Findings' },
  { id: 'wireframing', label: 'Direction & Wireframing' },
  { id: 'solution',    label: 'The Final Solution' },
]

function sampleEdgeColor(src: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) return resolve('#0a0a0a')
      ctx.drawImage(img, 0, 0)

      // Sample a 6px-wide strip on the left and right edges, middle third of height
      const stripW = 6
      const y0 = Math.floor(img.naturalHeight / 3)
      const stripH = Math.floor(img.naturalHeight / 3)

      const left  = ctx.getImageData(0, y0, stripW, stripH).data
      const right = ctx.getImageData(img.naturalWidth - stripW, y0, stripW, stripH).data

      let r = 0, g = 0, b = 0, n = 0
      for (let i = 0; i < left.length; i += 4)  { r += left[i];  g += left[i+1];  b += left[i+2];  n++ }
      for (let i = 0; i < right.length; i += 4) { r += right[i]; g += right[i+1]; b += right[i+2]; n++ }

      resolve(`rgb(${Math.round(r/n)},${Math.round(g/n)},${Math.round(b/n)})`)
    }
    img.onerror = () => resolve('#0a0a0a')
    img.src = src
  })
}

export default function IxigoCaseStudy() {
  const [active, setActive] = useState('overview')
  const [heroBg, setHeroBg] = useState('#0a0a0a')

  useEffect(() => {
    sampleEdgeColor(hero1.src).then(setHeroBg)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />

      <main className="pt-16 bg-[#0a0a0a] min-h-screen">

        {/* Full-bleed hero */}
        <div className="relative w-full h-[62vh] min-h-[400px] overflow-hidden transition-colors duration-700" style={{ backgroundColor: heroBg }}>
          <Image
            src={hero1}
            alt="ixigo SRP Redesign"
            fill
            priority
            className="object-contain"
            sizes="100vw"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Header */}
          <div className="pt-10 pb-14">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7 7M5 12l7-7" />
              </svg>
              All work
            </Link>

            <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-orange-500 mb-3">
              UX Design &nbsp;·&nbsp; IXIGO
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-6">
              ixigo SRP Redesign
            </h1>

            <div className="flex flex-wrap gap-2">
              {['UX Research', 'UI Design', 'Mobile'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-[#1f1f1f] text-[#888888]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Two-column body */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 lg:gap-20 pb-32">

            {/* Sticky sidebar */}
            <aside className="hidden md:block">
              <nav className="sticky top-28 flex flex-col gap-3">
                {SECTIONS.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`text-sm transition-colors duration-200 leading-snug ${
                      active === id
                        ? 'text-white font-medium'
                        : 'text-[#666666] hover:text-[#888888]'
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div className="space-y-24 md:space-y-32">

              {/* Overview */}
              <section id="overview" className="scroll-mt-28">
                <SectionLabel>Overview</SectionLabel>
                <h2 className="section-heading">
                  How I increased the conversion rate from 4.5% to 7.5%
                </h2>
                <p className="body-text mt-5">
                  ixigo's train search results page had a massive engagement-to-booking gap. With 4 lakh daily searches but only ~16,500 bookings, the conversion rate sat at 4.1%. The page was focused on showing availability — not driving users to book. We redesigned the information architecture, visual hierarchy, and interaction model from the ground up to shift that balance.
                </p>
              </section>

              {/* About */}
              <section id="about" className="scroll-mt-28">
                <SectionLabel>About ixigo Trains</SectionLabel>
                <h2 className="section-heading">India's leading train booking app</h2>
                <div className="body-text mt-5 space-y-4">
                  <p>
                    The ixigo Trains App ranks #7 in the top 10 travel apps worldwide & #2 in India in terms of downloads and hours spent — with ~90 million monthly active users.
                  </p>
                  <p>
                    India has the fourth largest railway network with over 13,452 passenger trains and 24 million passengers a day. ixigo's focus is the next billion users — mainly tier 2/3 cities. This audience is hyper price-sensitive, not always tech-savvy, bandwidth-constrained, and values straightforward processes above all else.
                  </p>
                  <MetaGrid items={[
                    { label: 'Client', value: 'ixigo' },
                    { label: 'Role', value: 'Lead Design' },
                    { label: 'Team', value: 'Riju KK, Ruchee Balia, Ashutosh, Rajnish' },
                    { label: 'Year', value: '2022' },
                  ]} />
                </div>
              </section>

              {/* Problem */}
              <section id="problem" className="scroll-mt-28">
                <SectionLabel>The Problem</SectionLabel>
                <h2 className="section-heading">
                  Low conversion — a massive engagement-to-booking gap
                </h2>
                <div className="body-text mt-5 space-y-4">
                  <p>
                    There was a huge influx of users engaging with the app, but the engagement vs. booking ratio was very small. The data pointed to the search listing page as the primary drop-off point.
                  </p>
                  <p>
                    The existing design was limiting users to checking availability rather than driving them towards booking. The information architecture and visual hierarchy were incoherent, making it hard to compare trains or find relevant filters quickly.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {[
                      { stat: '4 lac',   desc: 'Daily train searches' },
                      { stat: '16,500',  desc: 'Average bookings per day' },
                      { stat: '4.1%',    desc: 'Conversion rate' },
                    ].map(({ stat, desc }) => (
                      <div key={stat} className="rounded-2xl bg-[#141414] p-5">
                        <p className="text-2xl font-bold text-white">{stat}</p>
                        <p className="text-xs text-[#888888] mt-1 leading-snug">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Process */}
              <section id="process" className="scroll-mt-28">
                <SectionLabel>Process</SectionLabel>
                <h2 className="section-heading">Research-led, user-validated</h2>

                <FullImage src={procees} alt="ixigo design process overview" className="mt-8" />

                <div className="space-y-10 mt-12">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Kick-off Meeting & Brainstorming
                    </h3>
                    <p className="body-text">
                      Design and product collaborated to break down the problem and align on what we were solving. The data confirmed drop-offs at the listing page — the hypothesis was that the design was showing availability but not enabling bookability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      User Research
                    </h3>
                    <p className="body-text">
                      We analysed session recordings and tracking data, then ran a card sort with real users to reprioritise the data points on the listing page. We tested with two personas: a frequent traveller (weekly/monthly) and an occasional booker (a few times a year). A working prototype was tested at the New Delhi railway station.
                    </p>
                  </div>
                </div>

                {/* Process images — vertical stack, each 1092×766 */}
                <div className="flex flex-col gap-4 mt-10">
                  {([
                    [cardsorting, 'Card sorting session'],
                    [graph,       'Data analysis graph'],
                    [usercall,    'User research call'],
                  ] as [StaticImageData, string][]).map(([src, alt]) => (
                    <div key={alt} className="mx-auto w-[1092px] max-w-full">
                      <div className="relative h-[766px] w-full rounded-2xl overflow-hidden bg-[#141414]">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1092px) 100vw, 1092px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Findings */}
              <section id="findings" className="scroll-mt-28">
                <SectionLabel>Key Findings</SectionLabel>
                <h2 className="section-heading">What users actually needed</h2>
                <p className="body-text mt-5 mb-8">
                  "Availability was of main importance to everyone, but the priority of other data points depended on the persona." Overall there wasn't much gap in weightage — it was more about arrangement and visual hierarchy.
                </p>
                <ul className="space-y-4">
                  {[
                    'Arrival & departure timings and duration were the primary deciding and filtering factors.',
                    'Users had difficulty finding what they wanted — class options, train details — within the existing layout.',
                    'Comparing trains side-by-side was nearly impossible in the existing design.',
                    'Train operation days were not understood by users — a key trust and decision-making signal.',
                    'The listing was so focused on "availability" that users didn\'t know how to proceed to booking.',
                  ].map((finding) => (
                    <li key={finding} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span className="text-base text-[#888888] leading-relaxed">{finding}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Wireframing */}
              <section id="wireframing" className="scroll-mt-28">
                <SectionLabel>Direction & Wireframing</SectionLabel>
                <h2 className="section-heading">Reframing from availability to bookability</h2>

                <FullImage src={progress} alt="ixigo wireframing and direction explorations" className="mt-8" />

                <p className="body-text mt-8">
                  With all research insights consolidated, we identified five core pain points: difficult train comparison, poor visual hierarchy, weak CTAs and copy, inaccessible filters, and a train-detail page requiring too many navigational round-trips. Each became a specific design decision in the new layout.
                </p>
              </section>

              {/* Final Solution */}
              <section id="solution" className="scroll-mt-28">
                <SectionLabel>The Final Solution</SectionLabel>
                <h2 className="section-heading">
                  From 4.5% to 7.5% — an 85% lift in conversion
                </h2>
                <div className="body-text mt-5 space-y-4 mb-10">
                  <p>
                    <strong className="text-white">Shifting focus to booking</strong> — Availability is now shown upfront alongside the class, colour-coded by status. Tapping reveals detailed availability with a prominent "Book" CTA.
                  </p>
                  <p>
                    <strong className="text-white">Improved information architecture</strong> — Font weights, colour and spacing establish a clear hierarchy. Secondary detail moved to the train detail page as a bottom sheet so users never lose context.
                  </p>
                  <p>
                    <strong className="text-white">Better filter access</strong> — Key filters surfaced upfront. All class options displayed in a carousel directly on the listing card.
                  </p>
                </div>

                <div className="space-y-5">
                  {([
                    [beforeafter, 'Before and after comparison'],
                    [screen2,     'Final design screens — detail'],
                    [screen1,     'Final design screens — overview'],
                  ] as [StaticImageData, string][]).map(([src, alt]) => (
                    <FullImage key={alt} src={src} alt={alt} />
                  ))}
                </div>
              </section>

              {/* Bottom nav */}
              <div className="pt-8 border-t border-[#2a2a2a]">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:opacity-60 transition-opacity"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M5 12l7 7M5 12l7-7" />
                  </svg>
                  Back to all work
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .section-heading {
          font-size: clamp(1.6rem, 3vw, 2.25rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: rgb(255 255 255);
        }
        .body-text {
          font-size: 1rem;
          line-height: 1.75;
          color: rgb(163 163 163);
        }
      `}</style>
    </>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-orange-500 mb-3">
      {children}
    </p>
  )
}

function FullImage({ src, alt, className = '' }: { src: StaticImageData; alt: string; className?: string }) {
  return (
    <div className={`mx-auto w-[1092px] max-w-full ${className}`}>
      <div className="relative h-[766px] w-full rounded-2xl overflow-hidden bg-[#141414]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1092px) 100vw, 1092px"
        />
      </div>
    </div>
  )
}

function MetaGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-8 pt-8 border-t border-[#2a2a2a]">
      {items.map(({ label, value }) => (
        <div key={label}>
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#888888] mb-1">{label}</p>
          <p className="text-sm text-white font-medium">{value}</p>
        </div>
      ))}
    </div>
  )
}
