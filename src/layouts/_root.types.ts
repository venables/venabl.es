export interface RootLayoutProps {
  title: string
  description?: string
  canonical?: string | URL
  image?: {
    alt?: string
    height?: number
    url?: string
    width?: number
  }
}
