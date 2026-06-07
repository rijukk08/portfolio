'use client'
import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'

import hero from '@/images/projects/fincent-ios/3.1.png'
import img1 from '@/images/projects/fincent-ios/3.1.png'
import img2 from '@/images/projects/fincent-ios/3.2.png'
import img3 from '@/images/projects/fincent-ios/3.3.png'
import img4 from '@/images/projects/fincent-ios/3.4.png'
import img5 from '@/images/projects/fincent-ios/3.5.png'

const SECTIONS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'why',       label: 'Why an App?' },
  { id: 'audience',  label: 'Target Audience' },
  { id: 'timeline',  label: 'Timeline' },
  { id: 'getpaid',   label: 'Get Paid & Pay' },
  { id: 'directory', label: 'Directory' },
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

export default function FincentIOSCaseStudy() {
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
          <Image src={hero} alt="Fincent iOS" fill priority className="object-contain" sizes="100vw" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="pt-10 pb-14">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7 7M5 12l7-7" /></svg>
              All work
            </Link>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-3">Mobile Design &nbsp;·&nbsp; FINCENT</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-6">Fincent iOS</h1>
            <div className="flex flex-wrap gap-2">
              {['iOS', 'Mobile Design', 'Fintech', 'SMB'].map((tag) => (
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
                <h2 className="section-heading">Financial super-app for U.S based SMBs to pay, invoice, and keep their books tidy</h2>
                <p className="body-text mt-5">Fincent's web platform was already helping small businesses manage their finances — but business owners are rarely at their desks. The iOS app brings the core of Fincent's financial management to the pocket: payment approvals, invoice tracking, and account monitoring on the go.</p>
                <MetaGrid items={[
                  { label: 'Client', value: 'Fincent' },
                  { label: 'Role', value: 'Design Lead' },
                  { label: 'Team', value: 'Riju KK, Aditya Dubey, Sunit Singh' },
                  { label: 'Year', value: '2023' },
                ]} />
              </section>

              <section id="why" className="scroll-mt-28">
                <SectionLabel>Why an App?</SectionLabel>
                <h2 className="section-heading">Widening accessibility and adding credibility</h2>
                <p className="body-text mt-5">Making the app and launching it on the App Store widens accessibility, reaching a broader audience and attracting new users. This not only enhances our professional image by adding credibility but also ensures automatic updates for a seamless user experience. App Store presence opens doors to marketing opportunities — features, reviews, and increased visibility — ultimately boosting discoverability.</p>
              </section>

              <section id="audience" className="scroll-mt-28">
                <SectionLabel>Target Audience</SectionLabel>
                <h2 className="section-heading">Built for business owners with active Fincent subscriptions</h2>
                <p className="body-text mt-5 mb-6">The app was designed specifically for business owners and their collaborators — not for bookkeepers, vendors, or free-tier users. This clarity of audience shaped every decision about what to surface and what to defer.</p>
                <ul className="space-y-4">
                  {[
                    'Business Owners with an active Fincent subscription.',
                    'Business Owner Collaborators who assist in day-to-day financial management.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e85d26]" />
                      <span className="text-base text-[#888888] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <FullImage src={img2} alt="Fincent iOS target audience" className="mt-8" />
              </section>

              <section id="timeline" className="scroll-mt-28">
                <SectionLabel>Timeline</SectionLabel>
                <h2 className="section-heading">A supercharged bank feed in your pocket</h2>
                <p className="body-text mt-5">Timeline is a search-friendly view of all transactions from all your accounts — like a supercharged bank feed. Business owners can scroll, filter, and search across every financial event without switching between accounts or reports.</p>
                <FullImage src={img3} alt="Fincent iOS Timeline feature" className="mt-8" />
              </section>

              <section id="getpaid" className="scroll-mt-28">
                <SectionLabel>Get Paid & Pay</SectionLabel>
                <h2 className="section-heading">Invoice management and bill payment, mobile-first</h2>
                <p className="body-text mt-5">The Get Paid and Pay sections give business owners full control over their receivables and payables from their phone. Create and send invoices, track payment status, and approve or schedule bill payments — all without touching a desktop.</p>
                <FullImage src={img4} alt="Fincent iOS Get Paid and Pay" className="mt-8" />
              </section>

              <section id="directory" className="scroll-mt-28">
                <SectionLabel>Directory</SectionLabel>
                <h2 className="section-heading">Your financial 'chat history'</h2>
                <p className="body-text mt-5">Directory gives owners a unified view of every customer and vendor account — their transaction history, outstanding balances, and contact details. Think of it as the financial equivalent of a chat history: every interaction in one place, searchable and actionable.</p>
                <FullImage src={img5} alt="Fincent iOS Directory" className="mt-8" />
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
