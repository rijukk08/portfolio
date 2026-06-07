import { getProjects } from '@/lib/sanity'
import { STATIC_PROJECTS } from '@/lib/data'
import { extractDominantColor } from '@/lib/extract-colors'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import BuildingWithAI from '@/components/BuildingWithAI'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default async function Home() {
  const sanityProjects = await getProjects()
  const projects = sanityProjects.length > 0 ? sanityProjects : STATIC_PROJECTS

  const colorEntries = await Promise.all(
    projects.map(async (p) => {
      const file = (p as typeof STATIC_PROJECTS[0]).imageFile
      const color = file ? await extractDominantColor(file) : '#1c1c2e'
      return [p._id, color] as const
    })
  )
  const projectColors: Record<string, string> = Object.fromEntries(colorEntries)

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectGrid projects={projects} projectColors={projectColors} />
        <BuildingWithAI />
        <About />
      </main>
      <Footer />
    </>
  )
}
