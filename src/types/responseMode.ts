import type { SearchMock } from './searchMock'
import { characterMock } from '../data/characterMock'
import { illnessMock } from '../data/illnessMock'

export const RESPONSE_MODES = [
  { id: 'character', label: 'Персонаж' },
  { id: 'illness', label: 'Болезнь' },
  { id: 'sun', label: 'Солнце' },
] as const

export type ResponseMode = (typeof RESPONSE_MODES)[number]['id']

export const DEFAULT_RESPONSE_MODE: ResponseMode = 'character'

const LEGACY_MODE_MAP: Record<string, ResponseMode> = {
  knowledge: 'character',
  serp: 'character',
  character: 'character',
  illness: 'illness',
  sun: 'sun',
}

export function normalizeResponseMode(value: string): ResponseMode | null {
  return LEGACY_MODE_MAP[value] ?? null
}

export function isResponseMode(value: string): value is ResponseMode {
  return RESPONSE_MODES.some((m) => m.id === value)
}

export type SearchResultsMode = Exclude<ResponseMode, 'sun'>

export function getSearchMockForMode(mode: SearchResultsMode): SearchMock {
  return mode === 'character' ? characterMock : illnessMock
}
