export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#2a2a2a] py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#888888] mb-4">Get in touch</p>
          <a
            href="mailto:rijukk08@gmail.com"
            className="text-2xl sm:text-3xl font-semibold text-white hover:opacity-60 transition-opacity break-all"
          >
            rijukk08@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/riju-kk-588a5025/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888888] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[#2a2a2a]">—</span>
          <p className="text-xs text-[#888888]">
            © {new Date().getFullYear()} Riju Balakrishnan
          </p>
        </div>
      </div>
    </footer>
  )
}
