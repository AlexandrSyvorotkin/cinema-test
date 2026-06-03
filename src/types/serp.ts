export type OrganicResult = {
  id: string
  siteName: string
  url: string
  faviconColor: string
  title: string
  date?: string
  snippet: string
  thumbnail?: string
  posters?: string[]
  rating?: { value: number; count: number }
}

export type RelatedSearch = {
  prefix: string
  bold: string
}
