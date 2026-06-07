'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-10 sm:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-widest text-[#888888] mb-5">About</p>
          <h2 className="text-3xl font-semibold text-white leading-snug">
            Designing with purpose, empathy, and attention to detail.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 text-[#888888] text-sm leading-relaxed pt-1 sm:pt-10"
        >
          <p>
            I'm a Lead Product Designer with experience across fintech, edtech, and e-commerce. I
            believe great design is as much about asking the right questions as it is about crafting
            beautiful interfaces.
          </p>
          <p>
            My work spans early-stage startups to established platforms — helping teams ship
            products that are not just functional, but genuinely enjoyable to use.
          </p>
          <div className="pt-2">
            <a
              href="mailto:rijukk08@gmail.com"
              className="text-sm text-white font-medium hover:opacity-60 transition-opacity"
            >
              rijukk08@gmail.com →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
