import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Riju Balakrishnan — Lead Product Designer',
  description:
    'Designer creating memorable, user-friendly experiences, passionate about empowering creatives.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} dark`} suppressHydrationWarning>
      <body className="bg-[#0a0a0a] text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  )
}
