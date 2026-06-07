import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import CASE_STUDIES from '@/lib/case-studies'

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = CASE_STUDIES[slug]
  if (!study) return {}
  return { title: `${study.title} — Riju Balakrishnan` }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = CASE_STUDIES[slug]
  if (!study) notFound()

  return (
    <>
      <Nav />

      <main className="pt-16 bg-[#0a0a0a] min-h-screen">
        {/* Full-bleed hero */}
        <div className="w-full h-[55vh] min-h-[360px] relative overflow-hidden bg-[#141414]">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          {/* Back button */}
          <div className="pt-10 pb-2">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7 7M5 12l7-7" />
              </svg>
              All work
            </Link>
          </div>

          {/* Category + Company */}
          <div className="flex items-center gap-2 mt-6">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-[#e85d26]">
              {study.category}
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888]">
              · {study.company}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.08]">
            {study.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-[#1f1f1f] text-[#888888]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#2a2a2a] mt-10" />

          {/* Two-column: Overview + Meta */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 py-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888888] mb-4">Overview</p>
              <p className="text-base md:text-lg text-[#888888] leading-relaxed">
                {study.overview}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { label: 'Role',    value: study.role },
                { label: 'Year',    value: study.year },
                { label: 'Company', value: study.company },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-widest text-[#888888] mb-2">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#2a2a2a]" />

          {/* Body sections */}
          <div className="py-16 space-y-16">
            {study.sections.map((section, i) => {
              if (section.type === 'image' && section.image) {
                const isString = typeof section.image === 'string'
                return (
                  <div key={i} className="w-full rounded-2xl overflow-hidden bg-[#141414]">
                    {isString ? (
                      <div className="relative w-full h-[477px]">
                        <Image
                          src={section.image as string}
                          alt={section.imageAlt ?? ''}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 848px"
                        />
                      </div>
                    ) : (
                      <Image
                        src={section.image}
                        alt={section.imageAlt ?? ''}
                        width={848}
                        height={477}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 848px"
                      />
                    )}
                  </div>
                )
              }

              return (
                <div key={i} className="max-w-2xl space-y-4">
                  {section.heading && (
                    <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="text-base text-[#888888] leading-relaxed">{p}</p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2 pt-1">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-base text-[#888888] leading-relaxed">
                          <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#e85d26]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom back link */}
          <div className="border-t border-[#2a2a2a] py-12">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-white font-medium hover:opacity-60 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7 7M5 12l7-7" />
              </svg>
              Back to all work
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
