'use client'
import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'

import hero from '@/images/projects/nextlevel/4.2.png'
import img1 from '@/images/projects/nextlevel/4.3.png'
import img2 from '@/images/projects/nextlevel/4.4.png'
import img3 from '@/images/projects/nextlevel/4.5.png'
import img4 from '@/images/projects/nextlevel/4.6.png'

const SECTIONS = [
  { id: 'overview',   label: 'Overview' },
  { id: 'onboarding', label: 'Onboarding Funnel' },
  { id: 'jobs',       label: 'Job Application' },
  { id: 'profile',    label: 'Profile Scoring' },
  { id: 'homefeed',   label: 'Home Feed' },
  { id: 'email',      label: 'Email Journeys' },
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

export default function NextLevelCaseStudy() {
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
          <Image src={hero} alt="NextLevel by Unacademy" fill priority className="object-contain" sizes="100vw" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="pt-10 pb-14">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7 7M5 12l7-7" /></svg>
              All work
            </Link>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-3">Product Design &nbsp;·&nbsp; UNACADEMY</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-6">NextLevel by Unacademy</h1>
            <div className="flex flex-wrap gap-2">
              {['Product Design', 'B2B', 'Growth', 'Recruitment'].map((tag) => (
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
                <h2 className="section-heading">How we successfully increased shortlisted candidates by 31%</h2>
                <p className="body-text mt-5">NextLevel is Unacademy's recruitment platform connecting companies with skilled candidates from its learning ecosystem. We tackled the end-to-end hiring experience across five distinct workstreams — from onboarding optimisation to AI-driven job matching — each delivering measurable improvements in candidate volume and quality.</p>
                <MetaGrid items={[
                  { label: 'Client', value: 'Unacademy' },
                  { label: 'Role', value: 'Design Lead' },
                  { label: 'Team', value: 'Riju KK, Parimal Kumar, Animesh Sharma, Sushil Kumar' },
                  { label: 'Year', value: '2021' },
                ]} />
              </section>

              <section id="onboarding" className="scroll-mt-28">
                <SectionLabel>Onboarding Funnel Optimisation</SectionLabel>
                <h2 className="section-heading">375% increase in conversion</h2>
                <p className="body-text mt-5">The original onboarding was a wall of form fields with no context or personalisation. We simplified it into a series of interactive screens that collected salary preferences, location, and skills — then immediately surfaced tailored job recommendations as a reward for completing the flow.</p>
                <div className="grid grid-cols-3 gap-4 mt-8 mb-10">
                  {[
                    { stat: '6%', desc: 'Conversion before' },
                    { stat: '28.1%', desc: 'Conversion after' },
                    { stat: '375%', desc: 'Increase' },
                  ].map(({ stat, desc }) => (
                    <div key={stat} className="rounded-2xl bg-[#141414] p-5">
                      <p className="text-2xl font-bold text-white">{stat}</p>
                      <p className="text-xs text-[#888888] mt-1 leading-snug">{desc}</p>
                    </div>
                  ))}
                </div>
                <FullImage src={img1} alt="NextLevel onboarding funnel redesign" />
              </section>

              <section id="jobs" className="scroll-mt-28">
                <SectionLabel>Job Application Enhancement</SectionLabel>
                <h2 className="section-heading">39% increase in job applications</h2>
                <p className="body-text mt-5">Inactive and expired jobs were cluttering the feed, reducing trust in the platform. We removed stale listings and introduced similar job recommendations post-application — keeping candidates engaged even after they'd applied, and increasing the total shortlist volume from 800 to 1,100 per day.</p>
                <FullImage src={img2} alt="NextLevel job application enhancement" className="mt-8" />
              </section>

              <section id="profile" className="scroll-mt-28">
                <SectionLabel>Profile Scoring System</SectionLabel>
                <h2 className="section-heading">46% increase in total shortlists</h2>
                <p className="body-text mt-5">We introduced a profile completeness score that showed candidates exactly what information would make them more competitive for roles. Clearer profiles meant better algorithmic matching — and a dramatic uplift in daily shortlisting activity as recruiters gained confidence in candidate data quality.</p>
                <div className="grid grid-cols-2 gap-4 mt-8 mb-10">
                  {[
                    { stat: '1,500 → 2,200', desc: 'Total daily shortlists' },
                    { stat: '95%', desc: 'Increase in daily shortlisting' },
                  ].map(({ stat, desc }) => (
                    <div key={stat} className="rounded-2xl bg-[#141414] p-5">
                      <p className="text-xl font-bold text-white">{stat}</p>
                      <p className="text-xs text-[#888888] mt-1 leading-snug">{desc}</p>
                    </div>
                  ))}
                </div>
                <FullImage src={img3} alt="NextLevel profile scoring system" />
              </section>

              <section id="homefeed" className="scroll-mt-28">
                <SectionLabel>Home Feed Launch</SectionLabel>
                <h2 className="section-heading">53% improvement in D1 retention</h2>
                <p className="body-text mt-5">We designed and launched a personalised home feed that surfaced relevant jobs, companies, and connections based on a candidate's profile and activity. The feed gave users a reason to return daily — and the numbers reflected it immediately after launch.</p>
                <div className="grid grid-cols-2 gap-4 mt-8 mb-10">
                  {[
                    { stat: '16% → 27%', desc: 'D1 retention improvement' },
                    { stat: '55.4%', desc: 'Increase in follows (600 → 950)' },
                  ].map(({ stat, desc }) => (
                    <div key={stat} className="rounded-2xl bg-[#141414] p-5">
                      <p className="text-xl font-bold text-white">{stat}</p>
                      <p className="text-xs text-[#888888] mt-1 leading-snug">{desc}</p>
                    </div>
                  ))}
                </div>
                <FullImage src={img4} alt="NextLevel home feed launch" />
              </section>

              <section id="email" className="scroll-mt-28">
                <SectionLabel>Email Journeys</SectionLabel>
                <h2 className="section-heading">66.7% increase in W1 recruiter retention</h2>
                <p className="body-text mt-5">Automated email journeys were designed for both candidates and recruiters — nudging them at the right moment with the right content. For recruiters, weekly digest emails surfaced new, high-match candidates. The result was a significant improvement in first-week recruiter retention, ensuring the platform delivered immediate value before habits could form elsewhere.</p>
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
