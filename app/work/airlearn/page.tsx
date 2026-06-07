'use client'
import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'

import hero from '@/images/projects/airlearn/5.2.png'
import img1 from '@/images/projects/airlearn/5.1.png'
import img2 from '@/images/projects/airlearn/5.1.png'
import img3 from '@/images/projects/airlearn/5.3.png'
import img4 from '@/images/projects/airlearn/5.4.png'
import img5 from '@/images/projects/airlearn/5.5.png'

const SECTIONS = [
  { id: 'overview',    label: 'Overview' },
  { id: 'brief',       label: 'Current Data Analysis' },
  { id: 'features',    label: 'Feature Components' },
  { id: 'outcome',     label: 'Outcome' },
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

export default function AirlearnCaseStudy() {
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
          <Image src={hero} alt="AirLearn Monthly Recap" fill priority className="object-contain" sizes="100vw" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="pt-10 pb-14">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7 7M5 12l7-7" /></svg>
              All work
            </Link>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-3">Feature Design &nbsp;·&nbsp; UNACADEMY</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-6">Unacademy — AirLearn Monthly Recap</h1>
            <div className="flex flex-wrap gap-2">
              {['EdTech', 'Feature Design', 'Growth', 'Engagement'].map((tag) => (
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
                <h2 className="section-heading">Driving engagement and revenue growth with Monthly Recap on AirLearn</h2>
                <p className="body-text mt-5">AirLearn, Unacademy's language learning platform, was facing a challenge of declining user engagement and completion rates over time. Inspired by Spotify Wrapped, we designed a Monthly Recap feature to provide users with personalised insights, progress highlights, and achievable goals — boosting their engagement and satisfaction.</p>
                <MetaGrid items={[
                  { label: 'Client', value: 'Unacademy' },
                  { label: 'Role', value: 'Design Lead' },
                  { label: 'Team', value: 'Riju KK, Kartik Khandekar, Hardik Pandya' },
                  { label: 'Year', value: '2022' },
                ]} />
              </section>

              <section id="brief" className="scroll-mt-28">
                <SectionLabel>Current Data Analysis</SectionLabel>
                <h2 className="section-heading">Declining engagement on a language learning platform</h2>
                <p className="body-text mt-5">AirLearn had rich learning data — lessons completed, streaks, time spent, badges earned — but no surface that made it meaningful to learners. Users completed sessions but had no way to reflect on their progress or feel celebrated for their effort. Engagement was dipping month over month.</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { stat: '5,911', desc: 'Average Daily Active Users (DAUs)' },
                    { stat: '85.2%', desc: 'Lesson Completion Rate (24 hours)' },
                  ].map(({ stat, desc }) => (
                    <div key={stat} className="rounded-2xl bg-[#141414] p-6">
                      <p className="text-3xl font-bold text-white">{stat}</p>
                      <p className="text-xs text-[#888888] mt-2 leading-snug">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="features" className="scroll-mt-28">
                <SectionLabel>Feature Components</SectionLabel>
                <h2 className="section-heading">A personalised monthly story for every learner</h2>
                <p className="body-text mt-5 mb-6">The Monthly Recap was delivered as a full-screen card-based experience at the start of each month. Each card focused on one insight, designed to feel celebratory rather than clinical.</p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Progress Highlights — lessons completed, streaks maintained, total time spent learning.',
                    'Gamification Elements — badges for milestones reached, visualised as achievements.',
                    'Future Goals — AI-driven suggestions for what to focus on next month.',
                    'Comparison Metrics — performance insights benchmarked against similar learners.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e85d26]" />
                      <span className="text-base text-[#888888] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <FullImage src={img2} alt="Monthly Recap feature components" />
                <FullImage src={img3} alt="Monthly Recap screens" className="mt-5" />
                <FullImage src={img4} alt="Monthly Recap detail" className="mt-5" />
                <FullImage src={img5} alt="Monthly Recap final screens" className="mt-5" />
              </section>

<section id="outcome" className="scroll-mt-28">
                <SectionLabel>Outcome</SectionLabel>
                <h2 className="section-heading">The Monthly Recap became a core retention lever</h2>
                <p className="body-text mt-5">The feature successfully addressed declining engagement and motivation on AirLearn. Users who received their Monthly Recap showed significantly higher return rates in the following week. The shareable recap card drove organic word-of-mouth — learners posted their stats to social media, expanding top-of-funnel awareness without paid spend.</p>
                <p className="body-text mt-4">The Monthly Recap became a permanent part of the AirLearn retention and revenue playbook, repeated each month with iterative improvements.</p>
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
