'use client'
import Link from 'next/link'
import Nav from '@/components/Nav'

const PHOTOS = [1, 2, 3, 4, 5]

const ROLES = [
  { company: 'IBM',           role: 'Design',                  dates: 'Jan 2025–Present' },
  { company: 'Unacademy',     role: 'Lead Designer',           dates: 'Feb 2024–Aug 2024' },
  { company: 'Fincent',       role: 'Lead Product Designer',   dates: 'Jan 2022–Feb 2024' },
  { company: 'ixigo',         role: 'Lead UX Designer',        dates: 'Jun 2020–Jan 2022' },
  { company: 'ixigo',         role: 'Principal UX Designer',   dates: 'Aug 2018–Jun 2020' },
  { company: 'Design For Use', role: 'Sr. Product Designer',   dates: 'May 2015–Jul 2018' },
]

const BIO = [
  'I grew up in Kerala and built my career across India\'s leading product companies. Over the past 10+ years I\'ve helped design products used by millions — at ixigo, Fincent, Unacademy, and now IBM — starting as a designer and growing into lead roles shaping strategy, design systems, and cross-functional teams.',
  'At ixigo I led UX for one of India\'s largest travel apps, redesigning core flows used by tens of millions of users. At Fincent I directed the entire product design from desktop to iOS. At Unacademy I led design for candidate and recruiter platforms across web and mobile.',
  'These days I\'m exploring AI-assisted design workflows — using tools like Claude Code, Figma AI, and MCP-based systems to move faster from idea to working product. This portfolio itself was built entirely with Claude Code.',
  'When I\'m not designing, you\'ll find me trekking in the hills, on a cricket pitch, playing badminton, or riding my bike. I also spend a lot of time tinkering with the latest AI tools to see what\'s actually useful.',
]

export default function About() {
  return (
    <>
      <Nav />
      <main className="bg-[#0a0a0a] min-h-screen pt-24 pb-32">

        {/* Back link */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" />
            </svg>
            Home
          </Link>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-4">
            About
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Hello, I'm Riju.
          </h1>
        </div>

        {/* Scrolling photo strip */}
        <div className="overflow-hidden mb-16">
          <div className="flex gap-4 animate-marquee w-max">
            {[...PHOTOS, ...PHOTOS].map((n, i) => (
              <div
                key={i}
                className="relative shrink-0 w-64 h-80 rounded-2xl overflow-hidden bg-[#1a1a1a]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/about/${n}.jpg`}
                  alt={`Photo ${n}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto px-6 mb-24">
          <div className="max-w-2xl space-y-5">
            {BIO.map((para, i) => (
              <p key={i} className="text-base text-[#888888] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="max-w-4xl mx-auto px-6 mb-24">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
            10+ years building products.
          </h2>
          <div className="flex flex-col divide-y divide-[#1f1f1f]">
            {ROLES.map(({ company, role, dates }, i) => (
              <div key={i} className="flex items-center gap-5 py-5">
                {/* Logo placeholder */}
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/about/companies/${company.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={company}
                    className="w-full h-full object-contain p-1.5"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{company}</p>
                  <p className="text-sm text-[#666666]">{role}</p>
                </div>
                <p className="shrink-0 text-sm text-[#555555] tabular-nums">{dates}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-[#2a2a2a] pt-16">
            <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">
              Let's build something together.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="mailto:rijukk08@gmail.com"
                className="text-lg font-medium text-white hover:opacity-60 transition-opacity"
              >
                rijukk08@gmail.com →
              </a>
              <span className="hidden sm:block text-[#2a2a2a]">—</span>
              <a
                href="https://linkedin.com/in/riju-kk-588a5025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#888888] hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

      </main>

      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}
