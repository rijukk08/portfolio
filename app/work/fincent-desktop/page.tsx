'use client'
import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'

import hero     from '@/images/projects/fincent-desktop/1.1.png'
import imgBiz   from '@/images/projects/fincent-desktop/1.2.png'
import imgCash  from '@/images/projects/fincent-desktop/1.4.png'
import imgAcct  from '@/images/projects/fincent-desktop/1.5.png'
import imgOther from '@/images/projects/fincent-desktop/1.6.png'

const SECTIONS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'about',     label: 'About Fincent' },
  { id: 'problem',   label: 'The Problem' },
  { id: 'business',  label: 'Your Business' },
  { id: 'cashflow',  label: 'Cashflow Widget' },
  { id: 'accounts',  label: 'Your Accounts' },
  { id: 'widgets',   label: 'All Other Widgets' },
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

export default function FincentDesktopCaseStudy() {
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

        {/* Full-bleed hero */}
        <div
          className="relative w-full h-[62vh] min-h-[400px] overflow-hidden transition-colors duration-700"
          style={{ backgroundColor: heroBg }}
        >
          <Image
            src={hero}
            alt="Fincent Headsup Redesign"
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

            <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-3">
              Product Design &nbsp;·&nbsp; FINCENT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-6">
              Fincent — Redesigning Headsup
            </h1>
            <div className="flex flex-wrap gap-2">
              {['Product Design', 'Web App', 'Fintech', 'Dashboard'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-[#1f1f1f] text-[#888888]">{tag}</span>
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
                  Reinventing Fincent's Headsup page — one widget at a time
                </h2>
                <p className="body-text mt-5">
                  The goal: improve user interaction on the Headsup page by presenting monetary data in a more streamlined manner, employing a widget-centric strategy — one widget at a time — for higher precision and brevity. Each widget was redesigned to surface the most actionable financial insight without overwhelming the user.
                </p>
                <MetaGrid items={[
                  { label: 'Client', value: 'Fincent' },
                  { label: 'Role', value: 'Design IC' },
                  { label: 'Team', value: 'Riju KK, Tasmai Jayant, Sunit Singh' },
                  { label: 'Year', value: '2023' },
                ]} />
              </section>

              {/* About */}
              <section id="about" className="scroll-mt-28">
                <SectionLabel>About Fincent</SectionLabel>
                <h2 className="section-heading">A new age finance firm for U.S. small businesses</h2>
                <p className="body-text mt-5">
                  Fincent is a new age finance firm whose mission is to bring financial and accounting services into the modern era. Fincent lets U.S-based SMBs manage payments, streamline invoicing, ensure tidy books, and do their taxes properly — all from a single platform built for business owners, not accountants.
                </p>
              </section>

              {/* Problem */}
              <section id="problem" className="scroll-mt-28">
                <SectionLabel>The Problem</SectionLabel>
                <h2 className="section-heading">The dashboard showed data but couldn't be acted upon</h2>
                <p className="body-text mt-5 mb-6">
                  The existing Headsup page surfaced financial numbers with no way to interact, drill down, or customise. Users arrived, felt confused, and left without taking action.
                </p>
                <ul className="space-y-4">
                  {[
                    'Financial indicators were unclickable — no drill-down or detail available.',
                    'The graph was a static visual aid with no interactivity.',
                    'Balance sheet indicators were excluded from the view entirely.',
                    'No date range options — data from non-reconciled months was mixed in with current figures.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e85d26]" />
                      <span className="text-base text-[#888888] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Your Business */}
              <section id="business" className="scroll-mt-28">
                <SectionLabel>Your Business</SectionLabel>
                <h2 className="section-heading">Surfacing the financial health of your business at a glance</h2>
                <p className="body-text mt-5 mb-8">
                  The Business widget was redesigned to give owners one clear, interactive view of their financial health. We added date period selectors so users could compare time ranges, made all financial indicators clickable with drill-down to underlying data, and added contextual annotations to the graph — labels, trend lines, and period comparisons.
                </p>
                <FullImage src={imgBiz} alt="Your Business widget redesign" />

                {/* Results block */}
                <div className="mt-10 space-y-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26]">Results</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#141414] p-6">
                      <p className="text-2xl font-bold text-white">+0.5%</p>
                      <p className="text-sm text-[#888888] mt-2 leading-snug">Increase in unique users' time spent on the Headsup page</p>
                    </div>
                    <div className="rounded-2xl bg-[#141414] p-6">
                      <p className="text-2xl font-bold text-white">↑ Traffic</p>
                      <p className="text-sm text-[#888888] mt-2 leading-snug">Drastic improvement in navigation to financials, P&L statements, and ledger reports</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3">What's next</p>
                    <ul className="space-y-3">
                      {[
                        'Dynamically show "Profit" or "Loss" based on whether the P&L value is positive or negative.',
                        'Surface top customers and vendors directly within the Business widget.',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e85d26]" />
                          <span className="text-base text-[#888888] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cashflow */}
              <section id="cashflow" className="scroll-mt-28">
                <SectionLabel>Cashflow Widget</SectionLabel>
                <h2 className="section-heading">Understanding money in and money out</h2>
                <p className="body-text mt-5 mb-8">
                  A cash flow statement provides an overview of cash inflows and outflows within a business during a specific period. The redesigned Cashflow widget breaks this down clearly into operating, investing, and financing activities — making it immediately readable for business owners who aren't accountants, without sacrificing the detail that power users need.
                </p>
                <FullImage src={imgCash} alt="Cashflow widget redesign" />
              </section>

              {/* Your Accounts */}
              <section id="accounts" className="scroll-mt-28">
                <SectionLabel>Your Accounts</SectionLabel>
                <h2 className="section-heading">A single snapshot of your entire financial position</h2>
                <p className="body-text mt-5 mb-8">
                  The Accounts widget provides a consolidated snapshot of the business's financial status — bank balances and credit card details including available credit limits. This unified view lets owners track and manage all financial resources from one access point, without switching between accounts or logging into separate banking portals.
                </p>
                <FullImage src={imgAcct} alt="Your Accounts widget redesign" />
              </section>

              {/* All Other Widgets */}
              <section id="widgets" className="scroll-mt-28">
                <SectionLabel>All Other Widgets</SectionLabel>
                <h2 className="section-heading">A modular, composable dashboard</h2>
                <p className="body-text mt-5 mb-8">
                  Beyond the core widgets, the redesigned Headsup page includes a suite of supporting modules — outstanding invoices, upcoming bills, top customers, top vendors, and a reconciliation status tracker. Each follows the same widget-centric principle: one focused insight, one clear action, no noise.
                </p>
                <FullImage src={imgOther} alt="All other widgets" />
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
        .section-heading { font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: #fff; }
        .body-text { font-size: 1rem; line-height: 1.75; color: #888888; }
      `}</style>
    </>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-3">
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
