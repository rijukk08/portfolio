'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import photo1 from '@/images/about/1.jpg'
import photo2 from '@/images/about/2.jpg'
import photo4 from '@/images/about/4.jpg'
import photo5 from '@/images/about/5.jpg'
import photo6 from '@/images/about/6.jpg'
import photo7 from '@/images/about/7.jpg'

const PHOTOS = [photo1, photo2, photo4, photo5, photo6, photo7]

const BIO = [
  "A decade in, and I've had the chance to work on products that a lot of people use daily — trains on ixigo, finances on Fincent, learning on Unacademy. Now figuring out enterprise at IBM.",
  "I care about making complex things feel simple. Not as a philosophy — just as the actual job.",
  "Outside work: trekking, cricket, badminton, biking, and spending too much time trying out whatever AI tool just dropped.",
]

const ROLES = [
  {
    company: 'IBM',
    dates: 'Jan 2025 – Present',
    role: 'Design',
    description: "Still early days here, but I'm working on enterprise product experiences at one of the world's most complex software companies. It's a different scale than anything I've worked on before — and that's exactly why I took it.",
  },
  {
    company: 'Unacademy',
    dates: 'Feb 2024 – Aug 2024',
    role: 'Lead Designer',
    description: "I led UX and visual design for candidate and recruiter platforms — both web and mobile. Worked closely with engineering and QA to ship pixel-perfect interfaces on tight timelines. Short stint, but shipped meaningful things.",
  },
  {
    company: 'Fincent',
    dates: 'Jan 2022 – Feb 2024',
    role: 'Lead Product Designer',
    description: "Led design end-to-end for a fintech startup building bookkeeping tools for small businesses. Owned the desktop product — transaction management, financial summaries, directory features — and also directed the entire iOS app design from scratch. Managed the design system too.",
  },
  {
    company: 'ixigo',
    dates: 'Aug 2018 – Jan 2022',
    role: 'Lead UX Designer → Principal UX Designer',
    description: "Three and a half years at one of India's largest travel apps. I led UX for the trains product — redesigned the search results page, trip details, and booking flow. Did the research, ran the user calls, made the calls on direction. Also interviewed and mentored junior designers along the way.",
  },
  {
    company: 'Design For Use',
    dates: 'May 2015 – Jul 2018',
    role: 'Sr. Product Designer',
    description: "Where I learned to do this properly. Worked across a range of clients — co-designed the IKEA KSA ecommerce UX with Frog Design, built the mobile app UX for IKEA KSA, led end-to-end design for Club Mahindra app, and redesigned Apollo Munich Insurance web platforms.",
  },
]

export default function About() {
  return (
    <>
      <Nav />
      <main className="bg-[#0a0a0a] min-h-screen pt-24 pb-32">

        {/* Back link */}
        <div className="max-w-5xl mx-auto px-6 mb-12">
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
        <div className="max-w-5xl mx-auto px-6 mb-12">
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
            {[...PHOTOS, ...PHOTOS].map((src, i) => (
              <div key={i} className="relative shrink-0 w-64 h-80 rounded-2xl overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={src}
                  alt={`Photo ${(i % PHOTOS.length) + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="256px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="max-w-3xl space-y-6">
            {BIO.map((para, i) => (
              <p key={i} style={{ fontSize: '18px', lineHeight: '1.8', color: '#e0e0e0' }}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
            10+ years building products.
          </h2>
          <div className="flex flex-col">
            {ROLES.map(({ company, dates, role, description }, i) => (
              <div key={i} className="border-t border-[#1f1f1f] py-8">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <span style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>{company}</span>
                  <span className="shrink-0 tabular-nums" style={{ fontSize: '14px', color: '#666666' }}>{dates}</span>
                </div>
                <p className="mb-4" style={{ fontSize: '15px', color: '#888888' }}>{role}</p>
                <p className="max-w-3xl" style={{ fontSize: '17px', lineHeight: '1.75', color: '#c8c8c8' }}>{description}</p>
              </div>
            ))}
            <div className="border-t border-[#1f1f1f]" />
          </div>
        </div>

        {/* Contact */}
        <div className="max-w-5xl mx-auto px-6">
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
