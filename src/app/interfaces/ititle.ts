export interface Ititle {
  id: number
  title: string
  authors: Author[]
  summaries: string[]
  translators: any[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: string
  formats: Formats
  download_count: number
}

export interface Author {
  name: string
  birth_year: number
  death_year: number
}

export interface Formats {
  "text/html": string
  "application/epub+zip": string
  "application/x-mobipocket-ebook": string
  "text/plain; charset=us-ascii": string
  "application/rdf+xml": string
  "image/jpeg": string
  "application/octet-stream": string
}
