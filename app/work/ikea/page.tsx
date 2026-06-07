'use client'
import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'

import hero from '@/images/projects/ikea/4.png'
import img1 from '@/images/projects/ikea/4.1.png'
import img2 from '@/images/projects/ikea/4.2.png'
import img3 from '@/images/projects/ikea/4.3.png'
import img4 from '@/images/projects/ikea/4.4.png'
import img5 from '@/images/projects/ikea/4.5.png'
import img6 from '@/images/projects/ikea/4.6.png'

const SECTIONS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'problem',   label: 'The Problem' },
  { id: 'process',   label: 'Process' },
  { id: 'solution',  label: 'The Solution' },
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
      const stripW = 6
      const y0 = Math.floor(img.naturalHeight / 3)
      const stripH = Math.floor(img.naturalHeight / 3)
      const left  = ctx.getImageData(0, y0, stripW, stripH).data
      const right = ctx.getImageData(img.naturalWidth - stripW, y0, stripW, stripH).data
      let r = 0, g = 0, b = 0, n = 0
      for (let i = 0; i < left.length;  i += 4) { r += left[i];  g += left[i+1];  b += left[i+2];  n++ }
      for (let i = 0; i < right.length; i += 4) { r += right[i]; g += right[i+1]; b += right[i+2]; n++ }
      resolve(`rgb(${Math.round(r/n)},${Math.round(g/n)},${Math.round(b/n)})`)
    }
    img.onerror = () => resolve('#0a0a0a')
    img.src = src
  })
}

export default function IkeaCaseStudy() {
  const [active, setActive] = useState('overview')
  const [heroBg, setHeroBg] = useState('#0a0a0a')

  useEffect(() => { sampleEdgeColor(hero.src).then(setHeroBg) }, [])

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

        <div className="relative w-full h-[62vh] min-h-[400px] overflow-hidden transition-colors duration-700" style={{ backgroundColor: heroBg }}>
          <Image src={hero} alt="IKEA Checkout Flow Redesign" fill priority className="object-contain" sizes="100vw" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="pt-10 pb-14">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7 7M5 12l7-7" /></svg>
              All work
            </Link>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-3">UX Design &nbsp;·&nbsp; IKEA</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-6">IKEA — Checkout Flow Redesign</h1>
            <div className="flex flex-wrap gap-2">
              {['E-commerce', 'UX Audit', 'Checkout', 'Web'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-[#1f1f1f] text-[#888888]">{tag}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 lg:gap-20 pb-32">
            <aside className="hidden md:block">
              <nav className="sticky top-28 flex flex-col gap-3">
                {SECTIONS.map(({ id, label }) => (
                  <a key={id} href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className={`text-sm transition-colors duration-200 leading-snug ${active === id ? 'text-white font-medium' : 'text-[#666666] hover:text-[#888888]'}`}>
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-24 md:space-y-32">

              <section id="overview" className="scroll-mt-28">
                <SectionLabel>Overview</SectionLabel>
                <h2 className="section-heading">Re-designing IKEA/SA's Webstore checkout flow</h2>
                <p className="body-text mt-5">IKEA South Africa's webstore checkout had a considerable drop-off in its buy flow. The challenge: the original experience was designed for mobile — condensing four mobile screens into a single web page while optimising load times and establishing a unified design language required a ground-up rethink.</p>
                <MetaGrid items={[
                  { label: 'Client', value: 'IKEA' },
                  { label: 'Role', value: 'Sr. Designer' },
                  { label: 'Team', value: 'Riju KK, Sunaina, Sidharth' },
                  { label: 'Year', value: '2023' },
                ]} />
              </section>

              <section id="problem" className="scroll-mt-28">
                <SectionLabel>The Problem</SectionLabel>
                <h2 className="section-heading">A four-screen mobile flow crammed onto one web page</h2>
                <p className="body-text mt-5 mb-6">The primary challenge was transforming a mobile app checkout into a web experience. The existing flow forced desktop users through a sequence designed for small screens — leading to drop-off at every transition point. We needed to leverage the larger screen real estate intelligently.</p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Considerable drop-off at multiple stages of the buy flow.',
                    'Mobile-first design did not translate to desktop — too many steps, too much scrolling.',
                    'Inconsistent design language across the checkout steps.',
                    'Load time issues caused by inefficient flow structure.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e85d26]" />
                      <span className="text-base text-[#888888] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <FullImage src={img1} alt="IKEA checkout problem analysis" />
                <FullImage src={img2} alt="IKEA checkout current state" className="mt-5" />
              </section>

              <section id="process" className="scroll-mt-28">
                <SectionLabel>Process</SectionLabel>
                <h2 className="section-heading">Research, sketching, and stakeholder alignment</h2>
                <p className="body-text mt-5 mb-6">A comprehensive, research-based methodology guided the redesign from discovery to delivery.</p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Comprehensive research to understand user needs and drop-off points.',
                    'Sketching sessions aligned with FROG design studio to explore layout solutions.',
                    'Established a cohesive design language for visual consistency across all checkout steps.',
                    'Strategic flow combination to optimise load times and reduce step count.',
                    'Design reviews with FROG team for iterative feedback and refinement.',
                    'Stakeholder review with IKEA for alignment and sign-off.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e85d26]" />
                      <span className="text-base text-[#888888] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <FullImage src={img3} alt="IKEA process and research" />
                <FullImage src={img4} alt="IKEA sketching and wireframes" className="mt-5" />
              </section>

              <section id="solution" className="scroll-mt-28">
                <SectionLabel>The Solution</SectionLabel>
                <h2 className="section-heading">Four mobile screens condensed into three optimised web steps</h2>
                <p className="body-text mt-5">By making best use of the larger screen real estate on desktop, we restructured the web checkout flow to three steps — reducing cognitive load, eliminating unnecessary transitions, and establishing a visual language that felt native to the web rather than ported from mobile.</p>
                <FullImage src={img5} alt="IKEA checkout solution — step view" className="mt-8" />
                <FullImage src={img6} alt="IKEA checkout solution — final design" className="mt-5" />
              </section>

              <div className="pt-8 border-t border-[#2a2a2a]">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:opacity-60 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7 7M5 12l7-7" /></svg>
                  Back to all work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Styles />
    </>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-3">{children}</p>
}

function FullImage({ src, alt, className = '' }: { src: StaticImageData; alt: string; className?: string }) {
  return (
    <div className={`mx-auto w-[1092px] max-w-full ${className}`}>
      <div className="relative h-[766px] w-full rounded-2xl overflow-hidden bg-[#141414]">
        <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width: 1092px) 100vw, 1092px" />
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

function Styles() {
  return (
    <style jsx global>{`
      .section-heading { font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: #fff; }
      .body-text { font-size: 1rem; line-height: 1.75; color: #888888; }
    `}</style>
  )
}
