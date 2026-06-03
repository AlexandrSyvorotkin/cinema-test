import { characterMock } from '../data/characterMock'
import type { OrganicResult } from '../types/serp'

export function findCharacterOrganicByPath(pathname: string): OrganicResult | undefined {
  return characterMock.organicResults.find((item) => item.pagePath === pathname)
}
