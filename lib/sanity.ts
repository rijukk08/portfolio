import { createClient } from '@sanity/client'
import type { Project } from './data'

export const client = createClient({
  projectId: 'lg5nzwpb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getProjects(): Promise<Project[]> {
  try {
    const results = await client.fetch<Project[]>(
      `*[_type == "project"] | order(order asc) {
        _id,
        title,
        subtitle,
        description,
        tags,
        link,
        "image": image.asset->url
      }`
    )
    return results ?? []
  } catch {
    return []
  }
}
