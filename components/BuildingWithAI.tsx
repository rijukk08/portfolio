export default function BuildingWithAI() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">

      {/* Top */}
      <p className="text-[0.65rem] uppercase tracking-[0.22em] font-semibold text-[#e85d26] mb-4">
        Building with AI
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.1] mb-3">
        Shipping real things to learn new skills.
      </h2>
      <p className="text-[#888888] text-sm mb-8">
        Not tutorials. Not side projects that never launch. Real things.
      </p>

      {/* Tool icons */}
      <div className="flex items-center gap-6 mb-16 opacity-50">
        {TOOLS.map(({ label, icon }) => (
          <div key={label} className="relative group flex flex-col items-center">
            <div className="w-8 h-8 text-[#888888] hover:text-white hover:opacity-100 transition-colors cursor-default">
              {icon}
            </div>
            {/* Tooltip */}
            <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1f1f1f] border border-[#2a2a2a] px-2 py-1 text-[0.65rem] text-[#888888] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Featured card */}
      <div className="rounded-2xl bg-[#111111] border border-[#2a2a2a] border-t-[#e85d26] overflow-hidden"
           style={{ borderTopWidth: '2px', borderTopColor: '#e85d26' }}>
        <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">

          {/* Left — monogram + title */}
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg tracking-tight">RK</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight whitespace-nowrap">
              This Portfolio
            </h3>
          </div>

          {/* Right — description + tags */}
          <div className="flex flex-col gap-6 pt-1">
            <p className="text-[#888888] text-base leading-relaxed">
              Designed and built entirely with Claude Code. Every layout decision, every interaction, every detail written from scratch. No templates. You are looking at it.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Claude Code', 'Claude API', 'Next.js', 'Framer Motion', 'Tailwind'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#1f1f1f] text-[#888888] border border-[#2a2a2a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

const TOOLS = [
  {
    label: 'Terminal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M7 8l4 4-4 4M13 16h4" />
      </svg>
    ),
  },
  {
    label: 'Claude',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l2.5 5.5H9.5L12 5zm0 14l-2.5-5.5h5L12 19zm-7-7l5.5-2.5V14L5 12zm14 0l-5.5 2.5V10L19 12z" />
      </svg>
    ),
  },
  {
    label: 'VS Code',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.88V4.12a1.5 1.5 0 0 0-.85-1.533zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Vercel',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    ),
  },
]
