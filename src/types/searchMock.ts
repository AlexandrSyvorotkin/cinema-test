import type { OrganicResult, RelatedSearch } from './serp'

export type CharacterSearchMock = {
  variant: 'character'
  displayName: string
  role: string
  tabs: { label: string; active?: boolean; disabled?: boolean }[]
  spouse?: string
  spouseAvatars?: string[]
  photos: {
    main: string
    top: string
    bottom: string
  }
  featuredArticle: {
    source: string
    sourceShort: string
    title: string
    snippet: string
    image: string
  }
  instagramCard: {
    source: string
    title: string
    snippet?: string
    stats?: string
    duration: string
    image: string
  }
  sidePrimary?: {
    label: string
    value: string
    sub?: string
  }
  sideSecondary?: {
    label: string
    value: string
    avatars?: string[]
  }
  relatedQuestions: string[]
  organicResults: OrganicResult[]
  relatedSearches: RelatedSearch[]
}

export type AiOverviewSource = {
  siteName: string
  title: string
  image?: string
}

export type AiOverviewData = {
  paragraphs: string[]
  listTitle: string
  listItems: string[]
  sourcesCount: number
  sources: AiOverviewSource[]
}

export type IllnessSearchMock = {
  variant: 'illness'
  suggestedQuery: string
  aiOverview: AiOverviewData
  relatedQuestions: string[]
  organicResults: OrganicResult[]
  relatedSearches: RelatedSearch[]
  questionsAfterOrganicIndex: number
}

export type SearchMock = CharacterSearchMock | IllnessSearchMock

export function isIllnessMock(data: SearchMock): data is IllnessSearchMock {
  return data.variant === 'illness'
}

export function isCharacterMock(data: SearchMock): data is CharacterSearchMock {
  return data.variant === 'character'
}

export function isKnowledgePanelMock(
  data: SearchMock,
): data is CharacterSearchMock {
  return data.variant === 'character'
}

/** @deprecated Используйте CharacterSearchMock */
export type LegacySearchMock = Omit<CharacterSearchMock, 'variant'>
