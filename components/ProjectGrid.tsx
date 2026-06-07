'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { StaticImageData } from 'next/image'
import type { Project } from '@/lib/data'

import ixigoImg from '../images/ixigo.png'
import fincentDesktopImg from '../images/fincent_desktop.png'
import fincentAppImg from '../images/fincent_app.png'
import airlearnImg from '../images/airlearn.png'
import nextlevelImg from '../images/nextlevel.png'
import ikeaImg from '../images/ikea.png'

const PROJECT_IMAGES: Record<string, StaticImageData> = {
  '1': ixigoImg,
  '2': fincentDesktopImg,
  '3': fincentAppImg,
  '4': airlearnImg,
  '5': nextlevelImg,
  '6': ikeaImg,
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  )
}

function ProjectCard({
  project,
  index,
  bgColor,
}: {
  project: Project
  index: number
  bgColor: string
}) {
  const thumb = PROJECT_IMAGES[project._id]

  const inner = (
    <div className="rounded-3xl overflow-hidden flex flex-col" style={{ backgroundColor: bgColor }}>
      {/* Top content */}
      <div className="flex-shrink-0 px-7 pt-7 pb-4">
        <div className="flex items-start justify-between gap-4">
          {/* Category + Company */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-[#e85d26]">
              {project.category}
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888]">
              · {project.company}
            </span>
          </div>
          {/* Arrow button */}
          <div className="shrink-0 w-8 h-8 rounded-full border border-[#2a2a2a] bg-black/30 flex items-center justify-center text-[#888888] group-hover:text-white group-hover:border-white/40 transition-colors">
            <ArrowIcon />
          </div>
        </div>

        {/* Headline */}
        <h3 className="mt-4 text-2xl md:text-[1.6rem] font-bold text-white leading-snug">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] px-2.5 py-1 rounded-full bg-[#1f1f1f] text-[#888888] tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image — exactly 816×416, cropped center top */}
      {thumb && (
        <div className="relative w-full h-[416px] overflow-hidden rounded-t-2xl">
          <Image
            src={thumb}
            alt={project.title}
            fill
            className="object-cover"
            style={{ objectPosition: 'center top' }}
            sizes="816px"
          />
        </div>
      )}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        {inner}
      </Link>
    </motion.div>
  )
}

export default function ProjectGrid({
  projects,
  projectColors,
}: {
  projects: Project[]
  projectColors: Record<string, string>
}) {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.slice(0, 3)
  const rest = projects.slice(3)
  const visible = showAll ? projects : featured

  return (
    <section id="work" className="py-8 px-6 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-widest text-[#888888] mb-6"
      >
        Selected Work
      </motion.p>
      <div className="flex flex-col gap-5">
        {visible.map((project, i) => (
          <ProjectCard
            key={project._id}
            project={project}
            index={i}
            bgColor={projectColors[project._id] ?? '#1c1c2e'}
          />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-white border border-[#2a2a2a] hover:border-[#444] rounded-full px-6 py-2.5 transition-colors"
          >
            {showAll ? 'Show less' : 'View all work'}
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
