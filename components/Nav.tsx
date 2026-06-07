'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-sm border-b border-neutral-800'
          : ''
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-100 hover:opacity-70 transition-opacity"
        >
          Riju Balakrishnan
        </Link>
        <div className="flex items-center gap-6">
          <a href="#work" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
            Work
          </a>
          <a href="#about" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
