import path from 'path'
import { Vibrant } from 'node-vibrant/node'

export async function extractDominantColor(imageFile: string): Promise<string> {
  try {
    const imagePath = path.join(process.cwd(), 'images', imageFile)
    const palette = await Vibrant.from(imagePath).getPalette()
    const swatch =
      palette.DarkVibrant ??
      palette.DarkMuted ??
      palette.Vibrant ??
      palette.Muted
    return swatch?.hex ?? '#1c1c2e'
  } catch {
    return '#1c1c2e'
  }
}
