'use client'
import Image from 'next/image'
import photo from '../images/1706869773263.jpeg'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-6 pt-28 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center max-w-xl gap-6"
      >
        <motion.div variants={item}>
          <Image
            src={photo}
            alt="Riju Balakrishnan"
            width={250}
            height={250}
            className="object-cover rounded-2xl"
            priority
          />
        </motion.div>

        <motion.p
          variants={item}
          className="text-[0.65rem] uppercase tracking-[0.22em] text-[#888888]"
        >
          Lead Product Designer &nbsp;+&nbsp; AI Builder
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.08]"
        >
          Designing in the AI era<span className="text-[#e85d26]">.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-[0.95rem] md:text-base text-[#888888] leading-relaxed"
        >
          Product designer with 10+ years. Designing products used by millions across travel, fintech, and edtech. Currently at IBM. Previously at Unacademy, Fincent, and ixigo. Currently building with Claude Code.
        </motion.p>

        <motion.p
          variants={item}
          className="text-sm text-[#666666]"
        >
          Bengaluru, India
        </motion.p>
      </motion.div>
    </section>
  )
}
